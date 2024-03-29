import type { NextPage } from "next"
import Head from "next/head"

import Contact from "@components/Contact"
import Script from "next/script"

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
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=d0194ad2-b273-4138-bad5-595f394a4a22"
    />
  </>
)

export default ContactPage
