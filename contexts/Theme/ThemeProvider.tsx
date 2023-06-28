import { ThemeContext } from 'contexts/Theme/ThemeContext'
import { useSiteTheme } from 'contexts/Theme/useSiteTheme'

export const ThemeProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const juiceTheme = useSiteTheme()

  return (
    <ThemeContext.Provider value={juiceTheme}>{children}</ThemeContext.Provider>
  )
}
