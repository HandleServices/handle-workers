import * as React from 'react'

const BellIcon: React.ElementType = ({
  fill,
  className,
  height,
  width,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={height || 40}
      height={width || 40}
      className={className}
      fill={fill}
      {...props}
    >
      <path fill="url(#a)" d="M0 0h40v40H0z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="scale(.024)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2bS2sTURTH43MnPnaiLsRndS3qwscnEFS6EMSVCK5EMJkmBUdsk0mkVVFEAoIm946tafUDWKF+ASlU3YgLKUVQrFpfBW0bz8nUktJk7iQzd/5JzYEDpbST8/vdc+eGmXsjEUB0dvVt6UjJQcpvc/kkmhG7ELWEHg68mOiwZHFB0u9iabEZXZ/2MCw5sAh+XoJ8hK5Pe5CAyeoCxFd0fdqDIGddBMyi69Me/60A0xxeGU/aR1QC+G/4b9H1BhKmaS6PJ+UJwxL9NPe/VAVflOKz8z/iOF8DzVFzcNEdlt1O0K+9Q1dOvoZh5c80TVfEk2IPjdyIX/AKIl7Q9NiN5nMNHilay38EDV8mYYrkXogUi8vQrAuDCqLibusCr3CPyDaOBCqERv1WePD/Vgx5syEk0NLVFTr8/JQQV6DwdMM7RAKmcQLkDEk4CoE30oW19OHvUPBlXTBGS+760AXQyPeg4cskZEKFv9hb2FB6kNEA8HNTYdI0768LTQAZv4yGrtAFiVDg+WsuGR9HA1cQMBbKshhLiwNo2KqZEvu0C6C5H4eDVu+CqHYB9CGP0aDVBcgB7QKozUbRoC4dMKJdAFn+hAZ1EfAxDAFTaNCqmRK/tMK3Fwor4JCK5Bq1CeDv/2hAVUYz99ZoE5DofrAJDajKRLfYqE0Av8BEAyozld+uTQBdfD8cUClA47dBWmZOwwHVAk5pFCCvwgGVAqSpUYDohwOqO8DWJoAu/hYOqBbwRgv8pWt92+BwHrOzK781cAFG2j6PBvOaNFXPBi/AEs/RYN5TDAUKH0vn2lzf6zdaUq2B7jqj0b8Lh6p5Gsg7gcA7oy9/o4FqFyD+xNIP9/qCL210SMlhNEz9KYZ87TDhZ+14CL9pG3XB043kGLcRHsBnpsS0YeVP1ghvH6SbyE948QGls7NEHvYEH83YO2rb0dUcyUzM5mH05SC6WI0S1O8NSMAHdKHaktiUAsjSe3ih+jpg3EMHCBtdqMYOEEoBfGiBt6rCiw0cXkzwU22lAKcLcjv5GIvr3v4mSWbgF7qeVoBWtKIVrQg6fN1Il8IhKoJ45UPAKLp+30EdcMOHgB50/b6DH0vVs6HaeaSVa0PXH0jUdZiCzwMslTDNwmqS8KwG+KfnstlV6LoDDZZQOlniMh1Kj+Bo5JccfHnM3ROuU0e8JODvTvLPspdPnIVdz19BO+H017kMxgAAAABJRU5ErkJggg=="
          id="b"
          width={height || 64}
          height={width || 64}
        />
      </defs>
    </svg>
  )
}
export default BellIcon
