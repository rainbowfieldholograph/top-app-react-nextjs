import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HhLevelsBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  salary: number
  rate: LevelsEnum
}

export const enum LevelsEnum {
  Junior = 1,
  Middle,
  Senior,
}
