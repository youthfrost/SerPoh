<template>
  <div class="events-bar">
    🎉 Order Sprouts for CNY 2026!
    <a
      href="https://form.jotform.com/260103807161042"
      target="_blank"
      rel="noopener"
      class="events-bar-link"
    >
      Click here!
    </a>
  </div>
</template>

<script>
export default {
  name: "EventsBar",
};
</script>

<style scoped>
.events-bar {
  width: 100%;
  background: #c62828;
  font-family: "Bauhaus Std", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  line-height: 40px; /* Vertically center text */
  margin: 0;
  padding: 0;         /* Remove vertical padding */
  box-sizing: border-box;
}
.events-bar-link {
  color: #ffe082;
  margin-left: 8px;
  text-decoration: underline;
  font-weight: bold;
}
</style>