import SectionTitle from "../components/SectionTitle";

export default function Resume() {
  return (
    <section>
      <SectionTitle 
        title={"Resume"} 
        subtitle={"Download my resume to learn more about my education, skills, projects, and technical experience."}
      />
      <p>
        You can download my resume using the button below.
      </p>
      <a
        className="btn primary"
        href="/resume/MahiGuptaResume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}
