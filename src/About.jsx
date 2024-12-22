import "./About.css";

function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src="/public/Aderemi.jpeg" alt="Aderemi Oje" />
          </div>
          <div className="about-text">
            <h1>
              Hello! I am <span className="highlight">Aderemi Oje</span>
            </h1>
            <p>
              An experienced <strong>insurance professional</strong>, passionate{" "}
              <strong>software developer</strong>, and skilled{" "}
              <strong>data analyst</strong>. With over <strong>9 years</strong>{" "}
              in the insurance industry and a robust technical background, I
              bring a unique blend of expertise across these fields. My goal is
              to leverage technology and data-driven solutions to create
              innovations that streamline processes and enhance experiences.
            </p>

            <h2>My Journey in Insurance</h2>
            <p>
              My career in the insurance industry began{" "}
              <strong>9 years ago</strong>. Over the years, I have gained
              extensive knowledge in{" "}
              <em>policy management, risk assessment, and claims processing</em>
              . My commitment to providing exceptional service has helped
              clients secure their futures and protect their assets.
            </p>

            <h2>Passion for Software Development</h2>
            <p>
              In addition to my insurance expertise, I specialize in{" "}
              <strong>HTML</strong>, <strong>CSS</strong>,
              <strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
              <strong>Chakra UI</strong>, <strong>Next.js</strong>,{" "}
              <strong>React</strong>, <strong>MySQL</strong> and{" "}
              <strong>Vue.js</strong>. I have developed numerous applications
              that solve real-world problems, enhancing efficiency and user
              experiences.
            </p>

            <h2>Data Analysis Expertise</h2>
            <p>
              As a skilled <strong>data analyst</strong>, I am proficient in
              tools like <strong>Power Query</strong>,{" "}
              <strong>Pivot Tables</strong>, <strong>MySQL</strong> and{" "}
              <strong>Power Pivot</strong>. These tools enable me to transform
              raw data into actionable insights, providing businesses with the
              information they need to make informed decisions.
            </p>
            <p>
              My ability to integrate data analysis with software development
              allows me to create powerful solutions that not only process data
              but also present it in user-friendly, impactful ways.
            </p>

            <h2>Bridging Technology and Innovation</h2>
            <p>
              My unique combination of skills enables me to bridge gaps between
              industries, whether it is through developing custom software,
              creating data visualization tools, or optimizing insurance
              workflows with analytics. I integrate the latest technologies to
              drive progress and deliver value.
            </p>

            <h2>Get in Touch</h2>
            <p>
              If you are looking for a professional who combines expertise in
              insurance, software development, and data analysis, let’s connect!
              Reach me at{" "}
              <a href="mailto:remoj2003@gmail.com" className="email-link">
                remoj2003@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
