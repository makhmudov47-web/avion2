<template>
  <section class="about">
    <div class="description">
      <h3>From a studio in London to a global brand with over 400 outlets</h3>
      <p>
        When we started Avion, the idea was simple. Make high quality furniture
        affordable and available for the mass market.
      </p>
      <p>
        Handmade, and lovingly crafted furniture and homeware is what we live,
        breathe and design so our Chelsea boutique become the hotbed for the
        London interior design community.
      </p>
      <button>Get in touch</button>
    </div>
    <div class="about-image">
      <img src="@/assets/Image.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBlock",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
}
.description {
  padding: 54px 100px 72px 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
}
h3 {
  font-family: Clash Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  width: 514px;
}

p {
  font-family: Satoshi;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  width: 536px;
}

button {
  margin-top: 170px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: 0px solid #000;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
