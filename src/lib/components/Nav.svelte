<script lang="ts">
  import { onMount } from 'svelte';
  let isScrolled = false;
  let isMenuOpen = false;
  let activeSection = 'home';

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        activeSection = currentSection.id;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    }
  }
</script>

<nav
  class="fixed w-full z-50 transition-all duration-300 bg-gray-900 shadow-lg"
  class:bg-primary={isScrolled}
>
  <div class="max-w-7xl mx-auto px-4 py-6">
    <div class="flex justify-between items-center">
      <a
        href="#home"
        class="text-2xl font-display font-bold"
        on:click|preventDefault={() => scrollToSection('home')}
      >
        Portfolio
      </a>

      <button
        class="md:hidden"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {#if isMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-16 6h16"
            />
          {/if}
          }
        </svg>
      </button>

      <div class="hidden md:flex space-x-8">
        {#each sections as section}
          <a
            href="#{section.id}"
            class="hover:text-accent transition-colors relative"
            class:text-accent={activeSection === section.id}
            on:click|preventDefault={() => scrollToSection(section.id)}
          >
            {section.label}
            {#if activeSection === section.id}
              <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
              ></span>
            {/if}
          </a>
        {/each}
      </div>
    </div>

    {#if isMenuOpen}
      <div class="md:hidden mt-4 space-y-4 bg-primary/95 p-4 rounded-lg">
        {#each sections as section}
          <a
            href="#{section.id}"
            class="block hover:text-accent transition-colors"
            class:text-accent={activeSection === section.id}
            on:click|preventDefault={() => scrollToSection(section.id)}
          >
            {section.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>
