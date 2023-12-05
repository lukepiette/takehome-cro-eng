import { Card, Grid } from "@mui/material"
import Head from "next/head"
import Script from "next/script"

const CookiePolicy = () => (
  <>
    <Head>
      <title>RunPod - Cookie Policy</title>
      <meta name="description" content="RunPod legal documents for cookie policy." />
    </Head>

    <Grid maxWidth="lg" sx={{ px: 4, margin: "auto" }} container>
      <Grid item xs={12}>
        <Card>
          <div
            name="termly-embed"
            data-id="1023d109-844b-43b5-9ff7-27d3da108e66"
            data-type="iframe"
          ></div>
        </Card>
      </Grid>
    </Grid>

    <Script src="https://app.termly.io/embed-policy.min.js" strategy="lazyOnload" />
  </>
)

export default CookiePolicy
