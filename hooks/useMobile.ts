import { ThemeContext } from 'contexts/theme/ThemeContext'
import { useContext } from 'react'

export default function useMobile() {
  const { isMobile } = useContext(ThemeContext)
  return isMobile
}
