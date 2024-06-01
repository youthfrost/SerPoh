<template>
  <div class="didYouKnowComponent" ref="didYouKnowComponent">
    <div class="bigWords-container">
      <p class="bigWords">Did you know?</p>
    </div>
    <div class="contentContainer">
      <div class="factContainer">
        <hr />
        <p class="description">
          Beansprouts do not grow on cotton wool, not in soil nor in water.
        </p>
      </div>
      <div class="factContainer">
        <hr />
        <p class="description">
          Beansprouts are rich in Vitamin C and antioxidants, boosting your
          immune system naturally.
        </p>
      </div>
      <div class="factContainer">
        <hr />
        <p class="description">
          Eating beansprouts can aid digestion due to their high fiber content,
          promoting a healthy gut.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.didYouKnowComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background-color: #333333;
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
  color: #ffffff;
}
.contentContainer {
  flex: 0.7;
  display: flex;
  justify-content: space-around;
  padding: 0 10% 10% 10%;
}
.factContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 0.3;
  text-align: center;
}
.description {
  font-size: 20px;
  color: #ffffff;
  margin-top: 10px;
  text-align: center;
}
hr {
  width: 50px;
  border: 1px solid #ffffff;
  margin-bottom: 10px;
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
}

@media (max-width: 576px) {
  .bigWords {
    font-size: 30px;
  }
  .description {
    font-size: 12px;
  }
  .contentContainer {
    flex-direction: column;
    align-items: center;
  }
  .factContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
