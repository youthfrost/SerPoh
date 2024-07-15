<template>
  <div class="whatWeDoComponent" ref="whatWeDoComponent">
    <div class="bigWords-container">
      <p class="bigWords">What makes our beansprouts special</p>
    </div>
    <div class="contentContainer">
      <div
        class="firstContainer"
        ref="container1"
        @mouseover="showModal(0)"
        @mouseleave="hideModal(0)"
      >
        <div class="imgContainer">
          <img style="width: 70px" src="../assets/water.png" alt="water" />
        </div>
        <p class="description">
          Our traditional growing method somehow preserved the natural sweetness
          in beansprouts.
        </p>
        <transition name="modal-fade">
          <div v-show="showModals[0]" class="modal">Modal Content 1</div>
        </transition>
      </div>
      <div
        class="secondContainer"
        ref="container2"
        @mouseover="showModal(1)"
        @mouseleave="hideModal(1)"
      >
        <div class="imgContainer">
          <img style="width: 70px" src="../assets/leaf.png" alt="leaf" />
        </div>
        <p class="description">
          Our retail packs are vacuum cooled and vacuum packed to enhance
          shelf-life.
        </p>
        <transition name="modal-fade">
          <div v-show="showModals[1]" class="modal">Modal Content 2</div>
        </transition>
      </div>
      <div
        class="thirdContainer"
        ref="container3"
        @mouseover="showModal(2)"
        @mouseleave="hideModal(2)"
      >
        <div class="imgContainer">
          <img style="width: 70px" src="../assets/heart.png" alt="leaf" />
        </div>
        <p class="description">
          Our soybean sprouts are more chewable which makes it friendly to
          children and elderly.
        </p>
        <transition name="modal-fade">
          <div v-show="showModals[2]" class="modal">Modal Content 3</div>
        </transition>
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
      showModals: [false, false, false],
    };
  },
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      gsap.fromTo(
        this.$refs.whatWeDoComponent.querySelectorAll(".bigWords"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.$refs.whatWeDoComponent,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        this.$refs.whatWeDoComponent.querySelectorAll(
          ".firstContainer, .secondContainer, .thirdContainer img, .description"
        ),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: this.$refs.whatWeDoComponent,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    showModal(index) {
      this.showModals.splice(index, 1, true);
    },
    hideModal(index) {
      this.showModals.splice(index, 1, false);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.whatWeDoComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background-color: #ffe9eb;
  justify-content: center;
}
.bigWords-container {
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
}
.bigWords {
  font-family: "Aloja";
  justify-content: center;
  margin: 0;
  margin-top: 100px;
  font-size: 40px;
  color: #818b7e;
}
.contentContainer {
  flex: 0.7;
  display: flex;
  justify-content: space-around;
  padding: 0 10% 10% 10%;
  align-items: center;
}

.firstContainer,
.secondContainer,
.thirdContainer {
  width: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  cursor: pointer;
  position: relative; /* Added to ensure the modal positions correctly */
}

.imgContainer {
  position: relative;
}

.description {
  font-size: 20px;
  color: #818b7e;
  margin-top: 10px;
  text-align: center;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -60px; /* Adjust this value to position the modal below the text */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 100px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}

.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

@media (max-width: 1200px) {
  .bigWords {
    font-size: 40px;
    margin-top: 100px;
  }
  .description {
    font-size: 19px;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 35px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .bigWords {
    font-size: 25px;
    padding: 30px;
  }
  .description {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .contentContainer {
    flex-direction: column;
    align-items: center;
  }

  .firstContainer,
  .secondContainer,
  .thirdContainer {
    width: 80%;
    display: flex;
    flex-direction: row;
  }
  .imgContainer {
    flex: 0.5;
    display: flex;
    justify-content: center;
  }
  .description {
    flex: 0.6;
    font-size: 14px;
  }
  .secondContainer {
    flex-direction: row-reverse;
  }
}
</style>
