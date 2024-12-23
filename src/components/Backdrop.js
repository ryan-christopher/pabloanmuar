import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop fixed top-0 left-0 w-full h-full bg-[#22272589] z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;