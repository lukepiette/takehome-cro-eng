import Script from "next/script"

export default function Scripts() {
  return (
    <>
      <Script id="hyros-tracking" strategy="afterInteractive">
        {`
          var head = document.head;
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = "https://t.runpod.io/v1/lst/universal-script?ph=59651d1f641a2973889f965456ffa7031ab2cec99425593a3fa59d66493a6653&tag=!clicked&ref_url=" + encodeURIComponent(document.URL);
          head.appendChild(script);
        `}
      </Script>

      <Script id="google-tag-manager" strategy="afterInteractive">
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
      <Script id="zi-script" strategy="lazyOnload">
        {`
        window[(function(_xdD,_Eb){var _LVw7W='';for(var _YX10N1=0;_YX10N1<_xdD.length;_YX10N1++){var _XpTm=_xdD[_YX10N1].charCodeAt();_XpTm-=_Eb;_XpTm+=61;_LVw7W==_LVw7W;_XpTm%=94;_XpTm+=33;_XpTm!=_YX10N1;_Eb>8;_LVw7W+=String.fromCharCode(_XpTm)}return _LVw7W})(atob('LnskRkM+OTdIfTlN'), 50)] = '570efea1261727386569';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_gzg,_m9){var _Y3jrN='';for(var _J8Ttrg=0;_J8Ttrg<_gzg.length;_J8Ttrg++){var _twDk=_gzg[_J8Ttrg].charCodeAt();_twDk-=_m9;_Y3jrN==_Y3jrN;_twDk+=61;_m9>5;_twDk%=94;_twDk+=33;_twDk!=_J8Ttrg;_Y3jrN+=String.fromCharCode(_twDk)}return _Y3jrN})(atob('LDg4NDdcUVEuN1A+LU83JzYtNDg3UCczMVE+LU84JStQLjc='), 34)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });
        `}
      </Script>
      <Script
        src="https://cmp.osano.com/Azqe0cTA60Bv66GT/bf30d28b-8dc1-4ec4-a26b-c52a5500d7d7/osano.js"
        strategy="lazyOnload"
      />
    </>
  )
}
