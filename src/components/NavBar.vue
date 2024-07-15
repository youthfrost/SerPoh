<template>
  <div :class="['navbar', { scrolling: isScrolling }]">
    <nav class="nav">
      <ul>
        <li>
          <button
            class="nav-button"
            :style="{ color: textColor }"
            @click="navigateTo('landing', 0)"
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            Home
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </button>
        </li>
        <li>
          <button
            class="nav-button"
            :style="{ color: textColor }"
            @click="navigateTo('ourproducts', 1)"
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            Shop
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </button>
        </li>
        <li>
          <button
            class="nav-button"
            :style="{ color: textColor }"
            @click="navigateTo('contactus', 6)"
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            Contact Us
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "NavBar",
  props: {
    isScrolling: {
      type: Boolean,
      default: false,
    },
    whichComponent: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    textColor() {
      if (this.isScrolling) {
        return "white";
      }
      switch (this.whichComponent) {
        case 0:
          return "white";
        case 1:
          return "#818b7e";
        case 2:
          return "#818b7e";
        case 3:
          return "#818b7e";
        case 4:
          return "white";
        default:
          return "white"; // Default color
      }
    },
  },
  methods: {
    navigateTo(sectionId, index) {
      // Emit different events based on the button clicked
      switch (sectionId) {
        case "landing":
          if (this.$route.path === "/") {
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 500);
          } else {
            // Route to the landing page
            this.$router.push("/");
            // Emit events for scrolling and component update
            this.$emit("update:isScrolling", true);
            this.$emit("update:whichComponent", 0);
          }
          break;
        case "ourproducts":
          // Route to the OurProducts page
          this.$router.push("/OurProducts");
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case "contactus":
          this.$router.push("/ContactUs"); // Do something else for the Contact Us button if needed
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        default:
          break;
      }
    },
    animateUnderline(event, isEntering) {
      const underline = event.currentTarget.querySelector(".underline");
      if (isEntering) {
        gsap.to(underline, {
          duration: 0.3,
          scaleX: 1,
          transformOrigin: "left",
          opacity: 1,
        });
      } else {
        gsap.to(underline, {
          duration: 0.3,
          scaleX: 0,
          transformOrigin: "right",
          opacity: 0,
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent; /* Slightly transparent background */
  z-index: 1001;
  display: flex;
  height: 50px;
  align-items: center;
  transition: background-color 0.3s ease;
  pointer-events: auto;
}

.navbar.scrolling {
  background-color: rgba(124, 133, 121, 0.5);
}

nav {
  display: flex;
  flex: 0.25;
  min-width: 300px;
}

ul {
  list-style: none;
  flex: 1;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 10px 0;
  justify-content: space-evenly;
}

li {
  margin: 0;
}

button {
  background: none;
  border: none;
  font-family: "Maharlika", sans-serif;
  font-size: 16px;
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative; /* Relative positioning for the button */
}

.nav-button {
  position: relative;
  overflow: hidden; /* Add overflow hidden to hide the part of the underline that goes outside the button */
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* Height of the underline */
  width: 100%;
  opacity: 0; /* Initially hidden */
  transform: scaleX(0); /* Initially scaled to 0 width */
  transform-origin: left; /* Set the transform origin to the left edge */
}

@media (max-width: 576px) {
  .navbar {
    justify-content: center;
  }
  nav {
    display: flex;
    flex: 0.7;
  }
}
</style>
