<template>
  <div class="whatWeDoComponent" ref="whatWeDoComponent">
    <div class="bigWords-container">
      <p class="bigWords">What We Do</p>
    </div>
    <div class="contentContainer">
      <div
        class="firstContainer"
        ref="container1"
        @mouseover="showModal(0)"
        @mouseleave="hideModal(0)"
      >
        <div class="imgContainer">
          <img style="width: 70px" src="../assets/leaf.png" alt="leaf" />
        </div>
        <p class="description">Sustainable cultivation</p>
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
        <p class="description">Locally sourced goodness</p>
      </div>
      <div
        class="thirdContainer"
        ref="container3"
        @mouseover="showModal(2)"
        @mouseleave="hideModal(2)"
      >
        <div class="imgContainer">
          <img style="width: 70px" src="../assets/leaf.png" alt="leaf" />
        </div>
        <p class="description">Nourishing natural goodness</p>
      </div>
    </div>
    <transition name="modal-fade">
      <div
        v-show="showModals[0]"
        class="modal"
        :style="{ top: modalPosition[0] }"
      >
        Modal Content 1
      </div>
    </transition>
    <transition name="modal-fade">
      <div
        v-show="showModals[1]"
        class="modal"
        :style="{ top: modalPosition[1] }"
      >
        Modal Content 2
      </div>
    </transition>
    <transition name="modal-fade">
      <div
        v-show="showModals[2]"
        class="modal"
        :style="{ top: modalPosition[2] }"
      >
        Modal Content 3
      </div>
    </transition>
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
      modalPosition: ["auto", "auto", "auto"],
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
      this.setModalPosition(index);
    },
    hideModal(index) {
      this.showModals.splice(index, 1, false);
    },
    setModalPosition(index) {
      const container = this.$refs[`container${index + 1}`];
      if (container) {
        const containerTop = container.getBoundingClientRect().bottom;
        this.$set(this.modalPosition, index, `${containerTop}px`);
      }
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
  align-items: end;
  justify-content: center;
}
.bigWords {
  justify-content: center;
  margin: 0;
  font-size: 50px;
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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  cursor: pointer;
}

.description {
  font-size: 25px;
  color: #818b7e;
  margin-top: 10px;
  text-align: center;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
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
    font-size: 45px;
  }
  .description {
    font-size: 20px;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 40px;
  }
  .description {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .bigWords {
    font-size: 35px;
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
  }
  .secondContainer {
    flex-direction: row-reverse;
  }
}
</style>
