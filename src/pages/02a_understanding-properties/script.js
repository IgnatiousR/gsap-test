import gsap from 'gsap';

gsap.to('.box', {
  x: 200,
  opacity:1,
  rotation: 360,
  background: '#f87171', // red
  borderRadius: '4rem',
  duration: 2,
});