import * as React from "react"
import Layout from "../components/Layout"
import Footer from "../components/footer"

const ContactUs = () => {
    return (
        <>
        <Layout pageTitle="Contact Us">
          <div>
            <h3>Contact Us</h3>
            <p>Sign up for emails</p>  
            <form method="post" 
                    name="Data Collection Form" 
                    data-netlify="true"
                    action="/confirm">
                <input type="hidden" name="form-name" value="Data Collection Form"/>
                <label>
                  Name
                  <input type="text" name="name" id="name" />
                </label><br/>
                <label>
                  Email
                  <input type="email" name="email" id="email" />
                </label><br/>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
              </form>
          </div>
        </Layout>
        <Footer/>
        </>
    )

}

export default ContactUs

export const Head = () => <title>Contact Us</title>
