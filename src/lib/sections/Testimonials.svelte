<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const testimonials = [
    {
      name: 'Mickael RANDRIANANTENAINA',
      role: 'Senior Software Developer at Business & Decision',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQFUTSpNON4SQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723748988582?e=1752105600&v=beta&t=JHPe545eSXDYj-7KT5ZpTpmB2AZqrA0ZyLThMVKbJeo',
      text: `I’m pleased to recommend Fidèle. He is highly dedicated and motivated in his field.
He possesses a wide range of skills, with strong expertise in both frontend and backend development.
His ability to approach problems from a different perspective has always inspired me. He is a talented developer.`,
    },
    {
      name: 'Andry Mandresy RAMAHALEOHANITRARIVO',
      role: 'Senior Business Intelligence Consultant @ Business & Decision',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQHHkNJHwMeHtQ/profile-displayphoto-shrink_800_800/B4DZWlz0LGHIAg-/0/1742243579297?e=1752105600&v=beta&t=HX6CwPysm9KLbT_MKLnZF-kcezDE0746OTry5IxdIXU',
      text: `
      Having worked with Diel, I witnessed the breadth of his knowledge. He is a talented individual, able to quickly learn new technologies with ease.
      Starting out as a Symfony developer, he quickly adapted to technologies such as Angular, .NET, and Java.
      He also brings valuable input during meetings, with strong analytical skills and the ability to propose well-suited solutions.`,
    },
    {
      name: 'Fiarotiana ZAKARIVONY LALASON',
      role: 'Software Engineer | JAVA/ANGULAR Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFABvOaCHDC8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694533701156?e=1752105600&v=beta&t=F3xEXS3-KuLNW0nxh-0nK1IBp0LFOVt31pARDYyboKo',
      text: `
      I wholeheartedly recommend Diel as a Fullstack Angular and .Net developer. His commitment to quality, ability to work independently, and attention to detail make him a valuable asset to any development team.
      His passion for continuous learning and his willingness to take on new challenges are qualities that set him apart.`,
    },
  ];

  onMount(() => {
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-section',
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

<section class="min-h-screen py-20 px-4 testimonials-section bg-secondary/5">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-5xl font-display font-bold mb-16 text-center">
      Testimonials
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <div class="testimonial-card bg-primary p-8 rounded-lg shadow-lg">
          <div class="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 class="font-bold text-xl">{testimonial.name}</h3>
              <p class="text-secondary/60">{testimonial.role}</p>
            </div>
          </div>
          <p class="text-secondary/80 italic">"{testimonial.text}"</p>
        </div>
      {/each}
    </div>
  </div>
</section>
