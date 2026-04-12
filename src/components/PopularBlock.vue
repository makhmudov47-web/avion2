<template>
  <h2>Our popular products</h2>
  <section class="popular-block">
    <div class="popular">
      <div class="popular-item">
        <img src="@/assets/popular/Large.png" alt="" />
        <h4>The Poplar suede sofa</h4>
        <span>£980</span>
      </div>
      <div class="popular-item">
        <img src="@/assets/popular/Photo.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
      <div class="popular-item">
        <img src="@/assets/popular/Photo-2.png" alt="" />
        <h4>The Dandy chair</h4>
        <span>£250</span>
      </div>
    </div>
    <button>View collection</button>
  </section>
</template>

<script>
export default {
  name: "PopularBlock",
};
</script>

<style scoped>
h2 {
  margin: 0px 80px 20px;
  font-family: Clash Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #2a254b;
}
.popular-block {
  margin: 0 80px 0px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.popular {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.popular-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  img {
    margin: 0 0 16px 0;
  }
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
}
button {
  margin-top: 51px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 43px;
}
</style>
