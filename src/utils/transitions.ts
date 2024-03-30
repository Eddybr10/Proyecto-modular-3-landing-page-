export const fadeIn = () => {
  return {
    hidden: {
      y: 80,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.9,
        delay: 0.1,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
        delay: 0.1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
