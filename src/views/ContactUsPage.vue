<template>
  <div class="contact-us">
    <NavBar :isScrolling="isScrolling" :whichComponent="whichComponent" />
    <div class="contact-info" ref="contactInfo">
      <div class="contact-item">
        <img :src="BeanSproutImage" alt="Chat Icon" class="icon" />
        <p>Chat with us<br />6:00 - 00:00<br />7 days a week</p>
      </div>
      <div class="contact-item">
        <img :src="BeanSproutImage" alt="Phone Icon" class="icon" />
        <p>
          Call us<br />1800 811 6453<br />Products & Orders: 06:00 - 00:00, 7
          days a week<br />Company Info & Enquiries: 10:00 - 19:00, Monday -
          Friday
        </p>
      </div>
      <div class="contact-item">
        <img :src="BeanSproutImage" alt="Store Icon" class="icon" />
        <p>Find a Store</p>
      </div>
    </div>
    <div class="contact-form-container" ref="formContainer">
      <h1>Get in touch with us now!!!</h1>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name/ Company:</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="form-group">
          <label for="products">Products interested:</label>
          <input type="text" id="products" v-model="form.products" />
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description"></textarea>
        </div>
        <div class="form-group">
          <label for="submit"></label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import NavBar from "@/components/NavBar.vue";
import BeanSproutImage from "@/assets/leaf.png";

export default {
  name: "ContactUs",
  components: {
    NavBar,
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
      BeanSproutImage,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.animateContactInfo(); // Animate contact info section when mounted
    this.animateForm(); // Animate form container when mounted
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(this.form);
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
    animateForm() {
      gsap.from(this.$refs.formContainer, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
      });
    },
    animateContactInfo() {
      gsap.from(".contact-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2, // Add stagger to animate each contact item with a delay
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.contact-us {
  background-color: #95a192;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh; /* Ensure the height of the entire page is bigger */
  padding-top: 100px; /* Bring everything lower to avoid overlap with NavBar */
}

.contact-info {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 20px;
  border: 2px solid #bfc7be;
  background-color: #e2e4e2;
  border-radius: 10px;
  padding: 20px;
}

.contact-item {
  text-align: center;
  flex: 1;
  margin: 10px;
}

.contact-item .icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.contact-form-container {
  background-color: #e2e4e2;
  padding: 20px;
  border-radius: 30px;
  width: 70%;
  text-align: center;
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
</style>
