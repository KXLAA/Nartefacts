import { Copy as Icon } from 'lucide-react'
import { IconProps } from '@/components/Icons'

const Copy: React.FC<IconProps> = ({ color, size, strokeWidth }) => {
  return <Icon color={color} size={size} strokeWidth={strokeWidth} />
}

export default Copy
