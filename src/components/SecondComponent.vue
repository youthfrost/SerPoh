<template>
  <div class="secondComponent" ref="secondComponent">
    <div class="leftContainer">
      <p class="image">image</p>
    </div>
    <div class="rightContainer">
      <div class="text-container">
        <div class="bigWords-container">
          <p class="bigWords">30 years of farming has instilled in us</p>
        </div>
        <div class="description-container">
          <p class="description line1">
            The value of basics; quality and affordable beansprouts is of top
            priority.
          </p>
          <p class="description line2">
            The need for technology adoption and adaption; engineering can work
            wonders.
          </p>
          <p class="description line3">
            The beauty of open-mindedness; beansprouts reimagined.
          </p>
          <p class="description line4">
            The fruit of perseverance; so stay calm and sow on.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      animation: null,
    };
  },
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      this.animation = gsap.fromTo(
        this.$refs.secondComponent.querySelectorAll(".bigWords, .description"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.secondComponent,
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
.secondComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: row;
  height: 100vh;
  background-color: #e8e4e4;
}
.leftContainer {
  flex: 0.5;
  background-color: #e8e4e4;
}
.rightContainer {
  flex: 0.5;
  display: flex;
}
.text-container {
  font-size: 20px;
  color: #818b7e;
  display: flex;
  flex-direction: column;
}
.bigWords-container {
  flex: 0.4;
  display: flex;
  align-items: end;
}
.bigWords {
  margin: 0;
  font-size: 65px;
  font-family: "Maharlika", sans-serif; /* Apply Maharlika font */
}
.description-container {
  flex: 0.6;
}
.description {
  margin-bottom: 30px; /* Adjust line spacing here */
  font-family: "Maharlika", sans-serif; /* Apply Maharlika font */
}

@media (max-width: 1200px) {
  .bigWords {
    font-size: 55px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 45px;
  }
  .description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .secondComponent {
    flex-direction: column;
  }
  .rightContainer {
    align-items: center;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
  }
  .text-container {
    flex: 1;
  }
  .bigWords {
    font-size: 35px;
  }
  .description {
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .bigWords {
    font-size: 25px;
  }
  .description {
    font-size: 12px;
  }
}
</style>
