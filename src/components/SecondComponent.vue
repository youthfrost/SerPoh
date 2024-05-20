<template>
  <div class="secondComponent">
    <div class="leftContainer">
      <p>image</p>
    </div>
    <div class="rightContainer">
      <div class="text-container">
        <p id="bigWords">30 years of farming has instilled in us</p>
        <p>
          We believe that science and nature can work together to create
          effective and healthy skin care products. Our products are formulated
          with high-quality ingredients that are backed by scientific research.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
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
#bigWords {
  font-size: 50px;
}

.text-container {
  font-size: 25px;
  margin-bottom: 19px;
  color: white;
  flex: 0.8;
}
</style>
