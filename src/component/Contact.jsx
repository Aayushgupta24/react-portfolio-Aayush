import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 flex justify-center items-center flex-col">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }}
          className="my-4"
        >
          Aayush Kumar Gupta
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }}
          className="my-4"
        >
          Software Engineer
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }}
          className="my-4"
        >
          📱 +91 8824453834
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }}
          className="my-4"
        >
          📧 aayushkgupta786@gmail.com
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1 }}
          className="my-4"
        >
          Jaipur, Rajasthan, India, 302018
        </motion.p>
      </div>
      {/* Copyright Notice */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 100 }} 
        transition={{ duration: 0.5, delay: 0.5 }} // Added delay for smoother entrance
        className="text-center mt-10 text-sm text-gray-500"
      >
        © Copyright Aayushkg. All Rights Reserved
      </motion.div>
    </div>
  );
};

export default Contact;
