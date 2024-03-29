import { Box, Stack, Typography, useTheme, Divider } from "@mui/material"

export default function Careers() {
  const theme = useTheme()

  return (
    <>
      <Stack alignItems={"center"} mb={20} mt={8} position="relative">
        <Box
          sx={{
            backgroundImage: "url(/static/images/bg.webp)",
            backgroundRepeat: "no-repeat",
            filter: "blur(60px)",
            height: 1000,
            overflowX: "hidden !important",
            position: "absolute",
            top: -400,
            transform: "rotate(130deg)",
            width: 900,
            zIndex: -1,
          }}
        />

        <Typography align={"center"} mb={4} variant="h1">
          Careers at RunPod
        </Typography>
        <Stack alignItems="left" spacing={2} sx={{ maxWidth: 700, px: 2 }}>
          <Typography align="left" fontSize={18}>
            <b>All our roles are remote/hybrid.</b> Most of our team is based in New Jersey and SF.
            We&apos;re currently trying to establish a presence in SF and prefer candidates based
            there who are enthusiastic about working in-person.
          </Typography>
          <Typography align="left" fontSize={18}>
            <b>Everyone on our team is technical.</b> Even if you&apos;re doing sales, operations,
            design, or product. Our customers are developers, so having a strong grasp of existing
            GPU cloud workflows and being able to understand the pain points of our customers is a
            strong plus.
          </Typography>
          <Typography align="left" fontSize={18}>
            <b>Everyone wears multiple hats.</b> Our sales team helps manage infrastructure, our
            growth team ships new features based on customer feedback, our engineering team helps
            onboard customers, our ML team runs benchmarks and creates custom deployments for
            enterprise customers, etc. At this stage, we need to move quickly. That means you may
            have to take on a couple of responsibilities that aren&apos;t in your job description.
          </Typography>
          <Typography align="left" fontSize={18}>
            <b>We want people interested in growing with us.</b> We currently have 30 full-timers on
            the team, and we anticipate scaling to ~50 in the next 6-9mo. We&apos;re looking for
            people with a bias towards leadership, who can hire and manage talented builders as
            their function within RunPod scales to hundreds of employees.
          </Typography>
          <Typography align="left" fontSize={18}>
            Reach out to <b>careers@runpod.io</b> and include your LinkedIn and/or portfolio if you
            fit any of the positions below:
          </Typography>
          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            ML Engineer
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for ML Engineers with strong backgrounds in optimizing inference on large
            language models. This would be the perfect fit for you if:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>
                We are looking for ML Engineers with strong backgrounds in optimizing inference on
                large language models.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can develop and deploy holistic solutions, enabling users to train new models,
                fine-tune existing ones, or run efficient inferences.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You keep up with the latest in AI research, ensuring our tech stack remains up to
                par with best practices.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can engage proactively with RunPod customers, grasping their challenges and
                consistently delivering valuable solutions that meet their needs.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You are proficient in identifying and circumventing common technical pitfalls.
              </li>
            </ul>
          </Stack>
          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            Fullstack Engineer
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for an engineer who is able to deliver end-to-end functionality of a
            product from Backend (NodeJs) to Frontend (ReactJS / NextJS). This would be the perfect
            fit for you if:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>
                You have developed end-to-end features using NodeJS and ReactJS.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can understand complex web architectures and can articulate that understanding.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You have worked with open-source AI models and have a strong understanding of the
                current AI landscape.
              </li>
            </ul>
          </Stack>

          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            Support Engineer
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for a generalist engineer who can communicate with clients, knows how to
            debug common issues, and has general knowledge of the web. This would be the perfect fit
            for you if:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>You have excellent communication skills.</li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You are a problem solver by any means necessary and can engineer complex solutions.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can debug logs, datasets and other sources to find root cause of issues.
              </li>
            </ul>
          </Stack>

          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            Senior Systems Engineer
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for someone who can solve complex problems to help accelerate AI
            adoption. This would be the perfect fit for you if:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>
                You can develop and optimize complex systems using Golang or Rust.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You have a proven track record of accomplishments.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You are a lone wolf and can work with a team when needed.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You strive for perfection but understand MVP delivery.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can reduce container cold-starts for AI workloads.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can optimize network storage to increase throughput and store LLM models at
                scale.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can optimize container runtime for specific workloads to get the best
                performance.
              </li>
            </ul>
          </Stack>

          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            UX Engineer
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for someone who specializes in pixel-perfect user interfaces. This would
            be the perfect fit for you if:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>You are a designer first, engineer second.</li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>You can create pixel-perfect UI.</li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You can design and develop in ReactJS.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                You have a strong understanding of worklows used for deploying and scaling AI
                models.
              </li>
            </ul>
          </Stack>

          <Divider />
          <Typography align={"left"} mb={8} fontSize={24} fontWeight="bold">
            Customer Success
          </Typography>
          <Typography align="left" fontSize={18}>
            We are looking for someone who can manage customer relationships and help them get the
            most out of RunPod. This would be the perfect fit for you if:
          </Typography>
          <li style={{ fontSize: 18 }}>
            You can make sure our customers are happy and solve their problems.{" "}
          </li>
          <li style={{ fontSize: 18, paddingTop: 20 }}>
            You have a level of technical proficiency that allows you to diagnose customer issues
            and report them to our engineering team.
          </li>
          <li style={{ fontSize: 18, paddingTop: 20 }}>
            You are patient, can multi-process dozens of communication channels, and have a passion
            for creating an impeccable user experience.
          </li>
          <Divider />
          <Typography align={"center"} mb={4} variant="h1" pt={3} pb={1}>
            What to expect at RunPod
          </Typography>
          <Typography align={"left"} mb={8} variant="h3" pt={3} pb={1}>
            The RunPod Engineering Stack
          </Typography>
          <Typography align="left" fontSize={18}>
            We&apos;ve built RunPod atop dozens of frameworks (many of which we&apos;ve written
            ourselves), but here are the primary stacks you&apos;ll be using:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>AI/ML: Python and C++</li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                RunPod website and user console: NodeJS, NextJS, GraphQL
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>The Cloud: Golang</li>
            </ul>
          </Stack>

          <Typography align={"left"} mb={8} variant="h3" pt={3} pb={1}>
            The RunPod Team
          </Typography>
          <Typography align="left" fontSize={18}>
            Work is an incredible place when you&apos;re working with a team of people who are
            relentless about the mission and energized to help each other grow in every way. Through
            the highs and lows, we have shared many moments of laughter, tears, jokes, and joy.
          </Typography>
          <Typography align="left" fontSize={18}>
            Things that make our culture what it is:
          </Typography>
          <Stack>
            <ul>
              <li style={{ fontSize: 18 }}>
                We have experience building products and hacking on GPUs. Many of our founding team
                members ran datacenters and joined RunPod after integrating their hardware onto the
                platform.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                We love new product ideas. Regardless of your official role, if you have a great
                idea and want to see it implemented, you can always make a PR. 9/10 times, we will
                be all for it.{" "}
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                We are a team of intrinsically curious and ambitious people. We ask a lot of
                questions, move quickly, and pivot on the fly. We value a bias towards action very
                highly and take pride in our work.{" "}
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                Even though we&apos;re remote, we know there&apos;s no substitute for getting
                together in person. We&apos;ve done retreats in New Jersey and Austin where we raced
                go-karts, went to Dave and Buster&apos;s, ate deep-fried cheesecake at a carnival,
                and fired shotguns at a resort.
              </li>
            </ul>
          </Stack>

          <Typography align={"left"} variant="h3" pt={3} pb={1}>
            What&apos;s in it for you
          </Typography>
          <Stack pb={1}>
            <ul>
              <li style={{ fontSize: 18 }}>
                Compensation package with sign-on bonus, company equity, and benefits. We know how
                rare mission-driven talent is, and we strive to reflect this through ownership and
                pay.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                Environment for growth and learning. You will have the opportunity to drive great
                impact and gain exposure to all functions of the company. Here, you can flex
                multiple realms of your skillset, strategic mindset, and creativity.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                Accelerate innovation in GPU cloud infrastructure. We are leading the change in GPU
                cloud infrastructure against Big Cloud and outdated systems. You’ll be able to
                operate in a fast-paced environment and iterate quickly.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                An energizing, ambitious team. We don&apos;t believe in bureaucratic nonsense. Our
                team cares deeply about each other. We strive to elevate and uplift each other in
                our day-to-day work to do the best for one another.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                Supporting your wellbeing. We provide benefits to allow you to do your best work:
              </li>
              <ol>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  Remote and in-person hybrid work options. We&apos;re based in NJ and SF but prefer
                  you be in SF.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  Stipend to upgrade your work-from-home setup.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>Flexible paid time off (PTO).</li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  Paid company off-sites, meetups, and team bonding events. You&apos;ll get to see
                  everyone outside of their Zoom box.
                </li>
              </ol>
            </ul>
          </Stack>
          <Divider />
          <Typography align={"center"} pt={3} pb={1} variant="h1">
            About RunPod
          </Typography>
          <Typography align="left" color="white" fontSize={24}>
            We are building cloud services to accelerate AI adoption.
          </Typography>
          <Typography align="left" fontSize={18}>
            Whether you&apos;re an experienced ML developer training a large language model, or an
            enthusiast tinkering with stable diffusion, we strive to make GPU compute as seamless
            and affordable as possible.
          </Typography>
          <Typography align="left" fontSize={18}>
            Our founding team comes from Comcast, where we lead the cloud architecture division and
            cut costs by 100M per year.
          </Typography>
          <Typography align="left" fontSize={18}>
            With decades of cloud architecture and machine learning experience, we&apos;re deeply
            familiar with the pain points developers face when training, benchmarking, and scaling
            AI models in production.
          </Typography>
          <Typography align={"left"} pt={3} pb={1} variant="h2">
            Our story
          </Typography>
          <Typography align="left" fontSize={18}>
            We founded RunPod in March 2022 with 2 core insights:<br></br>
            <br></br>1) AI infrastructure requirements are compounding every year, and will continue
            to grow exponentially over the next decade.<br></br>2) There aren&apos;t any AI-native
            cloud service providers built specifically to accelerate training, benchmarking, and
            inference workflows.
          </Typography>
          <Typography align="left" fontSize={18}>
            Existing providers like Big Cloud (AWS, GCP, Azure) have made it incredibly costly for
            developers, startups, and enthusiasts to access GPU resources. We knew we wouldn&apos;t
            get far as a fancy wrapper on top of Big Cloud, so we built our own infrastructure from
            the ground up.
          </Typography>
          <Typography align="left" fontSize={18}>
            In the early days, we didn&apos;t have the capital required to purchase thousands of
            GPUs, so we turned to the AI community for support. Hundreds of GPU owners across the
            world deeply resonated with our mission and listed their GPUs on <b>Community Cloud</b>{" "}
            - RunPod&apos;s first on-demand cloud platform.
          </Typography>
          <Typography align="left" fontSize={18}>
            As we scaled our capacity to the thousands, we saw more and more users reach out about
            needing larger clusters, higher reliability, and extremely fast networking speeds to
            train foundational models and deploy them in production. So we introduced{" "}
            <b>Secure Cloud</b> to the platform - GPUs we source and manage in some of the most
            reliable data centers across the world. With Secure Cloud, developers can access
            clusters of up to 1000x GPUs with incredibly high data transfer speeds, RAID 2
            redundancy, localized network volumes, and best-in-class security, all at a 50%+ lower
            rate than Big Cloud.
          </Typography>
          <Typography align="left" fontSize={18}>
            Since then, we&apos;ve built <b>Serverless</b> - autoscaling architecture that abstracts
            away all of the devops expertise required to scale infrastructure up and down for
            inference. We also launched Flashboot, our cache architecture that allows for less than
            250ms P70 cold start times on hundreds of models.
          </Typography>
          <Typography align="left" fontSize={18}>
            We have lots of cool stuff on our product roadmap, and we&apos;re excited to bring on
            engineers who can help shape RunPod into the world&apos;s best platform for building and
            scaling AI.
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}
