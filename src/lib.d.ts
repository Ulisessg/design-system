import {ComponentPropsWithRef, HTMLAttributes} from 'react'

export type ComponentProps<Element extends keyof JSX.IntrinsicElements> = ComponentPropsWithRef<Element> & HTMLAttributes<Element> & {}