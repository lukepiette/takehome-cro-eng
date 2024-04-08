import {
  Card,
  Grid,
  Typography,
  Stack,
  styled,
  SvgIcon,
  createSvgIcon,
  Divider,
  useTheme,
} from "@mui/material"
import Link from "@components/Link"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/X"
import InstagramIcon from "@mui/icons-material/Instagram"
// import FacebookIcon from "@mui/icons-material/Facebook"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"

const LongFooterWrapper = styled(Card)(
  ({ theme }) => `
        border-radius: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        padding: ${theme.spacing(4)};
        align-items: center;
`
)

const DiscordIcon = () => {
  return (
    <SvgIcon sx={{ fontSize: 24 }} viewBox="0 0 48 48">
      <path d="M38.578 10.7229C35.8593 9.45085 32.9523 8.52639 29.9131 8C29.5398 8.67482 29.1038 9.58246 28.8031 10.3045C25.5724 9.81863 22.3713 9.81863 19.2 10.3045C18.8994 9.58246 18.4535 8.67482 18.0769 8C15.0344 8.52639 12.1241 9.45425 9.40534 10.7296C3.92162 19.0162 2.43508 27.097 3.17835 35.063C6.81544 37.7791 10.3402 39.4291 13.8055 40.5088C14.6611 39.3312 15.4242 38.0794 16.0816 36.7602C14.8296 36.2845 13.6304 35.6974 12.4974 35.0158C12.798 34.7931 13.092 34.5603 13.3761 34.3208C20.2868 37.5531 27.7956 37.5531 34.6238 34.3208C34.9112 34.5603 35.2052 34.7931 35.5025 35.0158C34.3661 35.7007 33.1637 36.2878 31.9117 36.7636C32.5691 38.0794 33.3288 39.3346 34.1877 40.5121C37.6564 39.4324 41.1844 37.7825 44.8215 35.063C45.6936 25.8284 43.3317 17.8218 38.578 10.7229ZM17.0231 30.164C14.9485 30.164 13.2472 28.2273 13.2472 25.8689C13.2472 23.5104 14.9122 21.5704 17.0231 21.5704C19.134 21.5704 20.8352 23.507 20.7989 25.8689C20.8022 28.2273 19.134 30.164 17.0231 30.164ZM30.9768 30.164C28.9023 30.164 27.201 28.2273 27.201 25.8689C27.201 23.5104 28.8659 21.5704 30.9768 21.5704C33.0877 21.5704 34.789 23.507 34.7526 25.8689C34.7526 28.2273 33.0877 30.164 30.9768 30.164Z" />
    </SvgIcon>
  )
}

const textColor = "#a3a3a3"

export const Footer = () => {
  const theme = useTheme()

  return (
    <LongFooterWrapper>
      <Grid maxWidth="lg" container spacing={3} textAlign={{ xs: "left" }}>
        <Grid item lineHeight={2.5} xs={6} sm={3} md={2} lg={2} mt={{ xs: 3, md: 0 }}>
          <Typography mb={2}>PRODUCTS</Typography>
          <Link href="/console/gpu-secure-cloud" sx={{ color: textColor }}>
            Secure Cloud
          </Link>
          <br />
          <Link href="/console/gpu-cloud" sx={{ color: textColor }}>
            Community Cloud
          </Link>
          <br />
          <Link href="/console/serverless" sx={{ color: textColor }}>
            Serverless
          </Link>
          <br />
          <Link href="/endpoints" sx={{ color: textColor }}>
            AI Endpoints
          </Link>
        </Grid>
        <Grid item lineHeight={2.5} xs={6} sm={3} md={2} lg={2} mt={{ xs: 3, md: 0 }}>
          <Typography mb={2}>RESOURCES</Typography>
          <Link href="https://docs.runpod.io/overview" sx={{ color: textColor }}>
            Docs
          </Link>
          <br />
          <Link href="https://docs.runpod.io/faq" sx={{ color: textColor }}>
            FAQ
          </Link>
          <br />
          <Link href="https://blog.runpod.io" sx={{ color: textColor }}>
            Blog
          </Link>
          <br />
          <Link href="/console/host/docs/faq" sx={{ color: textColor }}>
            Become a Host
          </Link>
        </Grid>
        <Grid item lineHeight={2.5} xs={6} sm={3} md={2} lg={2} mt={{ xs: 3, md: 0 }}>
          <Typography mb={2}>COMPANY</Typography>
          <Link href="/careers" sx={{ color: textColor }}>
            Careers
          </Link>
          <br />
          <Link href="/about" sx={{ color: textColor }}>
            About
          </Link>
          <br />
          <Link href="/compliance" sx={{ color: textColor }}>
            Compliance
          </Link>
          <br />
          <Link href="/legal/cookie-policy" sx={{ color: textColor }}>
            Cookie Policy
          </Link>
          <br />
          <Link href="/legal/disclaimer" sx={{ color: textColor }}>
            Disclaimer
          </Link>
          <br />
          <Link href="/legal/privacy-policy" sx={{ color: textColor }}>
            Privacy Policy
          </Link>
          <br />
          <Link href="/legal/terms-of-service" sx={{ color: textColor }}>
            Terms of Service
          </Link>
        </Grid>
        <Grid item lineHeight={2.5} xs={6} sm={3} md={2} lg={2} mt={{ xs: 3, md: 0 }}>
          <Typography mb={2}>CONTACT</Typography>
          <Link href="/contact" sx={{ color: textColor }}>
            Contact Us
          </Link>
          <br />
          <Link href="https://discord.gg/cUpRmau42V" sx={{ color: textColor }}>
            Discord
          </Link>
          <br />
          <Link href="" sx={{ color: textColor }}>
            help@runpod.io
          </Link>
          <br />
          <Link href="" sx={{ color: textColor }}>
            referrals@runpod.io
          </Link>
        </Grid>

        <Grid
          display="flex"
          justifyContent={{ xs: "center", md: "end" }}
          item
          lineHeight={2.5}
          xs={6}
          md={2}
          lg={2}
        >
          {/* <Link
          href="https://serp.co/reviews/best/software/cloud-gpu-providers/"
          title="Best Cloud GPU Providers"
          target="blank"
        >
          <Image
            unoptimized
            src={BestCloudGpuAward}
            alt="SERP Award Best Cloud GPUs"
            width={100}
            height={97}
          />
        </Link> */}
        </Grid>
        <Grid
          display="flex"
          justifyContent={{ xs: "left", md: "end" }}
          item
          lineHeight={2.5}
          xs={12}
          md={2}
          lg={2}
        >
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Link href="https://github.com/runpod" sx={{ color: textColor }} target="_blank">
                <GitHubIcon />
              </Link>
              <Link href="https://discord.gg/cUpRmau42V" sx={{ color: textColor }} target="_blank">
                <DiscordIcon />
              </Link>
              <Link href="https://twitter.com/runpod_io" sx={{ color: textColor }} target="_blank">
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/runpod.io"
                sx={{ color: textColor }}
                target="_blank"
              >
                <InstagramIcon />
              </Link>

              {/* <Link href="https://www.facebook.com/RunPod.io/" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="https://www.linkedin.com/company/runpod-io/" target="_blank">
              <LinkedInIcon />
            </Link> */}
            </Stack>
            <Typography variant="subtitle1">{`\u00A9 RunPod ${new Date().getFullYear()}`}</Typography>
            <Typography sx={{ fontSize: 8 }}>
              <Link href="https://storyset.com/people" sx={{ color: textColor }} target="blank">
                People illustrations by Storyset
              </Link>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </LongFooterWrapper>
  )
}

export default Footer
