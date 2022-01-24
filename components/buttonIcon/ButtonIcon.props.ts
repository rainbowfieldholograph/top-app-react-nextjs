import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { IconTypes } from '../svgIcon/SvgIcon.props'

export interface ButtonIconProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'white'
  icon: IconTypes
}
