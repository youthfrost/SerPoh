<template>
  <div class="secondComponent" ref="secondComponent">
    <div class="leftContainer" ref="leftContainer">
      <img
        src="@/assets/BeansproutBowl_greenBorder.png"
        alt="barrel"
        class="leafImage"
      />
    </div>
    <div class="rightContainer" ref="rightContainer">
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
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      // Animation for the left container (leaf image)
      gsap.fromTo(
        this.$refs.leftContainer.querySelectorAll(".leafImage"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.leftContainer,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Animation for the right container (text)
      gsap.fromTo(
        this.$refs.rightContainer.querySelectorAll(".bigWords, .description"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.rightContainer,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
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
  height: 80vh;
  background-color: #e8e4e4;
}
.leftContainer {
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e4e4;
}
.leafImage {
  max-width: 70%;
}
.rightContainer {
  flex: 0.5;
  display: flex;
  align-items: center;
  padding: 20px;
}
.text-container {
  font-size: 20px;
  color: #818b7e;
  display: flex;
  flex-direction: column;
}
.bigWords-container {
  margin-bottom: 20px;
}
.bigWords {
  margin: 0;
  font-size: 65px;
}
.description-container {
  flex: 1;
}
.description {
  margin-bottom: 15px;
  line-height: 1.5;
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
    /*changed from 90vh*/
    height: 600px;
  }
  .leftContainer {
    justify-content: center;
    align-items: center;
    height: 30%;
    flex: 0.3;
  }
  .rightContainer {
    align-items: flex-start;
    text-align: center;
    margin: 0 8%;
    flex: 0.7;
  }

  .bigWords-container {
    margin-bottom: 10px;
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
  .leafImage {
    max-height: 70%;
  }
}

@media (max-width: 576px) {
  .bigWords {
    font-size: 30px;
  }
  .description {
    font-size: 15px;
  }
  .leafImage {
    max-width: 60%;
  }
}
</style>
