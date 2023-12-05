import Script from "next/script"

export default function Scripts() {
  return (
    <>
      <Script
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
      </Script>
      <Script
        src="https://cmp.osano.com/Azqe0cTA60Bv66GT/bf30d28b-8dc1-4ec4-a26b-c52a5500d7d7/osano.js"
        strategy="lazyOnload"
      />
    </>
  )
}
