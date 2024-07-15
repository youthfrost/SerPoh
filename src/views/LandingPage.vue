<template>
  <div>
    <NavBar
      :isScrolling="isScrolling || isMobile"
      :whichComponent="whichComponent"
      @update:isScrolling="isScrolling = $event"
      @update:whichComponent="whichComponent = $event"
    />
    <div class="pageDisplay">
      <div class="component" id="first">
        <FirstComponent />
      </div>
      <div class="component" id="second">
        <SecondComponent />
      </div>
      <div class="component" id="themission">
        <TheMissionComponent />
      </div>
      <div class="component" id="special">
        <WhatMakesUsSpecialComponent />
      </div>

      <div class="component" id="didyouknow">
        <DidYouKnowComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "@/components/NavBar.vue";
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";

import WhatMakesUsSpecialComponent from "@/components/WhatMakesUsSpecialComponent.vue";
import TheMissionComponent from "@/components/TheMissionComponent.vue";
import DidYouKnowComponent from "@/components/DidYouKnowComponent.vue";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavBar,
    FirstComponent,
    SecondComponent,
    WhatMakesUsSpecialComponent,
    TheMissionComponent,
    DidYouKnowComponent,
  },
  data() {
    return {
      isMobile: false,
      whichComponent: 0,
      isScrolling: false,
      shouldSnapBoolean: false,
      tops: [], // Array to store component start positions
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    window.addEventListener("scroll", this.handleScroll); // Add scroll event listener
    this.initScrollTrigger();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkMobile);
    window.removeEventListener("scroll", this.handleScroll); // Remove scroll event listener
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    initScrollTrigger() {
      if (!this.isMobile) {
        let components = Array.from(document.querySelectorAll(".component"));
        this.tops = components.map(
          (component, index) =>
            component.getBoundingClientRect().top + window.scrollY
        );

        // Add the bottom of the last component to the tops array

        let container = document.querySelector(".pageDisplay");

        ScrollTrigger.create({
          id: "snapper",
          trigger: container,
          start: "top bottom",
          markers: false,
          snap: {
            snapTo: (progress, self) => {
              if (!this.shouldSnap(progress, self)) {
                this.shouldSnapBoolean = false;
                return gsap.utils.normalize(
                  self.start,
                  self.end,
                  self.scroll()
                );
              }
              this.shouldSnapBoolean = true;
              let snapScroll = gsap.utils.snap(this.tops, self.scroll());
              let normalizedValue = gsap.utils.normalize(
                self.start,
                self.end,
                snapScroll
              );

              return normalizedValue;
            },
            duration: 0.5,
            ease: "power1.out",
          },

          onUpdate: () => {
            this.isScrolling = true;
            clearTimeout(this.scrollTimeout); // Clear previous timeout
            this.scrollTimeout = setTimeout(() => {
              this.isScrolling = false;
            }, 500);
          },
          onSnapComplete: (self) => {
            if (this.shouldSnapBoolean) {
              let snapScroll = gsap.utils.snap(this.tops, self.scroll());
              let activeComponentIndex = this.tops.findIndex(
                (start) => start === snapScroll
              );
              this.whichComponent = activeComponentIndex;
              this.isScrolling = false;
            }
          },
        });
      }
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
    shouldSnap(progress, self) {
      const nearestComponents = [null, null]; // Initialize array to store nearest component start positions
      // Find the nearest components
      this.tops.forEach((start) => {
        if (start <= self.scroll()) {
          if (!nearestComponents[0] || nearestComponents[0] < start) {
            nearestComponents[0] = start;
          }
        } else {
          if (!nearestComponents[1] || nearestComponents[1] > start) {
            nearestComponents[1] = start;
          }
        }
      });
      const thresholdLow =
        nearestComponents[0] +
        (nearestComponents[1] - nearestComponents[0]) * 0.5;
      const thresholdHigh =
        nearestComponents[0] +
        (nearestComponents[1] - nearestComponents[0]) * 0.5;

      return self.scroll() < thresholdLow || self.scroll() > thresholdHigh;
    },
  },
};
</script>

<style scoped>
.pageDisplay {
  margin: 0;
  padding: 0;
  /*font-family: "NeoGothis ADF Std", sans-serif;*/
  font-family: "Bauhaus Std", sans-serif;
  font-weight: 350;
  padding-top: 10px;
  padding-bottom: 10px;
  background: rgb(232, 212, 215);
  /* Ensure the content does not overlap the navbar */
}

.component {
  height: 100vh; /* Full viewport height */
}

@media (max-width: 576px) {
  .pageDisplay {
    margin: 0;
    padding: 0;
  }
  .component {
    height: auto; /* Change height to auto on mobile */
  }
}
</style>
