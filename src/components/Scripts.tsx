import Script from "next/script";

export default function Scripts() {
  return (
    <>
      <Script async id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MF5S74JV');
        `}
      </Script>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KMF5V28LQG"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KMF5V28LQG');
        `}
      </Script> */}
      <Script
        async
        src="https://cmp.osano.com/Azqe0cTA60Bv66GT/bf30d28b-8dc1-4ec4-a26b-c52a5500d7d7/osano.js"
        strategy="lazyOnload"
      />
    </>
  );
}
