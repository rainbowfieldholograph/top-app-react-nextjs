import { SVGProps } from 'react'

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  type: 'arrow' | 'star'
}
