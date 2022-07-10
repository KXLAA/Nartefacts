import toast from 'react-hot-toast'

import { Box } from '@/components/box'
import { Grid } from '@/components/grid'
import { useCopyToClipboard, useMouseOver } from '@/lib/hooks'

import { StyledColor } from './styles'
import { ColorBoxProps, PalletteProps } from './types'

export const ColorBox: React.FC<ColorBoxProps> = ({ color, small }) => {
  const [, copy] = useCopyToClipboard()
  const [hoverRef, isHovered] = useMouseOver()

  const copyToClipboard = (color: string) => {
    copy(color)
    toast(`Copied ${color}`)
  }

  return (
    <StyledColor
      small={small}
      ref={hoverRef as any}
      css={{
        backgroundColor: color.match(
          /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i,
        )
          ? color
          : '#202020',
      }}
      onClick={() => copyToClipboard(color)}
      data-testid="color-box"
    >
      <span>{isHovered && `COPY`}</span>
    </StyledColor>
  )
}

export const Palette: React.FC<PalletteProps> = ({ colors, small }) => {
  colors.forEach((color, index) => {
    if (!color.match(/^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/i)) {
      console.warn(
        `Invalid color ${color} at index ${index} in Palette component.`,
      )
    }
  })
  if (small) {
    return (
      <Box
        css={{
          display: 'flex',
          width: 200,
          gap: 8,
          overflowX: 'auto',
          'scroll-snap-type': 'x',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '-webkit-overflow-scrolling': 'touch',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {colors?.map((color) => (
          <ColorBox key={color} color={color} small={small} />
        ))}
      </Box>
    )
  }

  return (
    <Grid columns={4} gap={small ? 1 : 2}>
      {colors?.map((color) => (
        <ColorBox key={color} color={color} small={small} />
      ))}
    </Grid>
  )
}
