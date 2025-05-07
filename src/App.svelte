<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Experience from './lib/sections/Experience.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Testimonials from './lib/sections/Testimonials.svelte';
  import Education from './lib/sections/Education.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import Nav from './lib/components/Nav.svelte';

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from('.fade-in', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out'
    });
  });
</script>

<Nav />
<main class="bg-gray-900/100">
  <section id="home">
    <Hero />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="experience">
    <Experience />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="testimonials">
    <Testimonials />
  </section>
  <section id="education">
    <Education />
  </section>
  <section id="contact">
    <Contact />
  </section>
</main>

<style>
  main {
    scroll-behavior: smooth;
  }
</style>