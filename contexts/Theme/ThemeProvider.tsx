import { ThemeContext } from 'contexts/theme/ThemeContext'
import { useSiteTheme } from 'contexts/theme/useSiteTheme'

export const ThemeProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const juiceTheme = useSiteTheme()

  return (
    <ThemeContext.Provider value={juiceTheme}>{children}</ThemeContext.Provider>
  )
}
