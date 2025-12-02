<template>
  <div class="contact-us">
    <NavBar :isScrolling="isScrolling" :whichComponent="whichComponent" />

    <div class="contact-info" ref="contactInfo">
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10960.379072649743!2d103.72753725042381!3d1.3997609386678358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f001c03d241%3A0xf686aacccb3e37da!2sSer%20Poh%20Farming%20and%20Trading%20Enterprise%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1719127612106!5m2!1sen!2ssg"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="contact-info-details">
        <div class="contact-item">
          <img :src="PhoneImage" alt="Phone Icon" class="icon" />
          <div class="contact-text">
            <h3>Call Us</h3>
            <p>
              84119929<br />
              admin@serpoh.com.sg
              <br />
              <span></span>Monday - Saturday, 09:00 - 17:00 <br />
            </p>
          </div>
        </div>
        <div class="contact-item">
          <img :src="LocationImage" alt="Location Icon" class="icon" />
          <div class="contact-text">
            <h3>Find Us</h3>
            <p>
              3 Sungei Tengah Close, Singapore 699885<br />
              <span>Monday - Friday, 09:00 - 17:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-form-container" ref="contactFormContainer">
      <iframe
        id="JotFormIFrame-250242317554047"
        title="Serpoh Enquiry"
        
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/serpoh1992/serpoh-enquiry"
        frameborder="0"
        style="min-width: 100%; max-width: 100%; height: 539px; border: none"
        scrolling="no"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import NavBar from "@/components/NavBar.vue";
import LocationImage from "@/assets/location.png";
import PhoneImage from "@/assets/phone.png";
import { useHead } from '@vueuse/head'

export default {
  name: "ContactUs",
  components: {
    NavBar,
  },
  setup() {
    useHead({
      title: 'Contact Us | Ser Poh Farming',
      meta: [
        {
          name: 'description',
          content: 'Contact Ser Poh Farming in Singapore for fresh beansprouts and sprouts. Find our location, phone, and enquiry form here.'
        }
      ]
    });
    // ...other setup logic if needed...
    return {};
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        products: "",
        description: "",
      },
      isScrolling: false,
      whichComponent: 6,
      PhoneImage,
      LocationImage,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.animateContactInfo(); // Animate contact info section when mounted
    this.animateForm(); // Animate form container when mounted

    // Load the JotForm script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-250242317554047']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    submitForm() {
      console.log("form submitted");
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
    animateForm() {
      gsap.from(this.$refs.contactFormContainer, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      });
    },
    animateContactInfo() {
      gsap.from(this.$refs.contactInfo, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".map", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.contact-us {
  font-family: "Bauhaus Std", sans-serif;
  font-weight: 350;
  background-color: #b8beb5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh; /* Ensure the height of the entire page is bigger */
  padding-top: 100px; /* Bring everything lower to avoid overlap with NavBar */
  padding-bottom: 100px;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 20px;
  background-color: #e2e4e2;
  border-radius: 10px;
  padding: 20px;
  flex-direction: row;
}

.map {
  flex: 0.5;
}

.contact-info-details {
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-item {
  align-items: center;
  margin: 10px 0;
  text-align: center;
}

.contact-item .icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.contact-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-text h3 {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}

.contact-text p {
  margin: 5px 0 0;
  color: #555;
}

.contact-form-container {
  padding: 20px;
  border-radius: 30px;
  width: 80%;
  text-align: center;
  color: rgb(92, 99, 94);
}

.contact-form h1 {
  margin-bottom: 20px;
  color: #95a192;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  row-gap: 10px;
}

.form-group {
  display: contents;
}

.contact-form label {
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%; /* Set initial width to 100% */
  min-width: 100%; /* Ensure minimum width is 100% */
  max-width: 100%; /* Ensure maximum width is 100% */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Ensure padding is included in the width calculation */
  min-height: 50px;
  resize: vertical;
}

.contact-form textarea {
  min-height: 100px;
}

.contact-form button {
  width: 30%; /* Adjust width to fit content */
  padding: 5px 15px; /* Adjust padding for smaller button */
  border-radius: 5px; /* Apply rounded border */
  font-size: 14px; /* Adjust font size */
  align-self: flex-start; /* Align button with input boxes */
  margin-top: 10px; /* Add some margin to separate button from inputs */
}

.contact-form button:hover {
  background-color: #ced0ce;
}

.contact-form-container iframe {
  background-color: #fff; /* Set background color to white for seamless integration */
  border: none; /* Remove border for a cleaner look */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
  border-radius: 10px; /* Add rounded corners to match the form container */
}

/* High-contrast mode support */
@media (forced-colors: active) {
  body {
    background-color: Canvas;
    color: CanvasText;
  }

  a {
    color: LinkText;
  }

  button {
    background-color: ButtonFace;
    color: ButtonText;
    border: 1px solid ButtonText;
  }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .contact-form-container iframe {
    height: 600px; /* Adjust height for smaller screens */
    width: 100%;
  }
  .map iframe {
    width: 100%;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .contact-form-container iframe {
    height: 600px; /* Adjust height for smaller screens */
    width: 100%;
  }
  .contact-info {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  .map iframe {
    width: 100%;
    height: 300px;
  }
  .contact-form {
    grid-template-columns: 1fr;
  }
  .contact-form label {
    text-align: left;
  }
  .contact-form button {
    width: 100%;
  }
  .contact-form input,
  .contact-form textarea {
    max-width: calc(100% - 20px); /* Ensure it fits within the container */
  }
}

@media (max-width: 576px) {
  .contact-form-container {
    width: 100%;
    padding: 10px;
  }
  .contact-form h1 {
    font-size: 24px;
  }
  .contact-form input,
  .contact-form textarea {
    max-width: 100%; /* Ensure it fits within the container */
  }
  .contact-form label {
    padding-right: 0;
  }
}
</style>
