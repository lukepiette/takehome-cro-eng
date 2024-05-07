import { a, useScroll } from "@react-spring/web";
import { Typography, Stack, Box, styled, keyframes, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Define keyframes for the animation
const pulseShadow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 200px #121212);
  }
  50% {
    filter: drop-shadow(0 0 300px #121212);
  }
`;

// Create a styled component with the animation
const AnimatedStack = styled(Stack)({
  padding: 2,
  overflow: "hidden",
  animation: `${pulseShadow} 14s infinite ease-in-out`, // Apply the animation
});

function useAnimateOnInView() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const style = {
    opacity: 0,
    transform: "translateY(20px)",
    animation: inView ? "fadeIn 2s ease-out forwards" : "none",
    "@keyframes fadeIn": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  };

  return { ref, style };
}

function AnimatedTypography({ children, ...props }) {
  const { ref, style } = useAnimateOnInView();

  return (
    <Typography
      ref={ref}
      {...props}
      sx={{
        ...props.sx, // Include any additional styles passed via the sx prop
        ...style, // Apply the animation style
      }}
    >
      {children}
    </Typography>
  );
}

const Summary = () => {
  return (
    <Stack
      sx={{
        zIndex: 1,
        width: "100%",
      }}
    ></Stack>
  );
};

export default Summary;
