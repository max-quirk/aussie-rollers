import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
// import SiteNavigation from 'components/navigation/Navbar/SiteNavigation'
import { LanguageProvider } from 'contexts/Language/LanguageProvider'
import { ThemeProvider } from 'contexts/Theme/ThemeProvider'
import React from 'react'

/**
 * Contains all the core app providers used by each page.
 */
export const AppWrapper: React.FC<
  React.PropsWithChildren<NonNullable<unknown>>
> = ({ children }) => {
  return (
    <React.StrictMode>
      <LanguageProvider>
        <ThemeProvider>
          <_Wrapper>{children}</_Wrapper>
        </ThemeProvider>
      </LanguageProvider>
    </React.StrictMode>
  )
}

const _Wrapper: React.FC<React.PropsWithChildren<NonNullable<unknown>>> = ({
  children,
}) => {

  return (
    <Layout className="flex h-screen flex-col bg-transparent">
      {/* <SiteNavigation /> */}
      <Content className='pt-20 md:p-0'>
        {children}
      </Content>
    </Layout>
  )
}
