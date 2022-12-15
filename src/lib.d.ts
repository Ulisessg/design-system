import {ComponentPropsWithRef, HTMLAttributes} from 'react'

declare export type ComponentProps<El extends keyof JSX.IntrinsicElements> = ComponentPropsWithRef<El> & HTMLAttributes<El> & {}