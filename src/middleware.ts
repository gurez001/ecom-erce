import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  // Skip processing for static files, API routes, and Next.js internal files
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return NextResponse.next(); // Continue without modification
  }

  // Log the current path for debugging purposes
  console.log(req.nextUrl.pathname);

  // Check if the URL already has a locale prefix and if the locale is `us`
  const pathname = req.nextUrl.pathname;
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'in';
  
  // Prevent paths like `/en/en` by checking if the locale is already in the path
  const pathSegments = pathname.split('/');
  if (pathSegments[1] === locale) {
    // Locale is already present in the path, so continue without redirection
    return NextResponse.next();
  }

  // If locale is `us` and the path doesn't have the locale prefix, redirect with the locale
  if (req.nextUrl.locale === 'us') {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}${req.nextUrl.search}`, req.url)
    );
  }

  // Continue the request if no redirection is needed
  return NextResponse.next();
}
