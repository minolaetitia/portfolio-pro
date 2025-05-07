<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import linkedinLogo from '../../assets/images/linkedin.png';
  import whatsappLogo from '../../assets/images/whatsapp.png';
  import emailjs from 'emailjs-com';
  import contactImage from '../../assets/images/contact_page.png';

  onMount(() => {
    gsap.from('.contact-content', {
      scrollTrigger: {
        trigger: '.contact-section',
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

  // (function () {
  //   emailjs.init('YBSrUTrg93zFxMZfH');
  // })();

  // let clientName: HTMLInputElement;
  // let emailAddress: HTMLInputElement;
  // let emailMessage: HTMLTextAreaElement;

  // function sendEmail() {
  //   let params = {
  //     from_name: clientName.value,
  //     from_email: emailAddress.value,
  //     // subject: document.getElementById('email_subject')?.textContent || '',
  //     message: emailMessage.value,
  //   };

  //   console.log('params', params);

  //   emailjs.send('service_zhuor6e', 'template_g2mfc4r', params).then(
  //     function () {
  //       alert('Email sent successfully!');
  //     },
  //     function () {
  //       alert('Failed to send email.');
  //     }
  //   );
  // }
</script>

<section class="min-h-screen flex items-center py-20 px-4 contact-section">
  <div class="max-w-7xl mx-auto w-full">
    <div class="text-center mb-16 contact-content">
      <h2 class="text-5xl font-display font-bold mb-4">Let's Connect</h2>
      <p class="text-xl text-secondary/80 max-w-2xl mx-auto">
        Interested in working together? Let's discuss how we can create
        something amazing.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="contact-content">
        <img src={contactImage} alt="Contact Page" class="w-full rounded-md" />
      </div>
      <!-- <div class="contact-content">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium mb-2">Name</label
            >
            <input
              type="text"
              id="client_name"
              bind:this={clientName}
              class="w-full px-4 py-3 bg-secondary/5 rounded-lg focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label
              for="email_address"
              class="block text-sm font-medium mb-2">Email</label
            >
            <input
              type="email"
              id="email_address"
              
              bind:this={emailAddress}
              class="w-full px-4 py-3 bg-secondary/5 rounded-lg focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium mb-2"
              >Message</label
            >
            <textarea
              id="email_message"
              bind:this={emailMessage}

              rows="4"
              class="w-full px-4 py-3 bg-secondary/5 rounded-lg focus:ring-2 focus:ring-accent"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-3 px-6 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            on:click|preventDefault={sendEmail}
          >
            Send Message
          </button>
        </form>
      </div> -->
      <div class="contact-content space-y-8">
        <div>
          <h3 class="text-2xl font-bold mb-4">Contact Information</h3>
          <p class="text-secondary/80">
            <a href="mailto:ramanantsoafidel@gmail.com"
              >Email: ramanantsoafidel@gmail.com</a
            >
          </p>

          <p class="text-secondary/80">Phone: +261 34 79 414 81</p>

          <p class="text-secondary/80">Location: Antananarivo, Madagascar</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Social Links</h3>
          <div class="flex space-x-4">
            <!-- <a href="#" class="text-secondary hover:text-accent transition-colors">GitHub</a> -->
            <a
              href="https://www.linkedin.com/in/fid%C3%A8le-rabearimanana-298992176"
              class="text-secondary hover:text-accent transition-colors flex me-3"
              target="_blank"
            >
              <img src={linkedinLogo} alt="LinkedIn" class="me-2 w-6 h-6" /> Linkedin
            </a>
            <a
              href="https://wa.me/261347941481"
              target="_blank"
              class="text-secondary hover:text-accent transition-colors flex"
            >
              <img src={whatsappLogo} alt="LinkedIn" class="me-2 w-6 h-6" /> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
