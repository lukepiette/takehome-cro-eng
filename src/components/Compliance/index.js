import {
  Box,
  Stack,
  Link,
  Typography,
  useTheme,
  Divider,
  Container,
} from "@mui/material"
import { styled } from "@mui/system"
import StartButton from "@components/StartButton"

const TableOfContents = () => {
  return (
    <Stack pt={10}>
      <Typography variant="h1">Table of Contents</Typography>
      <ol>
        <li style={{ fontSize: 18 }}>
          <Link href="#introduction">Introduction</Link>
        </li>
        <li style={{ fontSize: 18 }}>
          <Link href="#executive-summary">Executive Summary</Link>
        </li>
        <li style={{ fontSize: 18 }}>
          <Link href="#cloud-orchestrator-platform">
            RunPod’s Cloud Orchestrator Platform
          </Link>
        </li>
        <li style={{ fontSize: 18 }}>
          <Link href="#compliance-overview">Compliance Overview</Link>
        </li>
        <li style={{ fontSize: 18 }}>
          <Link href="#data-center-partners">Data Center Partners</Link>
        </li>
        <li style={{ fontSize: 18 }}>
          <Link href="#faqs">FAQs</Link>
        </li>
      </ol>
    </Stack>
  )
}

const StickyFooterWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${theme.palette.background.default}; // or any color you prefer
    color: white;
    text-align: center;
    padding-bottom:30px;
  `
)

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

        <Stack
          alignItems="left"
          sx={{ maxWidth: 1100 }}
          padding={{ xs: 5, md: 0 }}
        >
          <StickyFooterWrapper>
            <Divider style={{ marginBottom: 25 }} />
            <Container maxWidth="lg">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography sx={{ paddingRight: 2 }} variant="h3">
                  Book a call with our team to learn more about compliance at
                  RunPod
                </Typography>
                <StartButton
                  title={"Book a call"}
                  to={
                    "https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
                  }
                />
              </Stack>
            </Container>
          </StickyFooterWrapper>

          <Typography variant="h1" mb={4}>
            Compliance at RunPod
          </Typography>
          <Typography align="left" fontSize={18}>
            Welcome to RunPod&apos;s Compliance and Security Documentation. As a
            leading GPU cloud services provider dedicated to supporting
            businesses in constructing AI-enabled applications, our commitment
            to transparency, security, and adherence to industry standards
            remains unparalleled.
          </Typography>

          <TableOfContents />

          <Typography
            align="left"
            mb={4}
            pt={10}
            variant="h1"
            id="introduction"
          >
            1. Introduction
          </Typography>
          <Typography align="left" fontSize={18}>
            The purpose of this document is twofold:
          </Typography>
          <Stack>
            <ol>
              <li style={{ fontSize: 18 }}>
                To offer an overview of our security protocols, measures, and
                strategies, ensuring our clientele and stakeholders understand
                the lengths we go to in safeguarding their data and workloads.
              </li>
              <li style={{ fontSize: 18, paddingTop: 20 }}>
                To present an overview of the compliance certifications and
                standards upheld by our network of data centers. Given the
                varied compliance levels across our partner data centers, this
                document aims to shed light on what our clients can expect,
                irrespective of where their data resides.
              </li>
            </ol>
          </Stack>
          <Typography align="left" fontWeight={"bold"} fontSize={18}>
            Scope and Applicability
          </Typography>
          <Typography align="left" fontSize={18}>
            This document serves as a general guide for all current and
            prospective clients of RunPod, particularly for those who emphasize
            compliance and security in their choice of a GPU cloud services
            provider. RunPod, as a cloud orchestrator, partners with a diverse
            range of data centers, each with its unique compliance and security
            standards. Therefore, the information provided here primarily offers
            an overview of the security and compliance certifications prevalent
            across our partnered data centers. However, it&apos;s important to
            note that these standards can vary significantly from one data
            center to another, depending on their location. We encourage
            stakeholders seeking detailed, region-specific information about
            compliance and security standards to schedule a call with our team{" "}
            <Link
              target="_blank"
              href="https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
            >
              here
            </Link>
            . Such a discussion will provide a more precise and tailored
            understanding of the measures in place at the specific data center
            of interest, ensuring alignment with your specific requirements and
            expectations.
          </Typography>

          <Typography
            align="left"
            mb={4}
            pt={10}
            variant="h1"
            id="executive-summary"
          >
            2. Executive Summary
          </Typography>
          <Typography align="left" fontWeight={"bold"} fontSize={18}>
            Brief on Security and Compliance Commitment
          </Typography>
          <Typography align="left" fontSize={18}>
            In the fast-evolving realm of AI application development, security
            and compliance aren&apos;t mere checkboxes; they&apos;re
            foundational pillars. At RunPod, our commitment to these pillars
            isn&apos;t a byproduct of regulatory necessity—it&apos;s an integral
            aspect of our ethos. We understand the magnitude of trust our
            clients place in us, and it is our pledge to consistently uphold, if
            not surpass, that trust.
          </Typography>
          <Typography align="left" fontSize={18}>
            AI-enabled applications are at the forefront of technological
            advancement, and the data they process is often sensitive and
            proprietary. Recognizing the importance of this data, RunPod ensures
            that, from data ingress to processing and storage, every interaction
            point is bolstered by robust security measures.
          </Typography>
          <Typography align="left" fontSize={18}>
            Moreover, our collaborations with data centers around the world
            mandate a stringent review of their compliance certifications. Our
            aim is to offer a platform where businesses, irrespective of their
            size or domain, can confidently build, knowing they&apos;re backed
            by a security-first GPU cloud services provider.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            High-Level Security Measures Overview
          </Typography>
          <Typography align="left" fontSize={18}>
            RunPod&apos;s security framework is built upon three core tenets:
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <b>Proactive Defense:</b> Our systems are designed not just to
                  respond, but to preempt. Regular vulnerability assessments,
                  penetration testing, and continuous monitoring ensure we stay
                  ahead of potential threats.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>End-to-end Encryption:</b> Data in transit and at rest is
                  encrypted using industry-leading protocols. This ensures that
                  your AI workloads and associated data remain confidential and
                  tamper-proof.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Operational Integrity:</b> Our staff undergo rigorous
                  security training, and access to client data is governed by
                  strict role-based controls. Furthermore, disaster recovery
                  plans and incident response protocols are perpetually at the
                  ready, ensuring business continuity and data integrity.
                </li>
              </ul>
            </Stack>
            In the subsequent sections, we delve deeper into the intricate
            layers of our security fabric and shed light on the compliance
            certifications of our partner data centers. We invite you to journey
            with us through this document, gaining insights into why RunPod
            remains the trusted choice for AI application developers worldwide.
          </Typography>

          <Typography
            align="left"
            mb={4}
            pt={10}
            variant="h1"
            id="cloud-orchestrator-platform"
          >
            3. RunPod’s Cloud Orchestrator Platform
          </Typography>
          <Typography align="left" fontWeight={"bold"} fontSize={18}>
            Overview and Architecture
          </Typography>
          <Typography align="left" fontSize={18}>
            At its core, the RunPod platform orchestrates a symphony of secure,
            powerful, and reliable GPU resources to empower AI application
            developers. We have meticulously built architecture that bridges the
            gap between our clients&apos; demands and the world-class resources
            offered by our data center partners.
          </Typography>
          <Typography align="left" fontSize={18}>
            Our platform acts as an intermediary, taking on the role of
            intelligently allocating resources, monitoring data and hardware
            integrity, and ensuring the smooth execution of AI workloads. This
            architecture not only allows us to scale effortlessly but also
            provides a flexible framework, accommodating the diverse
            requirements of our clientele.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Core Features and their Security Implications
          </Typography>
          <Typography align="left" fontSize={18}>
            RunPod&apos;s security framework is built upon three core tenets:
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <b>Intelligent Resource Allocation:</b> At the heart of RunPod
                  is an advanced allocation algorithm that ensures optimal
                  resource distribution. By continually analyzing workloads, we
                  prevent system overloads and potential breaches from
                  exploitation of resource gaps.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Real-time Monitoring:</b> We vigilantly monitor hardware
                  performance and data integrity. This continuous oversight
                  allows us to instantly detect anomalies, ensuring both the
                  security and reliability of the services we offer.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>End-to-end Encryption:</b> Data handling, in terms of
                  physical storage, is under the purview of our data center
                  partners. That said, we have implemented robust encryption
                  protocols to ensure that all data, whether in transit between
                  our platform and the data centers, or during processing, is
                  kept confidential and secure.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Automated Workload Management:</b> Our platform can
                  automatically scale and manage workloads, reducing human
                  intervention and, by extension, the potential for
                  human-induced vulnerabilities.
                </li>
              </ul>
            </Stack>
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Interactions with Data Centers
          </Typography>
          <Typography align="left" fontSize={18}>
            Partnering with some of the most secure and reputable data centers
            globally is a point of pride and a testament to our commitment to
            excellence. However, it&apos;s crucial for our clients to understand
            the nature of this partnership.
          </Typography>
          <Typography align="left" fontSize={18}>
            While we oversee and guarantee the integrity and security of data
            when it&apos;s within our platform&apos;s domain, the physical
            hardware, and by extension, its security and compliance, is managed
            by our data center partners. This means that:
            <Stack>
              <ol>
                <li style={{ fontSize: 18 }}>
                  <b>Physical Security:</b> Measures like surveillance, access
                  controls, and onsite security personnel are managed directly
                  by our data center partners. They have the expertise and
                  infrastructure to ensure the physical sanctity of the
                  hardware.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Compliance Adherence:</b> Different data centers might have
                  varying compliance certifications. While we ensure that all
                  our partners uphold stringent standards, the specifics of each
                  compliance are directly managed by the respective data center.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Data Handling:</b> While we encrypt and secure data during
                  transit and processing, the physical storage and its
                  associated security protocols are under the purview of the
                  data centers.
                </li>
              </ol>
            </Stack>
            It&apos;s a relationship built on trust, specialization, and a
            shared vision of offering unparalleled services. By focusing on what
            we excel at – orchestrating and monitoring – and letting our data
            center partners concentrate on their strengths, we offer our clients
            a platform that&apos;s both powerful and secure.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            The Four Pillars of the RunPod Platform
          </Typography>
          <Typography align="left" fontSize={18}>
            At RunPod, we pride ourselves on offering a platform that&apos;s
            both versatile and tailored to the multifaceted needs of AI
            application developers. Rooted in this philosophy, our platform
            stands on four pillars, each catering to specific requirements and
            designed to offer unparalleled performance, security, and
            ease-of-use.
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ol>
                <li style={{ fontSize: 18 }}>
                  <b>Secure Cloud</b>
                  <br></br>
                  On-demand GPU instances at your fingertips. Whether
                  you&apos;re scaling an application or working on cutting-edge
                  AI research, our Secure Cloud offers the computational power
                  you need, whenever you need it.
                  <ul>
                    <li>
                      Location Filtering: Choose data center locations that
                      align with your specific requirements, ensuring both
                      performance optimization and compliance adherence.
                    </li>
                    <li>
                      Enterprise Discounts: Reserve Secure Cloud GPUs and avail
                      enterprise-grade discounts, optimizing both performance
                      and cost.
                    </li>
                    <li>
                      Tailored Solutions: We understand that one size
                      doesn&apos;t fit all. Contact us for a deeper dive into
                      how the Secure Cloud can be tailored to your unique needs.
                    </li>
                  </ul>
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Serverless</b>
                  <br></br>
                  Serverless computing reimagined for AI. With autoscaling API
                  endpoints, large-scale inference workloads are not only
                  feasible but incredibly efficient.
                  <ul>
                    <li>
                      Autoscaling: Forget about resource management. Our
                      endpoints scale seamlessly based on your workload demands.
                    </li>
                    <li>
                      Multi-data Center Resources: By default, our serverless
                      endpoints utilize resources from various data centers,
                      ensuring optimal performance.
                    </li>
                    <li>
                      Compliance-Driven Scaling: Have stringent compliance
                      requirements like SOC2? We&apos;ve got you covered. Your
                      endpoints can be isolated to run exclusively on data
                      centers that tick every box on your compliance checklist.
                    </li>
                  </ul>
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Bare Metal</b>
                  <br></br>
                  For those who need more than just containerization. With our
                  Bare Metal offering, you can run large-scale training
                  workloads, k8s, or VMs, providing that extra layer of
                  customization and control.
                  <ul>
                    <li>
                      Off-Platform Servers: Direct access to the raw power of
                      off-platform servers for tasks that need it.
                    </li>
                    <li>
                      Diverse Workloads: Whether it&apos;s large-scale training,
                      k8s, or VMs, our Bare Metal supports it.
                    </li>
                    <li>
                      Container Exclusivity: Please note that our Secure Cloud
                      and Serverless offerings support only Docker containers.
                      For other requirements, Bare Metal is your go-to.
                    </li>
                  </ul>
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Private Cloud</b>
                  <br></br>
                  Truly make the platform yours. With our Private Cloud
                  offering, you can bring your own hardware or rent a
                  large-scale cluster, leveraging RunPod as the orchestration
                  maestro.
                  <ul>
                    <li>
                      Hardware Flexibility: Use your own trusted hardware or
                      rent from our partners.
                    </li>
                    <li>
                      RunPod Orchestration: License RunPod as the orchestrating
                      layer, ensuring you get our expertise, security, and
                      performance optimization, all on your own infrastructure.
                    </li>
                  </ul>
                </li>
              </ol>
            </Stack>
            By rooting our platform in these four pillars, RunPod offers a
            diverse range of solutions, ensuring that, irrespective of your
            needs, we have the perfect fit waiting for you. Whether you&apos;re
            a startup on the cusp of revolutionizing the AI space or an
            established enterprise looking to optimize, RunPod stands ready to
            amplify your potential.
          </Typography>

          <Typography
            align="left"
            mb={4}
            pt={10}
            variant="h1"
            id="compliance-overview"
          >
            4. Compliance Overview
          </Typography>
          <Typography align="left" fontWeight={"bold"} fontSize={18}>
            Compliance Overview
          </Typography>
          <Typography align="left" fontSize={18}>
            At RunPod, we recognize the importance of compliance and have
            partnered with data centers that abide by some of the world&apos;s
            most stringent standards.Our approach to compliance is holistic,
            ensuring we align with data centers that prioritize stringent
            compliance protocols. We believe that by collaborating with
            certified data centers, we bring our clients the utmost in data
            security and compliance.
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <b>Partnered Compliance Management:</b> While RunPod itself
                  does not directly hold certain global certifications, we
                  meticulously select data centers that do, ensuring your data
                  benefits from industry-recognized best practices.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Transparent Reporting:</b> Transparency is key. We make it
                  clear which certifications our partner data centers hold,
                  allowing you to make informed decisions about where your data
                  resides.
                </li>
              </ul>
            </Stack>
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            List of Certifications
          </Typography>
          <Typography align="left" fontSize={18}>
            It&apos;s vital to understand that while RunPod does not directly
            hold certifications like SOC 2, ISO 27001, or GDPR, many of our
            partner data centers do. Here&apos;s a quick snapshot of many of the
            certifications our data centers hold:
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <b>ISO 27001</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>ISO 20000-1</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>ISO 22301</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>ISO 14001</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>HIPAA</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>NIST</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>PCI</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>SOC 1 Type 2</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>SOC 2 Type 2</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>SOC 3</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>HITRUST</b>
                </li>
                <li style={{ fontSize: 18 }}>
                  <b>GDPR compliant</b>
                </li>
              </ul>
            </Stack>
            It&apos;s essential for clients to review the specific
            certifications of their chosen data center on our platform. This
            ensures alignment with your compliance needs. Should you require
            further clarity or detail on any certification or wish to understand
            the compliance profile of a specific data center, our dedicated
            compliance team is always here to assist. Please schedule a time to
            chat with a member of our team{" "}
            <Link
              target="_blank"
              href="https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
            >
              here
            </Link>
            .
          </Typography>

          <Typography
            align="left"
            mb={4}
            pt={10}
            variant="h1"
            id="data-center-partners"
          >
            5. Data Center Partners
          </Typography>
          <Typography align="left" fontSize={18}>
            The backbone of any cloud service provider is its infrastructure. At
            RunPod, we understand that our promise of superior cloud
            orchestration is only as good as the data centers we partner with.
            This section delves into our association with global data centers,
            shedding light on our selection criteria and their geographic
            spread.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Introduction to Data Centers
          </Typography>
          <Typography align="left" fontSize={18}>
            Data centers are the bedrock upon which digital services operate.
            These facilities house an organization&apos;s IT operations and
            equipment, safeguarding them from external threats and maintaining
            optimal operating conditions. Their role is pivotal in ensuring data
            integrity, availability, and security.
          </Typography>
          <Typography align="left" fontSize={18}>
            We have taken stringent steps to partner with data centers that
            exemplify the zenith of reliability and security. Our emphasis is on
            ensuring that while the orchestration happens on our platform, the
            actual data processing and storage are backed by the best
            infrastructure available globally.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Data Center Selection Criteria
          </Typography>
          <Typography align="left" fontSize={18}>
            When evaluating potential data center partnerships, RunPod adheres
            to a stringent selection process. Our criteria revolve around:
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <b>Security:</b> From physical barriers to advanced
                  cybersecurity measures, we ensure that the data center can
                  protect against both physical and digital threats.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Reliability:</b> We assess the data center&apos;s track
                  record, ensuring it has redundancies in place to offer
                  consistent uptime and can handle both expected and unexpected
                  loads.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Compliance:</b> Recognizing the importance of regulatory
                  adherence, we prioritize data centers that are certified by
                  globally-recognized standards.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Environmental Concerns:</b> Sustainability is key. Our
                  partner data centers should exhibit energy-efficient
                  operations, reducing the carbon footprint while maintaining
                  peak performance.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <b>Innovation and Technology:</b> We look for data centers
                  that invest in cutting-edge technology and constantly evolve
                  to keep up with the changing IT landscape.
                </li>
              </ul>
            </Stack>
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Data Center Geographic Distribution
          </Typography>
          <Typography align="left" fontSize={18}>
            Clients can access a list of our data center locations through the
            Secure Cloud page in the RunPod console. Whatever your requirements,
            we have a data center location that meets them.
          </Typography>
          <Typography align="left" fontSize={18}>
            Please note that while the Secure Cloud page provides an overview of
            compliance certifications held by our partnered data centers,
            it&apos;s essential to request data center specific documentation
            from our team for more comprehensive information.
          </Typography>

          <Typography align="left" mb={4} pt={10} variant="h1" id="faqs">
            6. FAQs
          </Typography>
          <Typography align="left" fontSize={18}>
            At RunPod, we prioritize transparency and believe that informed
            clients are empowered clients. In this section, we address some of
            the most frequently asked questions regarding data residency, backup
            procedures, and our contractual obligations.
          </Typography>
          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Questions on Data Residency and Sovereignty
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <i>Where is my data physically stored?</i>
                  <br></br>
                  While RunPod orchestrates the GPU resources, the physical
                  storage of data is managed by our partner data centers located
                  globally. You have the option to filter and select specific
                  data center locations based on your requirements, ensuring
                  that data residency aligns with your operational and
                  compliance needs.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>How do you ensure data sovereignty compliance?</i>
                  <br></br>
                  We understand the importance of data sovereignty, especially
                  with evolving global regulations. Our platform allows you to
                  explicitly select data centers located in regions that comply
                  with specific data sovereignty laws, ensuring you always
                  remain compliant.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>
                    Do you offer compatibility with AWS PrivateLink connect?
                  </i>
                  <br></br>
                  Currently, our platform does not offer support for AWS
                  PrivateLink connect.
                </li>
              </ul>
            </Stack>
          </Typography>

          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Backup and Redundancy Queries
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <i>How often is my data backed up?</i>
                  <br></br>
                  Data backup frequency varies depending on the specific service
                  you&apos;re utilizing. However, standard practices include
                  daily backups with periodic snapshots taken throughout the
                  day. Specific backup schedules can be discussed and tailored
                  based on your requirements.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>
                    In case of a data center failure, how do you ensure my
                    data&apos;s availability?
                  </i>
                  <br></br>
                  Redundancy is a cornerstone of our platform. We maintain
                  multiple replicas of data across different data centers. In
                  the unlikely event of a data center failure, our platform
                  automatically redirects workloads and data access to an
                  active, healthy data center, ensuring minimal disruption.
                </li>
              </ul>
            </Stack>
          </Typography>

          <Typography align="left" pt={2} fontWeight={"bold"} fontSize={18}>
            Contractual and SLA-related Questions
          </Typography>
          <Typography align="left" fontSize={18}>
            <Stack>
              <ul>
                <li style={{ fontSize: 18 }}>
                  <i>
                    Can we negotiate terms in the Service Level Agreement (SLA)?
                  </i>
                  <br></br>
                  While we have a standard SLA that caters to the broad needs of
                  our clientele, we understand that specific requirements might
                  necessitate adjustments. We&apos;re open to discussions to
                  tailor the SLA to align more closely with your business needs.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>What&apos;s your uptime guarantee?</i>
                  <br></br>
                  RunPod commits to an industry-leading uptime, typically
                  guaranteeing 99.99% availability. Specific details, including
                  potential compensations in the unlikely event of a deviation,
                  are outlined in our Service Level Agreement (SLA).
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>In case of a dispute, how is it resolved?</i>
                  <br></br>
                  Our contracts detail a comprehensive dispute resolution
                  mechanism. Typically, it involves escalating the matter
                  through various levels of management and, if necessary,
                  resorting to mediation or arbitration. We believe in resolving
                  matters amicably and prioritize maintaining a strong
                  relationship with our clients.
                </li>
                <li style={{ fontSize: 18, paddingTop: 20 }}>
                  <i>
                    How does the reliability, redundancy, and security of Secure
                    Cloud data centers on RunPod compare to other data centers?
                  </i>
                  <br></br>
                  The Secure Cloud data centers integrated with the RunPod
                  platform adhere to stringent standards and are classified
                  either as Tier 3 or Tier 4. This classification places them
                  among the most reliable, redundant, and secure data centers
                  available in the industry.
                </li>
              </ul>
            </Stack>
          </Typography>

          <Typography align="left" fontSize={18}>
            This FAQ section provides a foundational understanding of key
            concerns. However, we always encourage open dialogue. If you have
            further questions or require more detailed explanations, please
            don&apos;t hesitate to schedule a time to chat with our team{" "}
            <Link
              target="_blank"
              href="https://meetings.hubspot.com/margarita-melkoumov/runpod-team-discovery-call-"
            >
              here
            </Link>
            .
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}
