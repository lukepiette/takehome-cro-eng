import createEmotionCache from "@utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Scripts from "@components/Scripts";

const coframeProjectId = "66493c53a8c0cb866f5f1b35";

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
          <Script
            async
            strategy="beforeInteractive"
            src={`https://cdn.coframe.ai/cf-latest.min.js?project_id=${coframeProjectId}`}
          />
          <Script async id="coframe-setup" strategy="beforeInteractive">
            {`
              // Antiflicker: hide body until coframe:show event or 2s timeout
              const style = document.createElement('style');
              style.innerHTML = 'body { opacity: 0 !important; }';
              const cfhide = () => document.head.appendChild(style);
              const cfshow = () => style.remove();
              cfhide(); setTimeout(cfshow, 2000);
              document.addEventListener('coframe:show', cfshow);

              // Coframe queue setup:
              window.CFQ = window.CFQ || [];
              window.CFQ.push({config: {
                projectId: '${coframeProjectId}',
                waitForHydration: true,
              }});
            `}
          </Script>
          <Scripts />
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
