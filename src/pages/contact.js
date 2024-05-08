import * as React from "react";
import Layout from "../components/Layout";
import Footer from "../components/footer";

const ContactUs = () => {
  const styles = {
    btnStyle: {
      margin: "5px 5px",
      alignContent: "center",
      alignItems: "center",
      padding: "1rem",
      color: "#fff",
      border: "none",
      backgroundColor: "#000",
    },
    gap: {
      marginRight: "10px",
      marginLeft: "20px"
    },
    signUp: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "400px",
        padding: "0px !important"
    }


  };
  return (
    <>
      <Layout pageTitle="Contact Us">
        <div>
          <h3>Sign up for emails</h3>
          <p></p>
          <form 
            method="post"
            name="Data Collection Form"
            data-netlify="true"
            action="/confirm"
          >
            <input
              type="hidden"
              name="form-name"
              value="Data Collection Form"
            />
            <div >
              <label >Name</label>
            </div>
            <input type="text" name="name" id="name" />
            <br />
            <div>
              <label >Email</label>
            </div>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              name="email"
              id="email"
            />
            <br />
            <label >Give us your feedback</label>
            <br />
            <textarea name="text" id="text"></textarea>
                        <button style={styles.btnStyle} type="submit">
              Send
            </button>
            <input style={styles.btnStyle} type="reset" value="Clear" />
          </form>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default ContactUs;

export const Head = () => <title>Contact Us</title>;
