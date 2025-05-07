<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const education = [
    {
      year: '2020',
      degree: 'Master of Computer Science',
      school: 'ISSMI',
      description:
        'Specialized in Management IT and Software Engineering',
    },
    {
      year: '2018',
      degree: 'Bachelor of Science in Management IT and Software Engineering',
      school: 'ISSMI',
      description: 'Graduated with honors, focus on Software Engineering',
    },
  ];

  const certifications = [
    {
      name: 'SQL Advanced Certificate',
      issuer: 'HackerRank',
      year: 'March 2024',
      icon: '☁️',
    },
    {
      name: 'Angular Certification',
      issuer: 'HackerRank',
      year: 'Feb 2022',
      icon: '🌐',
    },
    {
      name: 'C# Certification',
      issuer: 'HackerRank',
      year: '2022',
      icon: '⚙️',
    },
    {
      name: 'JavaScript Certification',
      issuer: 'HackerRank',
      year: 'Apr 2023',
      icon: '📱',
    },
  ];

  onMount(() => {
    gsap.from('.education-item', {
      scrollTrigger: {
        trigger: '.education-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  });
</script>

<section class="min-h-screen py-20 px-4 education-section">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-16">
      <div>
        <h2 class="text-5xl font-display font-bold mb-16">Education</h2>
        {#each education as edu}
          <div class="education-item mb-12 last:mb-0">
            <div class="bg-secondary/5 p-8 rounded-lg">
              <span class="text-accent font-bold">{edu.year}</span>
              <h3 class="text-2xl font-bold mt-2">{edu.degree}</h3>
              <h4 class="text-xl text-secondary/80 mb-4">{edu.school}</h4>
              <p class="text-secondary/60">{edu.description}</p>
            </div>
          </div>
        {/each}
      </div>

      <div>
        <h2 class="text-5xl font-display font-bold mb-16">Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each certifications as cert}
            <div class="education-item bg-secondary/5 p-6 rounded-lg">
              <span class="text-4xl mb-4 block">{cert.icon}</span>
              <h3 class="text-xl font-bold">{cert.name}</h3>
              <p class="text-secondary/80">{cert.issuer}</p>
              <span class="text-accent text-sm">{cert.year}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
