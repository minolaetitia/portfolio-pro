<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  onMount(() => {
    gsap.to('.hero-text', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
      stagger: 0.2,
    });
  });
</script>

<section class="min-h-screen flex items-center justify-center px-4 relative">
  <div class="max-w-7xl mx-auto text-center">
    <h1
      class="hero-text text-7xl md:text-9xl font-display font-bold opacity-0 translate-y-20"
    >
      Hello 👋!!!
    </h1>
    <h1
      class="hero-text text-7xl md:text-9xl font-display font-bold opacity-0 translate-y-20 text-accent"
    >
      I'm Fidèle
    </h1>
    <p
      class="hero-text mt-8 text-xl md:text-2xl opacity-0 translate-y-20 max-w-2xl mx-auto"
    >
      Crafting exceptional digital experiences through innovative solutions and
      cutting-edge technology
    </p>

    <div class="flex justify-center mt-20">
      <button
        class="px-4 py-2 mr-4 text-white bg-accent rounded hover:bg-purple-500 hover:text-white"
        on:click={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Hire Me
      </button>

      <a href="/fidele_resume.pdf" download="fidele_resume.pdf">
        <button
          class="px-4 py-2 text-primary bg-white rounded hover:bg-gray-300 hover:text-primary"
        >
          Download Resume
        </button>
      </a>
    </div>
  </div>

  <a href="#about">
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </a>
</section>
