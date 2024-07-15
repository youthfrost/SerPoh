<template>
  <div class="didYouKnowComponent" ref="didYouKnowComponent">
    <div class="bigWords-container">
      <p class="bigWords">Rediscover TAUGE</p>
    </div>
    <div class="contentContainer">
      <div class="factContainer">
        <div class="lineContainer">
          <hr />
        </div>
        <p class="description">
          Beansprouts do not require any growing medium. They do not require
          light. They can be harvested in 4-5 days.
        </p>
      </div>
      <div class="factContainer">
        <div class="lineContainer">
          <hr />
        </div>
        <p class="description">
          Every part of a beansprout is edible including its husk.
        </p>
      </div>
      <div class="factContainer">
        <div class="lineContainer">
          <hr />
        </div>
        <p class="description">
          Beansprouts are rich in Vitamin C and antioxidants, boosting your
          immune system naturally. Eating beansprouts can aid digestion due to
          their high fiber content, promoting a healthy gut.
        </p>
      </div>
    </div>

    <!-- Contact Us and Social Media Section -->
    <div class="contact-bar">
      <hr class="horizontal-line" />
      <div class="contact-social-container">
        <button @click="redirectToContactUs" class="contact-button">
          Contact Us Now!!!
        </button>
        <div class="social-container">
          <p class="follow-us">Follow us on social media</p>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a href="https://www.instagram.com" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      gsap.fromTo(
        this.$refs.didYouKnowComponent.querySelectorAll(".bigWords"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.$refs.didYouKnowComponent,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        this.$refs.didYouKnowComponent.querySelectorAll(
          ".factContainer hr, .description"
        ),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.$refs.didYouKnowComponent,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    redirectToContactUs() {
      this.$router.push("/ContactUs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.didYouKnowComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #333333, #111111);
  color: #ffffff;
  justify-content: center;
}

.bigWords-container {
  flex: 0.3;
  display: flex;
  align-items: end;
  justify-content: center;
}

.bigWords {
  margin: 0;
  font-size: 50px;
  font-family: "Brusher", sans-serif;
  color: #ffffff;
  text-shadow: 2px 2px 4px #000000;
}

.contentContainer {
  flex: 0.6;
  display: flex;
  justify-content: space-around;
  padding: 0 10% 10% 10%;
}

.factContainer {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  flex: 0.3;
}

.description {
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
}

.lineContainer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

hr {
  width: 50px;
  border: 1px solid #ffffff;
  margin: 0;
  margin-bottom: 10px;
}

.contact-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.horizontal-line {
  width: 80%;
  border: 1px solid #ffffff;
}

.contact-social-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-button {
  padding: 10px 30px;
  background-color: #66ef76;
  color: #333333;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
}

.contact-button:hover {
  background-color: #ffaa00;
  transform: scale(1.05);
}

.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.follow-us {
  font-size: 18px;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.social-icons a {
  color: #ffffff;
  font-size: 24px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #cccccc;
}

@media (max-width: 1200px) {
  .bigWords {
    font-size: 45px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 40px;
  }
  .description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .bigWords {
    font-size: 35px;
  }
  .description {
    font-size: 14px;
  }

  .contentContainer {
    flex-direction: column;
    align-items: center;
  }

  .factContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .description,
  hr {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 576px) {
  .bigWords {
    font-size: 30px;
  }
  .description {
    font-size: 12px;
  }

  .contact-social-container {
    flex-direction: column;
  }

  .social-container {
    align-items: center;
  }
  .factContainer {
    text-align: center;
  }
}
</style>
