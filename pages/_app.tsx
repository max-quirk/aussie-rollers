import { CoreWrapperComponents } from "components/common";
import { ContentfulProvider } from "contexts/contentful/ContentfulProvider";
import { GlobalContent } from "models/contentful/globalContent";
import { AppProps } from "next/app";
import React from "react";
import { fetchContentfulGlobalData } from "../utils/fetchContentfulGlobalData";
import '../styles/index.scss'

function App({ Component, pageProps, globalContent }: AppProps & { globalContent: GlobalContent }) {
  return (
    <React.StrictMode>
      <ContentfulProvider globalContent={globalContent}>
        <CoreWrapperComponents>
          <Component {...pageProps} />
        </CoreWrapperComponents>
      </ContentfulProvider>
    </React.StrictMode>
  );
}

App.getInitialProps = async () => {
  const globalContent = await fetchContentfulGlobalData()
  return { globalContent };
}

export default App;
