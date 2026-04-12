<template>
  <section class="main">
    <div class="main-block">
      <h2>Join the club and get the benefits</h2>
      <p>
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <div class="place">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
        />
        <button>Sign up</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReceptionBlock",
};
</script>

<style scoped>
.main {
  background-color: #f9f9f9;
  padding: 51px 93px;
}

.main-block {
  padding: 64px 0 54px 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
}

p {
  font-family: Satoshi;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  width: 400px;
}

h2 {
  font-family: Clash Display;
  font-weight: 400;
  font-style: Regular;
  font-size: 36px;
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
}

.place {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 354px;
  height: 56px;
  background-color: #f9f9f9;
  border: 0px solid #000;
  padding-left: 32px;
  color: #764ba2;
  font-family: Satoshi;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 118px;
  padding: 28px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: 0px solid #000;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>
