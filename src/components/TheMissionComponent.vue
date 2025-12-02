<template>
  <div class="missionComponent" ref="missionComponent">
    <div class="leftContainer" ref="leftContainer">
      <div class="textContainer">
        <!-- <h1 class="title">The Mission</h1>-->
        <p class="title">The Mission</p>
        <h2 class="quote">
          ‘ To produce a continuous supply of local beansprouts. ’
        </h2>
        <p class="description">A sense of duty keeps us going.</p>
        <p class="description">A day-to-day routine of sow and harvest.</p>
        <p class="description">Simple yet sophisticated.</p>
      </div>
    </div>
    <div class="rightContainer" ref="rightContainer">
      <img
        src="@/assets/BarrelBeansproutswSGLogo-02.png"
        alt="BarrelBeansprouts"
        class="missionImage"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "TheMissionComponent",
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      gsap.fromTo(
        this.$refs.leftContainer.querySelectorAll(
          ".title, .quote, .description"
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
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        this.$refs.rightContainer.querySelectorAll(".missionImage"),
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
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
  },
};
</script>

<style scoped>
.missionComponent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #6a6a6a;
  height: 100vh;
  background-color: #f2f2f2;
}

.leftContainer {
  flex: 0.5;
}
.textContainer {
  margin-left: 10%;
}

.title {
  font-family: "Aloja";
  font-size: 60px;
  margin: 0;
}

.quote {
  font-size: 30px;
  margin: 30px 0;
  font-style: italic;
  font-weight: 350;
}

.description {
  font-size: 20px;
  margin: 20px 0;
}

.rightContainer {
  flex: 0.5;
  display: flex;
  justify-content: center;
}

.missionImage {
  max-width: 60%;
  height: auto;
}

@media (max-width: 1200px) {
  .title {
    font-size: 50px;
  }
  .quote {
    font-size: 22px;
  }
  .description {
    font-size: 16px;
  }
  .missionImage {
    max-width: 55%;
  }
}

@media (max-width: 992px) {
  .title {
    font-size: 45px;
  }
  .quote {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
  }
  .missionImage {
    max-width: 50%;
    height: auto;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }
  .quote {
    font-size: 18px;
  }
  .description {
    font-size: 14px;
  }
  .imageContainer {
    max-width: 100%;
  }
  .missionImage {
    max-width: 50%;
    max-height: 60vh; /* Limits the height */
    object-fit: contain;
  }
}

@media (max-width: 576px) {
  .missionComponent {
    flex-direction: column;
    text-align: center;
    /*change from vp*/
    height: 600px;
    flex: 1;
  }
  .leftContainer {
    flex: 0.5;
  }
  .rightContainer {
    flex: 0.5;
  }
  .textContainer {
    margin: 10%;
  }
  .title {
    font-size: 35px;
  }
  .quote {
    font-size: 19px;
  }
  .description {
    font-size: 14px;
  }
}
</style>
