import { Layout } from 'antd'
import { Footer } from 'components/navigation/Footer'
import { Header } from 'components/navigation/Header'
import React from 'react'

export const SITE_PADDING_X = 'px-10'

export const CoreWrapperComponents: React.FC<React.PropsWithChildren<NonNullable<unknown>>> = ({
  children,
}) => {
  return (
    <Layout className="flex h-screen flex-col bg-transparent w-full">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </Layout>
  )
}
