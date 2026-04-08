<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-info">
        <h2 class="hero-title">
          The furniture brand for the future, with timeless designs
        </h2>
        <button class="hero-btn">View collection</button>
      </div>
      <p class="hero-description">
        A new era in eco friendly furniture with Avelon, the French luxury
        retail brand with nice fonts, tasteful colors and a beautiful way to
        display things digitally using modern web technologies.
      </p>
    </div>
    <div class="hero-image">
      <img src="@/assets/hero.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBlock",
};
</script>

<style scoped>
.hero {
  display: flex;
  background-color: #2a254b;
  min-height: 584px;
  margin: 0 80px;
  color: white;
}
.hero-content {
  flex: 1.5;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero-image {
  flex: 1;
  background-color: #f9f9f9;
}
.hero-image-file {
  width: 100%;
  height: 100;
  object-fit: cover;
}
.hero-title {
  font-size: 32px;
  line-height: 140%;
  margin-bottom: 20px;
}
.hero-btn {
  padding: 16px 32px;
  background: rgba(249, 249, 249, 0.15);
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.hero-btn:hover {
  background: rgba(249, 249, 249, 0.3);
}
.hero-description {
  font-size: 18px;
  line-height: 150%;
  opacity: 0.8;
}

.hero-image {
  flex: 1;
  background-color: #d9d9d9;
}
</style>
