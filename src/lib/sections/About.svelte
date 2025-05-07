<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const frontTechnos = [
    'TypeScript',
    'Angular',
    'NgRx',
    'NextJs',
    'Tailwind',
    'Flowbite',
    'Material Ui',
    'PrimeNg',
    'Bootstrap',
  ];

  const backTechnos = [
    '.Net Core',
    '.Net Framework',
    'NestJs',
    'RestFull',
    'GraphQL',
    'PostgreSql',
    'Sql Server',
    'MariaDb',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'Docker',
  ];

  onMount(() => {
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
    });
  });
</script>

<section class="min-h-screen flex items-center py-20 px-4 about-section">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="about-content">
        <h2 class="text-5xl font-display font-bold mb-8">About Me</h2>
        <p class="text-xl mb-6">
          With over 5 years of experience in software development, I specialize
          in building scalable, high-performance applications that solve
          real-world problems.
        </p>
        <p class="text-xl mb-6">
          My expertise spans across the entire development stack, from crafting
          intuitive user interfaces to designing robust backend architectures. I
          also specialize in <strong class="text-purple-600">.Net/C# </strong>
          and <strong class="text-purple-600"> Angular</strong> technologies.
        </p>
      </div>
      <div class="about-content grid grid-cols-2 gap-4">
        <div class="p-6 bg-secondary/5 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Frontend</h3>
          <ul class="flex flex-wrap gap-2">
            {#each frontTechnos as techno}
              <li>
                <span
                  class="inline-block border border-accent text-accent text-sm font-medium px-3 py-1 rounded-full"
                >
                  {techno}
                </span>
              </li>
            {/each}
          </ul>
        </div>
        <div class="p-6 bg-secondary/5 rounded-lg">
          <h3 class="text-2xl font-bold mb-4">Backend</h3>
          <ul class="flex flex-wrap gap-2">
            {#each backTechnos as techno}
              <li>
                <span
                  class="inline-block border border-accent text-accent text-sm font-medium px-3 py-1 rounded-full"
                >
                  {techno}
                </span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
