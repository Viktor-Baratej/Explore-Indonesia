import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
    
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
