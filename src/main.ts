import "./style.css";

// Define interface for course items
interface CourseItem {
  id: number;
  title: string;
  description: string;
  path: string;
  coverImage: string;
}

// All course data - single source of truth
const courses: CourseItem[] = [
  {
    id: 1,
    title: "Your First Animation",
    description: "Learn how to create your first animation with GSAP",
    path: "pages/01a_your-first-animation/index.html",
    coverImage: "cover1.png",
  },
  {
    id: 2,
    title: "Basic Challenge",
    description: "Practice your skills by creating a pulsing glow animation",
    path: "pages/01b_challenge/index.html",
    coverImage: "cover2.png",
  },
  {
    id: 3,
    title: "Understanding Properties",
    description:
      "Learn how GSAP interprets and animates different types of properties to create visually rich motion.",
    path: "pages/02a_understanding-properties/index.html",
    coverImage: "cover3.png",
  },
  {
    id: 4,
    title: "Understanding Methods",
    description:
      "Learn how to control GSAP animations using built-in methods to create complex motion sequences.",
    path: "pages/02b_understanding-methods/index.html",
    coverImage: "cover4.png",
  },
  {
    id: 5,
    title: "Power Easing",
    description:
      "Learn how Power Easing in GSAP offers progressively stronger acceleration and deceleration for snappier or smoother motion control.",
    path: "pages/03a_power-easing/index.html",
    coverImage: "cover5.png",
  },
  {
    id: 6,
    title: "Sine Easing",
    description:
      "Learn how Sine Easing in GSAP creates smooth, natural motion by mimicking the curve of a sine wave",
    path: "pages/04a_sine-easing/index.html",
    coverImage: "cover6.png",
  },
  {
    id: 7,
    title: "Back Easing",
    description:
      "Learn how Back Easing in GSAP creates motion that briefly overshoots before settling, adding a dynamic, elastic feel to animations.",
    path: "pages/05a_back-easing/index.html",
    coverImage: "cover7.png",
  },
  {
    id: 8,
    title: "Bounce Easing",
    description:
      "Learn how Bounce Easing in GSAP simulates realistic bouncing effects by mimicking gravity and collision dynamics.",
    path: "pages/06a_bounce-easing/index.html",
    coverImage: "cover8.png",
  },
  {
    id: 9,
    title: "Elastic Easing",
    description:
      "Learn how Elastic Easing in GSAP produces spring-like motion with dramatic overshoot and recoil for high-energy animations.",
    path: "pages/07a_elastic-easing/index.html",
    coverImage: "cover9.png",
  },
  {
    id: 10,
    title: "Expo Easing",
    description:
      "Learn how Expo Easing in GSAP creates dramatic animations that accelerate or decelerate exponentially for a powerful impact.",
    path: "pages/08a_expo-easing/index.html",
    coverImage: "cover10.png",
  },
  {
    id: 11,
    title: "Apple Dock",
    description:
      "Learn how to recreate Apple Dock–style animations in GSAP using a mix of easing functions for smooth, responsive, and playful motion.",
    path: "pages/09a_apple-dock/index.html",
    coverImage: "cover11.png",
  },
  {
    id: 12,
    title: "Learn Gsap To",
    description:
      "Learn how <code>gsap.to()</code> lets you animate any property to a desired value with full control over timing, easing, and callbacks.",
    path: "pages/10a_learn-to/index.html",
    coverImage: "cover12.png",
  },
  {
    id: 13,
    title: "Gsap To Challenge",
    description:
      "Put your skills to the test by using <code>gsap.to()</code> to create a multi-property, interactive animation with custom easing and sequencing.",
    path: "pages/10b_challenge-to/index.html",
    coverImage: "cover13.png",
  },
  {
    id: 14,
    title: "Learn Gsap From",
    description:
      "Learn how <code>gsap.from()</code> animates elements from a starting state to their current state, ideal for entrance animations.",
    path: "pages/11a_learn-from/index.html",
    coverImage: "cover14.png",
  },
  {
    id: 15,
    title: "Gsap From Challenge",
    description:
      "Put your skills to the test by creating engaging entrance animations using <code>gsap.from()</code> to reveal elements with flair.",
    path: "pages/11b_challenge-from/index.html",
    coverImage: "cover15.png",
  },
  {
    id: 16,
    title: "Learn Gsap fromTo",
    description:
      "Learn how <code>gsap.fromTo()</code> gives you precise control by defining both the start and end states of an animation explicitly.",
    path: "pages/12a_learn-fromto/index.html",
    coverImage: "cover16.png",
  },
  {
    id: 17,
    title: "Gsap fromTo Challenge",
    description:
      "Put your skills to the test by building a precise animation using <code>gsap.fromTo()</code>, defining both start and end states.",
    path: "pages/12b_challenge-fromto/index.html",
    coverImage: "cover17.png",
  },
  {
    id: 18,
    title: "Learn Gsap Set",
    description:
      "Learn how <code>gsap.set()</code> instantly applies property values without animation, perfect for setup, state resets, or quick style tweaks.",
    path: "pages/13a_learn-set/index.html",
    coverImage: "cover18.png",
  },
  {
    id: 19,
    title: "Gsap Set Challenge",
    description:
      "Put your skills to the test by using <code>gsap.set()</code> to initialize animation states, and control visibility.",
    path: "pages/13b_challenge-set/index.html",
    coverImage: "cover19.png",
  },
  {
    id: 20,
    title: "Gsap Timeline",
    description:
      "Learn how <code>gsap.timeline()</code> lets you sequence multiple animations with precise control over timing, overlap, and orchestration.",
    path: "pages/14a_learn-timeline/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 21,
    title: "Staggers",
    description:
      "Learn how GSAP stagger animations create rhythmic, cascading motion by offsetting the start time of multiple elements for polished, professional sequences.",
    path: "pages/15_staggers-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 22,
    title: "Timeline Preloader",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/16_timeline-preloader-demo-challenge/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 23,
    title: "Your First Scroll-Driven Animation Challenge",
    description:
      "Put your skills to the test by building your first scroll-triggered animation and syncing motion to scroll position using GSAP ScrollTrigger.",
    path: "pages/17_first-scroll-animation/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 24,
    title: "Scrub Challenge - Sync Animation to Scroll",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/18_scrub-challenge/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 25,
    title: "Pin Challenge - Lock Elements in Place",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/19_pin-challenge-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 26,
    title: "SVG Challenge",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/20_svg-scroll-demo-challenge/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 27,
    title: "Final Pin Challenge",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/21_teh-tarik-final-pin-demo-challenge/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 28,
    title: "Basic Text Entrance",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/22_basic-text-entrance/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 29,
    title: "Word-by-Word Reveal",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/23_word-by-word-reveal/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 30,
    title: "Character-by-Character Reveal",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/24_character-reveal/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 31,
    title: "Masked Line Reveal",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/25_mask-line-reveal/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 32,
    title: "Horizontal Mask Reveal",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/26_horizontal-mask-reveal/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 33,
    title: "Stacked Text Reveal",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/27_stack-text-reveal/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 34,
    title: "Number Counter",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/28_number-counter/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 35,
    title: "Word-by-Word Reveal (SplitText)",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/29_word-by-word-reveal-splitText/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 36,
    title: "Character-by-Character Reveal (SplitText)",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/30_ch-reveal-splitText/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 37,
    title: "Masked Line Reveal (SplitText)",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/31_line-by-line-splitText/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 38,
    title: "REVERT (SplitText)",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/32_revert-SplitText/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 39,
    title: "Responsive SplitText with autoSplit + onSplit",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/33_autosplit-resplit/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 40,
    title: "Looping Text Demo",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/34_loop-text-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 41,
    title: "Font Stretch Demo",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/35_font-stretch-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 42,
    title: "Echo Text Animation Demo",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/36_echo-text-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 43,
    title: "Basic Scramble Animation",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/37_basic-scramble-usage/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 44,
    title: "ScrambleText Plugin Config",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/38_scramble-config/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 45,
    title: "ScrambleText Plugin Config",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/39_scramble-behaviour/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 46,
    title: "Variable Font Animation",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/40_variable-font-animation/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 47,
    title: "Scroll Based Text Animation",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/41_scroll-based-text-demo/index.html",
    coverImage: "cover20.png",
  },
  {
    id: 48,
    title: "Scroll Video Demo",
    description:
      "Take control of scroll-driven motion by mastering scrub animations, real-time updates, and scroll-linked timing using GSAP ScrollTrigger.",
    path: "pages/42_vd-scroll-demo/index.html",
    coverImage: "cover20.png",
  },
];

// Reusable render function for single course item
const renderCourseItem = (course: CourseItem): string => `
  <li>
     <a href="/src/${course.path}">
      <img src="${course.coverImage}" alt="animation-cover" />
      <div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      </div>
    </a>
  </li>
`;

// Render full application
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main>
      <header class="nav">
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
        <a href="https://jsmastery.com/all-courses" target="_blank"
          >GSAP Course</a
        >
      </header>

      <section class="container">
        <h1>The Ultimate GSAP Course Workshop</h1>

        <ul>
          ${courses.map(renderCourseItem).join("")}
        </ul>
      </section>
    </main>
`;
