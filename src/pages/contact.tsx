import type { NextPage } from "next"
import Head from "next/head"

import Contact from "@components/Contact"

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Contact Runpod: The Best Affordable GPU Cloud Provider</title>
      <meta
        name="description"
        content="If you need to speak with us about our GPU offerings, please join our discord or send us an email at help@runpod.io. Our team will get in touch with you as soon as we can."
      />
    </Head>

    <Contact />
  </>
)

export default ContactPage
