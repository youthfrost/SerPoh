<template>
  <div class="secondComponent" ref="secondComponent">
    <div class="leftContainer">
      <p class="image">image</p>
    </div>
    <div class="rightContainer">
      <div class="text-container">
        <p class="bigWords">30 years of farming has instilled in us</p>
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
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: {
    inView: Boolean,
  },
  mounted() {
    if (this.inView) {
      this.playAnimation();
    } else {
      this.resetAnimation();
    }
  },
  watch: {
    inView(newVal) {
      if (newVal) {
        this.playAnimation();
      } else {
        this.resetAnimation();
      }
    },
  },
  methods: {
    playAnimation() {
      gsap.fromTo(
        this.$refs.secondComponent.querySelectorAll(".bigWords, .description"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.secondComponent,
            start: "top 75%",
          },
        }
      );
    },
    resetAnimation() {
      gsap.to(
        this.$refs.secondComponent.querySelectorAll(".bigWords, .description"),
        {
          opacity: 0,
          y: 30,
          duration: 1,
        }
      );
    },
  },
};
</script>

<style scoped>
.secondComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: row;
  height: 100vh;
  background-color: #b3c3b9;
}
.leftContainer {
  flex: 0.5;
  background-color: #b3c3b9;
}
.rightContainer {
  flex: 0.5;
  display: flex;
  align-items: center;
}
.bigWords {
  font-size: 80px;
}
.text-container {
  font-size: 25px;
  margin-bottom: 19px;
  color: white;
  flex: 0.8;
}
.description {
  margin-bottom: 20px; /* Adjust line spacing here */
}
</style>
