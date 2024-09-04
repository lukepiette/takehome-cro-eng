import createEmotionCache from "@utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Scripts from "@components/Scripts";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>

          <link rel="icon" href="/favicon.ico" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400..600&display=swap"
            rel="stylesheet"
          /> */}
          <meta name="theme-color" content="#1975ff" />
          {(this.props as any).emotionStyleTags}

          <Scripts />

          {/* Hyros Tracking Script */}
          <Script id="hyros-tracking-script" strategy="afterInteractive">
            {`
              var head = document.head;
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = "https://t.runpod.io/v1/lst/universal-script?ph=59651d1f641a2973889f965456ffa7031ab2cec99425593a3fa59d66493a6653&tag=!clicked&ref_url=" + encodeURI(document.URL);
              head.appendChild(script);
            `}
          </Script>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MF5S74JV"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
