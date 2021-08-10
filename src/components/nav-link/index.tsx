import { NavLink as Link, NavLinkProps } from "react-router-dom"

export default function NavLink(
  { children, ...rest }: Omit<NavLinkProps, "activeClassName">
) {
    return (
      <Link {...rest} activeClassName="active">
          {children}
      </Link>
    )
}