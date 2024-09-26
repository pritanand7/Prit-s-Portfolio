import React, { useEffect, useState } from "react";
import styles from "../Contact.module.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically load Bootstrap CSS when component mounts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css";
    document.head.appendChild(link);

    // Remove the loading screen after the page loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up: Remove Bootstrap CSS when component unmounts
    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.contactWrapper}>
      {loading && <div id="load"></div>}

      {!loading && (
        <article class="about active">
          <section id="contact">
            <div className={styles.formContainer}>
              <div className={styles.header}>
                <h1>Have any queries?</h1>
                <p class="para">
                  &nbsp;Feel free to reach out for any queries or
                  suggestions.
                </p>
              </div>

              <form action="https://formspree.io/f/xkgwdnvo" method="POST">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    pattern="^[\S]+\s+[\S]+$"
                    name="name"
                    className="name form-control"
                    id="floatingInput"
                    placeholder="Name"
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="email form-control"
                    id="floatingInput"
                    placeholder="Email id"
                    required
                  />
                  <label htmlFor="email">Email Id</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    pattern="^[\S\s]+\S"
                    name="subject"
                    className="subject form-control"
                    id="floatingInput"
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    name="suggestion"
                    className="suggestion form-control"
                    id="floatingTextarea"
                    placeholder="Your Message"
                    rows="6" // Increase the rows to make it look like a paragraph space
                    required
                  />
                  <label htmlFor="suggestion">Your Message</label>
                </div>

                <button type="submit" className={styles.btn}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </article>
      )}
    </div>
  );
};

export default Contact;
