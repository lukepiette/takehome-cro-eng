import { Button } from "@mui/material"
import Link from "next/link"

export default function CombinedLink({ href, ...props }) {
  return (
    <Link href={href} passHref prefetch={false} legacyBehavior>
      <Button {...props} />
    </Link>
  )
}
