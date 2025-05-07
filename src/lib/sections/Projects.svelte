<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const projects = [
    {
      title: 'Mobile Banking Platform',
      description:
        'Developed a mobile banking solution facilitating deposits and withdrawals. Deployed across partner cashpoints, enhancing transaction efficiency and expanding financial service accessibility for a broad client network.',
      tech: [
        'Angular',
        '.Net Core',
        'Sql Server',
        'GraphQl',
        'ApolloServer',
        'Jira',
        'Bitbucket',
      ],
      image:
        'https://media.istockphoto.com/id/973139084/photo/man-hands-using-online-banking-and-icon-on-tablet-screen-device-in-coffee-shop-technology-e.jpg?s=612x612&w=0&k=20&c=AR_HHzXl6p5-UpVIljom3fzSWYOcQXxkd-ewSfyaflU=',
    },
    {
      title: 'Construction ERP Web App',
      description:
        'Engineered a comprehensive web-based ERP application tailored for construction entrepreneurs. Provides tools to optimize project management, resource allocation, and operations, addressing industry-specific requirements.',
      tech: ['Angular', '.Net Core', 'Sql Server', 'RestFull', 'Azure Devops', 'Docker'],
      image:
        'https://unsplash.com/photos/8YG31Xn4dSw/download?force=true&w=1920',
    },
    {
      title: 'Financial Tracking Web Application',
      description:
        'Implemented a web application to manage collected funds and redistribute them to beneficiaries based on predefined rules. Integrated administrative exchanges using SharePoint API and electronic signatures via DocuSign API.',
      tech: [
        'Angular',
        '.Net Core',
        'Sql Server',
        'RestFull',
        'Azure Devops',
        'SharePoint API',
        'DocuSign API',
        'Docker',
      ],
      image:
        'https://unsplash.com/photos/5fNmWej4tAA/download?force=true&w=1920',
    },
  ];

  onMount(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-section',
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

<section class="min-h-screen py-20 px-4 projects-section">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-display font-bold mb-16 project-card">
      Featured Projects
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="project-card group">
          <div class="relative overflow-hidden rounded-lg aspect-video mb-4">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-2xl font-bold mb-2">{project.title}</h3>
          <p class="text-secondary/80 mb-4">{project.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each project.tech as tech}
              <span class="px-3 py-1 bg-secondary/5 rounded-full text-sm"
                >{tech}</span
              >
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
