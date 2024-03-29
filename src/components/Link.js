import { Link } from "@mui/material"
import NextLink from "next/link"

export default function CombinedLink({ href, ...props }) {
  return (
    <NextLink href={href} passHref prefetch={false} legacyBehavior>
      <Link {...props} />
    </NextLink>
  )
}
