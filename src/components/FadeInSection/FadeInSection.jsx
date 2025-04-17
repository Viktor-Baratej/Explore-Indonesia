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
        duration: 1.4,
        ease: 'easeOut',
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      style={{
        borderRadius: '20px',
        backdropFilter: 'blur(6px)',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '40px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
