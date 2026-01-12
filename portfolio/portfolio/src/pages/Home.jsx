import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import featured from "../data/projects/featured.json";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Mahi Gupta</h1>

          <h2 className="accent">
            Aspiring Software Engineer (Backend Focus)
          </h2>

          <p>
            I build scalable backend systems and data-driven applications
            with a strong foundation in algorithms, databases, and clean
            software design.
          </p>

          <div className="hero-actions">
            <NavLink className="btn primary" to="/projects">
              View Projects
            </NavLink>
            <NavLink className="btn secondary" to="/contact">
              Contact Me
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="hero-card">
            <h3>Current Focus</h3>
            <ul>
              <li>Backend Development</li>
              <li>REST APIs</li>
              <li>Data Structures & Algorithms</li>
              <li>Django & Node.js</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS */}
      <section>
        <SectionTitle
          title="Featured Projects"
          subtitle="Backend-focused projects demonstrating problem solving and system design"
        />

        <div className="grid">
          {featured.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <NavLink className="btn secondary" to="/projects">
            View All Projects →
          </NavLink>
        </div>
      </section>

      {/* RESUME SNAPSHOT */}
      <section>
        <SectionTitle
          title="Resume"
          subtitle="Education, skills, and technical experience"
        />

        <p>
          Computer Engineering student with strong backend fundamentals,
          hands-on experience in Node.js and Django, and a solid grasp of
          databases and algorithmic problem solving.
        </p>

        <a
          className="btn primary"
          href="/resume/MahiGuptaResume.pdf"
          target="_blank"
        >
          Download Resume
        </a>
      </section>

      {/* CONTACT CTA (THIS IS THE SECTION YOU ASKED ABOUT) */}
      <section>
        <SectionTitle
          title="Let’s Build Something"
          subtitle="Open to internships, projects, and learning opportunities"
        />

        <NavLink className="btn primary" to="/contact">
          Contact Me
        </NavLink>
      </section>
    </>
  );
}