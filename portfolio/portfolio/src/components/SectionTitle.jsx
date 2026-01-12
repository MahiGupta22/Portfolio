import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "3rem" }}
    >
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <hr className="section-divider"/>
    </motion.div>
    
  );
}
