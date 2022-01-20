import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface HhLevelsBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  salary: number
  rate: 1 | 2 | 3
}
