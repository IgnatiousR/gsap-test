import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button?.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
        duration: 1.5,
      });

      isFloating = true;
    }
  } else {
    button?.classList.remove("show");
  }
});

button?.addEventListener("mouseenter", () => {
  gsap.to(button, {
    duration: 0.2,
    scale: 1.2,
  });
});

button?.addEventListener("mouseleave", () => {
  gsap.to(button, {
    duration: 0.2,
    scale: 1.0,
  });
});

button?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
