import { SVGProps } from 'react'

export enum IconTypes {
  arrow,
  star,
  courses,
  services,
  books,
  product,
  logo,
  rate,
  check,
  sort,
  glass,
  user,
  close,
  up,
  closeAlt,
  menu,
}

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  iconType: IconTypes
}
