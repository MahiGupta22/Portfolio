import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <SectionTitle title="About Me" />
      
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        I am a Computer Engineering student at Bharati Vidyapeeth College of
        Engineering, Pune, with a strong interest in backend development and
        software engineering.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        I enjoy designing backend systems, working with databases, and solving
        algorithmic problems that require structured thinking and clean design.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        My academic projects and internship experience reflect a focus on
        building maintainable systems using Node.js, Django, REST APIs, and
        relational and NoSQL databases.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Currently, I am strengthening my understanding of system design,
        backend scalability, and writing production-ready code.
      </motion.p>
    </section>
  );
}