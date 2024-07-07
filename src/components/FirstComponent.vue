<template>
  <div class="firstComponent" ref="firstComponent">
    <div class="leftContainer" ref="leftContainer">
      <div class="container">
        <p>logo</p>
        <p class="bigWords">Farming Beansprouts Since 1992</p>
        <p class="description">
          Discover the Power of Fresh, Nutritious Bean Sprouts
        </p>
        <button class="shopButton" @click="link">Shop</button>
      </div>
    </div>
    <div class="rightContainer" ref="rightContainer">
      <p><img src="@/assets/leaf.png" alt="Leaf" class="leafImage" /></p>
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
    link() {
      this.$router.push({ name: "OurProducts" });
    },
    playAnimation() {
      gsap.fromTo(
        this.$refs.leftContainer.querySelectorAll(
          ".bigWords, .description, .shopButton"
        ),
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

      gsap.fromTo(
        this.$refs.rightContainer.querySelectorAll("p"),
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

.firstComponent {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.leftContainer {
  background-color: #95a192;
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rightContainer {
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.container {
  text-align: center;
  margin: 20%;
}

.leafImage {
  height: 100%;
  object-fit: cover;
}

.shopButton {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 18px 90px;
  border: none;
  border-radius: 0px;
  font-size: 1.1em;
  cursor: pointer;
  font-family: "Maharlika", sans-serif;
}

.shopButton:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.bigWords {
  font-size: 65px;
  margin-bottom: 0;
  color: white;
}

.description {
  font-size: 22px;
  margin-bottom: 19px;
  color: white;
}

@media (max-width: 1200px) {
  .bigWords {
    font-size: 60px;
  }
  .description {
    font-size: 22px;
  }
  .shopButton {
    font-size: 1em;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 50px;
  }
  .description {
    font-size: 20px;
  }
  .shopButton {
    font-size: 0.9em;
    padding: 15px 75px;
  }
}

@media (max-width: 768px) {
  .bigWords {
    font-size: 40px;
  }
  .description {
    font-size: 18px;
  }
  .shopButton {
    font-size: 0.8em;
    padding: 12px 60px;
  }
}

@media (max-width: 576px) {
  .firstComponent {
    flex-direction: column;
    height: 140vh;
  }
  .leftContainer {
    flex: 0.66;
  }
  .rightContainer {
    flex: 0.33;
  }

  .bigWords {
    font-size: 60px;
  }
  .description {
    font-size: 20px;
  }
  .shopButton {
    font-size: 1em;
    padding: 10px 50px;
  }
}
</style>
