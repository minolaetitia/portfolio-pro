<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const experiences = [
    {
      year: 'Dec 2023 - Present',
      company: 'Bocasay',
      role: 'Senior .Net | Angular Developer',
      description:
        'Built scalable web applications and APIs , dispatch task, developed a dedicated web application for monitoring payments for the AGFPN organization, resulting in a highly efficient solution that significantly optimized their financial management processes.',
      stacks: [
        'Angular 15',
        'PrimeNg',
        '.Net Core 7',
        'Sql Server',
        'Azure Devops',
        'Sharepoint & Docusign Api',
      ],
    },
    {
      year: 'May 2023 - Dec 2023',
      company: 'Corellia MG',
      role: 'Senior .Net | Angular Developer',
      description:
        'Developed a web-based ERP application specifically tailored for entrepreneurs in the construction industry',
      stacks: ['Angular 15', '.Net Core 7', 'Sql Server', 'Azure Devops'],
    },
    {
      year: '2020 - May 2023',
      company: 'AccèsBanque Madagascar',
      role: 'Full Stack Developer',
      description:
        'Developed highly innovative banking applications, including web, mobile, and chatbot solutions, to facilitate easy account management, loans, and various banking operations for customers.',
      stacks: [
        'Angular',
        'NodeJs',
        '.Net Core | .Net Framework',
        'NHibernate',
        'Entity Framework',
        'Sql Server',
        'Bitbucket',
        'Jira',
        'IIS Server',
      ],
    },
    {
      year: 'Oct 2018 - March 2019',
      company: 'INSTAT Madagascar',
      role: 'Symfony Developer',
      description:
        'Designed and developed a web application for comprehensive IT asset management, enabling efficient tracking, monitoring, and administration of all hardware and software resources within the organization.',
      stacks: [
        'Symfony',
        'MySql',
        'Bootstrap',
        'Visual Paradigm'
      ],
    },

    {
      year: 'Aug 2017 - Sept 2017',
      company: 'ASTCOM WEB',
      role: 'Java Developer Intern',
      description:
        'Designed and implemented a Java-based desktop application for efficient staff management, including features for employee records, role assignments, and administrative workflows.',
      stacks: [
        'Java',
        'MySql',
        'PowerAMC',
        'NetBeans',
      ],
    },
  ];

  onMount(() => {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.experience-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -100,
      duration: 1,
      stagger: 0.3,
    });
  });
</script>

<section class="min-h-screen py-20 px-4 experience-section">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-display font-bold mb-16">Experiences</h2>
    <div class="relative">
      <div class="absolute left-0 md:left-1/2 h-full w-1 bg-accent/20"></div>
      {#each experiences as exp, i}
        <div
          class="timeline-item relative flex flex-col md:flex-row md:justify-between mb-16 last:mb-0"
        >
          <div
            class="md:w-[45%] {i % 2 === 0 ? 'md:text-right' : 'md:ml-auto'}"
          >
            <div class="bg-secondary/5 p-6 rounded-lg">
              <span class="text-accent font-bold">{exp.year}</span>
              <h3 class="text-2xl font-bold mt-2">{exp.role}</h3>
              <h4 class="text-xl text-secondary/80 mb-4">{exp.company}</h4>
              <p class="text-secondary/60">{exp.description}</p>
            </div>
          </div>
          <div
            class="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-8"
          ></div>
        </div>
      {/each}
    </div>
  </div>
</section>
