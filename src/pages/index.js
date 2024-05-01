import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <main>
    <Layout pageTitle="Josh's Final Project">
      <p>Hello World!</p>
    </Layout>
    <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
