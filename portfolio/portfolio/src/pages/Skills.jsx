import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript"],
  Backend: ["Node.js", "Express", "Django", "Django REST Framework"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "Postman", "WordPress"],
  Concepts: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "RESTful APIs",
    "Backend Fundamentals"
  ]
};

export default function Skills() {
  return (
    <section>
      <SectionTitle
        title="Skills"
        subtitle="Technologies and concepts I work with"
      />

      {Object.entries(skills).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          style={{ marginBottom: "2rem" }}
        >
          <h3 className="accent">{category}</h3>
          <div className="skill-grid">
            {items.map(skill => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}