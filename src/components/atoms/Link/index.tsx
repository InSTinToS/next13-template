import OriginalLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface ILinkProps extends LinkProps {
  children: ReactNode
}

export default function Link({ children, ...props }: ILinkProps) {
  return <OriginalLink {...props}>{children}</OriginalLink>
}
