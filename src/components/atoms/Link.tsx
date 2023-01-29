import React, { AnchorHTMLAttributes, FC, forwardRef } from "react"
import LinkNext, { LinkProps } from "next/link"
import styled from "styled-components"

const Link = forwardRef<HTMLAnchorElement, LinkComponentProps>(function Link({text, target,href,...rest}, ref) {
  if(typeof target === 'undefined') {
    return<LinkNextStyles 
      {...rest} 
      href={href}
      as={LinkNextStyles}
      ref={ref}
      >
        {text}
    </LinkNextStyles>
  }
  return (
    <LinkNextStyles {...rest}
    href={href}
    target={target}
    rel="noreferrer noopener"
    as={LinkNextStyles}
    ref={ref}
    >{text}</LinkNextStyles>
  )
})

export default Link

interface LinkExternalProps extends ComponentProps<'a'> { }

interface LinkComponentProps
  extends LinkProps,
  Omit<
    LinkExternalProps,
    "href" | "onClick" | "onMouseEnter" | "onTouchStart"
  > {
    /** Link text content */
  text: string
  as?: any
  /** Link color, by default dark2 - #0C4B8E */
  version?: "lighter" | "darker"
  /** The target attribute specifies where the linked document will open when the link is clicked. The default is the current window. */
  target?: "_blank" | "_self" | "_parent" | "_top"
}

const LinkNextStyles = styled(LinkNext)<{version: LinkComponentProps['version']}>`
  font-size: 20px;
  color: ${({ version, theme }) => {
    if (version === "lighter") return
    return theme.colors.dark1
  }};
  :active,
  :focus, :hover {
    color: ${({ theme, version }) => {
    if (version === "lighter") return theme.colors.dark1
    return theme.colors.dark2
  }};
  }
`
