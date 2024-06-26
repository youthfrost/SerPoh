<template>
  <div>
    <NavBar
      :isScrolling="isScrolling"
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
      <div class="component" id="whatwedo">
        <WhatWeDoComponent />
      </div>
      <div class="component" id="themission">
        <TheMissionComponent />
      </div>
      <div class="component" id="didyouknow">
        <DidYouKnowComponent />
      </div>
      <div class="component" id="contactus">
        <ContactUsComponent />
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
import ContactUsComponent from "@/components/ContactUsComponent.vue";
import WhatWeDoComponent from "@/components/WhatWeDoComponent.vue";
import TheMissionComponent from "@/components/TheMissionComponent.vue";
import DidYouKnowComponent from "@/components/DidYouKnowComponent.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavBar,
    FirstComponent,
    SecondComponent,
    ContactUsComponent,
    WhatWeDoComponent,
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
    this.initScrollTrigger();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkMobile);
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
          markers: true,
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
              console.log(this.whichComponent);
            }
          },
        });
      }
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
@import url("https://fonts.cdnfonts.com/css/maharlika");

.pageDisplay {
  margin: 0;
  padding: 0;
  font-family: "Maharlika", sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
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
