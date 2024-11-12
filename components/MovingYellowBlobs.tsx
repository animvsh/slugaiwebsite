// components/MovingYellowBlobs.tsx
'use client';

import { motion } from 'framer-motion';

const MovingYellowBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large yellow blob */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-yellow-400 blur-[60px]"
          animate={{
            x: [0, 600, -600, 0],
            y: [0, -400, 400, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Medium yellow blob */}
        <motion.div
          className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-yellow-500 blur-[40px]"
          animate={{
            x: [0, -500, 500, 0],
            y: [0, 300, -300, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Small yellow blob */}
        <motion.div
          className="absolute bottom-[20%] left-[30%] w-[250px] h-[250px] rounded-full bg-yellow-300 blur-[30px]"
          animate={{
            x: [0, 400, -400, 0],
            y: [0, -200, 200, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Extra yellow blob */}
        <motion.div
          className="absolute top-[50%] left-[50%] w-[350px] h-[350px] rounded-full bg-yellow-600 blur-[50px]"
          animate={{
            x: [0, -400, 400, 0],
            y: [0, 400, -400, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default MovingYellowBlobs;
