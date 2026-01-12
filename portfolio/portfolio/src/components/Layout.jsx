import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>
    </>
  );
}
