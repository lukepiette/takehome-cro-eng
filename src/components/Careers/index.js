import { Box, Stack, Typography, useTheme, Button } from '@mui/material'

export default function Careers() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={'center'} mb={20} mt={8} position='relative'>
        <Box
          sx={{
            backgroundImage: 'url(/static/images/bg.webp)',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(60px)',
            height: 1000,
            overflowX: 'hidden !important',
            position: 'absolute',
            top: -400,
            transform: 'rotate(130deg)',
            width: 900,
            zIndex: -1,
          }}
        />

        <Typography align={'center'} mb={4} variant='h1'>
          Careers at RunPod
        </Typography>
        <Stack alignItems='left' spacing={2} sx={{ maxWidth: 700, px: 2 }}>
          <Typography align='left' fontSize={18}>
            <b>All of our roles are either hybrid or remote.</b> Most of our
            team is based in SF and New Jersey. We are currently looking to grow
            our SF team, and have a preference for candidates who are
            enthusiastic about working in-person.
          </Typography>
          <Typography align='left' fontSize={18}>
            <b>Everyone on our team wears multiple hats.</b> Our sales team has
            a strong technical background. Our eng team has an exceptional eye
            for product. Our datacenter operations team has a strong sales
            background. Whether you&apos;re doing engineering, sales,
            operations, design, or product, you should be comfortable wearing
            more than one hat at a time.
          </Typography>
          <Typography align='left' fontSize={18}>
            <b>Everyone on our team is customer obsessed.</b> We have over
            100,000 developers that rely on us to run their workloads. Many of
            them use RunPod for their production environments. That&apos;s a
            huge responsibility that we don&apos;t take lightly. We are
            constantly talking to our customers to understand what we can do to
            level up our platform. Regardless of your function, you will
            interact with our customers at one point or another. Our customers
            are developers, so having a good grasp of the GPU cloud workflows
            that exist and being able to empathizing with customer pain points
            is something we look for (even if you&apos;re not technical).
          </Typography>
          <Typography align='left' fontSize={18}>
            <b>Everyone on our team contributes cross-functionally.</b> If you
            think there&apos;s a better way of doing X, even if it doesn&apos;t
            directly fall under your function, you should voice that to the
            team. The most important products we&apos;ve built have stemmed from
            conversations between non-overlapping teams, like ML + Sales,
            Customer Support + Product, and Datacenter Operations + Accounting.
          </Typography>
          <Typography align='left' fontSize={18}>
            <b>Everyone on our team is agile.</b> At this stage, we need to move
            quickly. The faster we can ship products that delight our customers,
            the more successful they will be with our platform. The AI industry
            is constantly evolving, and we must be able to evolve just as
            quickly. There are some things we believe won&apos;t change.
            Developers will always want faster, more accessible and
            cost-effective compute. Although our products may change, our
            mission will stay the same.
          </Typography>
          <Typography align='left' fontSize={18}>
            <b>We are looking for people who want to grow as RunPod grows.</b>{' '}
            We currently have 33 full-time people on the team, and we anticipate
            scaling to several hundred over the coming years. We are looking for
            people with a bias towards leadership, who can hire and manage
            talented folks as their function within RunPod scales.
          </Typography>
          <Typography align='center' fontSize={18} pt={5}>
            <b>Click here to view our open positions</b>
          </Typography>
          <Stack
            sx={{
              margin: 'auto',
              display: 'inline-block',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              textAlign: 'center',
            }}
          >
            <Button
              sx={{ fontWeight: 'bold' }}
              href='https://job-boards.greenhouse.io/runpod'
              variant='contained'
            >
              Open Positions
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
