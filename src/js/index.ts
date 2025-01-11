import { animate, stagger } from "motion";

const elements = document.querySelectorAll(".motion-link, .motion-gif, .motion-heart, .motion-footer");

animate(
  elements,
  { opacity: [0, 1] },
  {
    duration: 0.4,
    delay: stagger(0.4, { startDelay: 0.2 }),
    ease: [0.70, 0.15, 0.54, 0.88]
  },
);

