import LocalizedClientLink from "@/modules/common/components/localized-client-link"

export default async function Footer() {

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>

          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <p className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}
