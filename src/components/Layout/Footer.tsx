import { Card, Stack, styled, SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from '@components/Link'
import Logo from './Logo'
import TwitterIcon from '@mui/icons-material/X'
// import FacebookIcon from "@mui/icons-material/Facebook"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"

//     background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 14.23%, #000000 42.26%, #000824 76%, #7F52FF 110%);

const LongFooterWrapper = styled(Card)(
  () => `
    align-items: center;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
`
)

const DiscordIcon = () => (
  <SvgIcon sx={{ fontSize: 24 }} viewBox='0 0 48 48'>
    <path d='M38.578 10.7229C35.8593 9.45085 32.9523 8.52639 29.9131 8C29.5398 8.67482 29.1038 9.58246 28.8031 10.3045C25.5724 9.81863 22.3713 9.81863 19.2 10.3045C18.8994 9.58246 18.4535 8.67482 18.0769 8C15.0344 8.52639 12.1241 9.45425 9.40534 10.7296C3.92162 19.0162 2.43508 27.097 3.17835 35.063C6.81544 37.7791 10.3402 39.4291 13.8055 40.5088C14.6611 39.3312 15.4242 38.0794 16.0816 36.7602C14.8296 36.2845 13.6304 35.6974 12.4974 35.0158C12.798 34.7931 13.092 34.5603 13.3761 34.3208C20.2868 37.5531 27.7956 37.5531 34.6238 34.3208C34.9112 34.5603 35.2052 34.7931 35.5025 35.0158C34.3661 35.7007 33.1637 36.2878 31.9117 36.7636C32.5691 38.0794 33.3288 39.3346 34.1877 40.5121C37.6564 39.4324 41.1844 37.7825 44.8215 35.063C45.6936 25.8284 43.3317 17.8218 38.578 10.7229ZM17.0231 30.164C14.9485 30.164 13.2472 28.2273 13.2472 25.8689C13.2472 23.5104 14.9122 21.5704 17.0231 21.5704C19.134 21.5704 20.8352 23.507 20.7989 25.8689C20.8022 28.2273 19.134 30.164 17.0231 30.164ZM30.9768 30.164C28.9023 30.164 27.201 28.2273 27.201 25.8689C27.201 23.5104 28.8659 21.5704 30.9768 21.5704C33.0877 21.5704 34.789 23.507 34.7526 25.8689C34.7526 28.2273 33.0877 30.164 30.9768 30.164Z' />
  </SvgIcon>
)

export const Footer = () => (
  <LongFooterWrapper>
    <Stack
      alignItems='start'
      columnGap={{ xs: '10%', sm: 4, md: 10, lg: 14 }}
      direction='row'
      flexWrap='wrap'
      justifyContent='center'
      lineHeight='180%'
      mt={{ xs: 8, sm: 9, md: 10 }}
      rowGap={5}
    >
      <Stack width={130}>
        <Title name='Products' />
        <FooterLink href='/console/gpu-secure-cloud'>Secure Cloud</FooterLink>
        <FooterLink href='/console/gpu-cloud'>Community Cloud</FooterLink>
        <FooterLink href='/console/serverless'>Serverless</FooterLink>
      </Stack>

      <Stack width={130}>
        <Title name='Resources' />
        <FooterLink href='https://docs.runpod.io/overview'>Docs</FooterLink>
        <FooterLink href='https://docs.runpod.io/faq'>FAQ</FooterLink>
        <FooterLink href='https://blog.runpod.io'>Blog</FooterLink>
        <FooterLink href='/console/host/docs/faq'>Become a Host</FooterLink>
        <FooterLink href='/dir/gpu-benchmarks'>GPU Benchmarks</FooterLink>
        <FooterLink href='/dir/gpu-models'>GPU Models</FooterLink>
      </Stack>

      <Stack width={130}>
        <Title name='Company' />
        <FooterLink href='/about'>About</FooterLink>
        <FooterLink
          href='https://job-boards.greenhouse.io/runpod'
          target='_blank'
        >
          Careers
        </FooterLink>
        <FooterLink href='/compliance'>Compliance</FooterLink>
        <FooterLink href='/legal/cookie-policy'>Cookie Policy</FooterLink>
        <FooterLink href='/legal/disclaimer'>Disclaimer</FooterLink>
        <FooterLink href='/legal/privacy-policy'>Privacy Policy</FooterLink>
        <FooterLink href='/legal/terms-of-service'>Terms of Service</FooterLink>
      </Stack>

      <Stack width={130}>
        <Title name='Contact' />
        <FooterLink href='https://contact.runpod.io'>Contact Us</FooterLink>
        <FooterLink href='https://discord.gg/cUpRmau42V'>Discord</FooterLink>
        <FooterLink href='mailto:help@runpod.io'>help@runpod.io</FooterLink>
        <FooterLink href='mailto:referrals@runpod.io'>
          referrals@runpod.io
        </FooterLink>
        <FooterLink href='mailto:press@runpod.io'>press@runpod.io</FooterLink>
      </Stack>
    </Stack>

    <Stack
      alignItems='center'
      borderTop='1px solid rgba(249, 250, 251, 0.24)'
      justifyContent='center'
      maxWidth={400}
      mb={6}
      mt={{ xs: 10, sm: 14 }}
      pt={4}
      width='70%'
    >
      <Stack direction='row' mb={10} spacing={2}>
        <FooterLink href='https://github.com/runpod' target='_blank'>
          <GitHubIcon />
        </FooterLink>
        <FooterLink href='https://discord.gg/cUpRmau42V' target='_blank'>
          <DiscordIcon />
        </FooterLink>
        <FooterLink href='https://twitter.com/runpod_io' target='_blank'>
          <TwitterIcon />
        </FooterLink>
        <FooterLink href='https://www.instagram.com/runpod.io' target='_blank'>
          <InstagramIcon />
        </FooterLink>
      </Stack>

      <Logo footer />

      <Typography mt={0.5} variant='subtitle1'>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Typography>
    </Stack>
  </LongFooterWrapper>
)

const FooterLink = ({
  children,
  href,
  ...props
}: {
  children: any
  href: string
  target?: string
}) => (
  <Link
    href={href}
    sx={{
      color: 'rgba(249, 250, 251, 0.64)',
      display: 'block',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.02em',
    }}
    {...props}
  >
    {children}
  </Link>
)

const Title = ({ name }: { name: string }) => (
  <Typography
    color='#fff'
    fontSize={16}
    fontWeight={600}
    mb={2}
    letterSpacing='-0.02em'
  >
    {name}
  </Typography>
)

export default Footer
