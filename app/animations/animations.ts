export const PageVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const ScaleUp = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const FadeInLeft = {
  hidden: {
    x: -60,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const FadeInRight = {
  hidden: {
    x: 60,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const FadeInUp = {
  hidden: {},

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },

  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const ListVariant = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const LineVariant = {
  hidden: { opacity: 1, x: -1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const EmailMessage = {
  hidden: { opacity: 1, x: 1000 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const HeaderVariant = {
  hidden: { opacity: 1, y: -400 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const ShakeVariant = {
  hover: {
    rotate: [0, -20, 20, 0],
    duration: 0.6,
  },
};

export const MenuIconVariant = {
  hidden: {
    rotate: 0,
  },
  visible: {
    rotate: 180,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const AboutPhoto = {
  initial: {
    filter: "grayscale(100)",
    scale: 0,
    opacity: 0,
  },
  hover: {
    filter: "grayscale(0)",
    rotate: [0, 10, -10, 0],
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const SvgPath = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const BallLoader = {
  y: {
    duration: 0.4,
    repeatType: "reverse",
    repeat: Infinity,
    ease: "easeOut",
  },
};

export const LogoVariant = {
  initial: {
    x: 0,
  },
  visible: {
    duration: 1,
    x: "2.25rem",
  },
  hover: {
    x: 0,
  },
};

export const MoveLeft = {
  hover: {
    x: [0, 30, 0],
  },
};

export const StaggerContainer = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const StaggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
