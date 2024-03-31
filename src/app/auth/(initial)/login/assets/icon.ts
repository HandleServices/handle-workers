import { SVGAttributes } from 'react'

export type IconProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: SVGAttributes<SVGSVGElement>['className']
  color?: 'white' | 'black'
}

export const toSize = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} satisfies {
  [K in IconProps['size']]: number
}
