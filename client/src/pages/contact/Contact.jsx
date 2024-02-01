import { publicRequest } from "../../requestMethods";
import "./contact.css";
import { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/questions", {
        name,
        email,
        query,
      });
      Swal.fire({
        icon: "success",
        title: "Submitted Successfully",
        text: "Author will respond you soon",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.response.data}`,
      });
    }
  };
  return (
    <div className="contact">
      <div className="text-wrapper">
        <h3 className="text-heading">We're Here For You</h3>
        <p className="text-para">
          We value your feedback and inquiries. If you have any questions,
          suggestions, or concerns, please feel free to reach out to us. Our
          dedicated team is here to assist you.<br></br>
          <br></br>
          Phone: +918006060999.
        </p>
        <br></br>
        <p className="text-para">
          Alternatively, you can use the contact form below to send us a
          message. We appreciate your interest and look forward to hearing from
          you.
        </p>
      </div>
      <div className="contact-wrapper">
        <h1>Have Question?</h1>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Your Name..."
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email..."
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-item">
              <label htmlFor="query">Query: </label>
              <textarea
                cols="30"
                rows="4"
                className="form-textarea"
                placeholder="Enter Your Query..."
                value={query}
                required
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>
            </div>
            <div className="form-item">
              <button type="submit" className="form-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
