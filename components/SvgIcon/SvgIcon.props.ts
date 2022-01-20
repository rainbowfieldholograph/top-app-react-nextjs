import { SVGProps } from 'react'

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  type:
    | 'arrow'
    | 'star'
    | 'courses'
    | 'services'
    | 'books'
    | 'product'
    | 'logo'
    | 'rate'
    | 'check'
}
