<template>
  <h2>New ceramics</h2>
  <div class="main">
    <div class="ceramics-view">
      <div class="ceramics-item">
        <img src="@/assets/ceramics/Photo.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
      <div class="ceramics-item">
        <img src="@/assets/ceramics/Photo-2.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
      <div class="ceramics-item">
        <img src="@/assets/ceramics/Photo-3.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
      <div class="ceramics-item">
        <img src="@/assets/ceramics/Photo-4.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
    </div>
    <button>View collection</button>
  </div>
</template>

<script>
export default {
  name: "CeramicsBlock",
};
</script>

<style scoped>
h2 {
  margin-top: 122px;
  padding: 0 86px;
  font-family: Clash Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #2a254b;
}

.main {
  padding: 0 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.ceramics-view {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 32px;
}

.ceramics-item {
  display: flex;
  flex-direction: column;

  h4 {
    margin: 24px 0 8px 0;
    font-family: Clash Display;
    font-weight: 400;
    font-style: Regular;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0%;
  }

  span {
    font-family: Satoshi;
    font-weight: 400;
    font-style: Regular;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
  }

  .worthless-container {
    display: flex;
    justify-content: center;
  }
}

button {
  width: 170px;
  height: 56px;
  background-color: #f9f9f9;
  border: 0px solid #000;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 51px 0 71px 0;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}
</style>
