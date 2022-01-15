import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
  size: 'small' | 'medium'
  children: ReactNode
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
