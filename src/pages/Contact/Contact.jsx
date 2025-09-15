import React, { useEffect, useState } from "react";
import { BiMailSend, BiPhone, BiMap } from "react-icons/bi";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SAAC | Contact";
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch((process.env.REACT_APP_API_BASE_URL || "") + "/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setToast("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setToast(""), 2500);
    } catch {
      setToast("Network error. Please try again later.");
      setTimeout(() => setToast(""), 2500);
    }
  };

  return (
    <section id="contact">
      <div className="breadcrumb">
        <h2>Contact</h2>
        <span></span>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact_container container">
        <div className="contact_grid">
          <form className="contact_form" onSubmit={submit}>
            <div className="cf_row">
              <input
                className="cf_input"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="cf_input"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <textarea
              className="cf_textarea"
              rows="5"
              placeholder="Write your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button className="btn cf_submit" type="submit">
              <BiMailSend />
              <span>Send Message</span>
            </button>
            {toast && <div className="contact_toast">{toast}</div>}
          </form>

          <div className="contact_info">
            <div className="ci_item">
              <BiMailSend />
              <div>
                <h5>Email</h5>
                <p>saac.official@jgec.ac.in</p>
              </div>
            </div>
            <div className="ci_item">
              <BiPhone />
              <div>
                <h5>Phone</h5>
                <p>+91 00000 00000</p>
              </div>
            </div>
            <div className="ci_item">
              <BiMap />
              <div>
                <h5>Address</h5>
                <p>Jalpaiguri Government Engineering College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
