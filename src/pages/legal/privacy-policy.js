import { Card, Grid } from "@mui/material"
import Head from "next/head"
import Script from "next/script"

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>RunPod - Privacy Policy</title>
      <meta name="description" content="RunPod legal documents for privacy policy." />
    </Head>

    <Grid maxWidth="lg" sx={{ px: 4, margin: "auto" }} container>
      <Grid item xs={12}>
        <Card>
          <div
            name="termly-embed"
            data-id="8f0bb992-b290-4bc9-841b-e6f8fc93874a"
            data-type="iframe"
          ></div>
        </Card>
      </Grid>
    </Grid>

    <Script src="https://app.termly.io/embed-policy.min.js" strategy="lazyOnload" />
  </>
)

export default PrivacyPolicy
