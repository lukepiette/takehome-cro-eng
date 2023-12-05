import { Card, Grid } from "@mui/material"
import Head from "next/head"
import Script from "next/script"

const Disclaimer = () => (
  <>
    <Head>
      <title>RunPod - Disclaimer</title>
      <meta name="description" content="RunPod legal documents for disclaimer." />
    </Head>

    <Grid maxWidth="lg" sx={{ px: 4, margin: "auto" }} container>
      <Grid item xs={12}>
        <Card>
          <div
            name="termly-embed"
            data-id="89dc36c0-6ee5-40fb-b74e-90af4137cc83"
            data-type="iframe"
          ></div>
        </Card>
      </Grid>
    </Grid>

    <Script src="https://app.termly.io/embed-policy.min.js" strategy="lazyOnload" />
  </>
)

export default Disclaimer
