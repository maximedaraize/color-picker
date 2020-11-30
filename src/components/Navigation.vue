<template>
  <div class="menu">
    <router-link to="/" class="logo">
      <span class="logo-letter">t</span>
      <span class="logo-letter">a</span>
      <span class="logo-letter">s</span>
      <span class="logo-letter">t</span>
      <span class="logo-letter">y</span>
      &nbsp;
      <span class="logo-letter">c</span>
      <span class="logo-letter">o</span>
      <span class="logo-letter">l</span>
      <span class="logo-letter">o</span>
      <span class="logo-letter">r</span>
      <span class="logo-letter">s</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amaranth&display=swap');

.menu {
  margin-top: 64px;
  margin-bottom: 64px;
  display: grid;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 64px);
  grid-gap: 0 16px;
  grid-template-columns: repeat(2, 160px);

  @media (min-width: 560px) {
    grid-gap: 0 32px;
    grid-template-columns: repeat(2, 240px);
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 240px);
  }

  @media (min-width: 1250px) {
    grid-template-columns: repeat(4, 240px);
  }
}

.menu a {
  font-weight: 500;
  color: var(--color-primary);
  margin-left: auto;
  font-size: 16px;
}

.menu > .logo {
  font-family: 'Amaranth', sans-serif;
  margin-right: auto;
  margin-left: 0;
  font-size: 40px;
  font-weight: 500;
  padding-left: 0;

  @media (min-width: 560px) {
    grid-gap: 0 32px;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  @media (min-width: 950px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (min-width: 1250px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}

.logo > span {
  background-size: 200% auto;
  transition: 0.3s linear;
  &:hover {
    background-position: right center;
  }
}

.logo-letter {
  color: var(--color-primary);

  &:nth-child(1) {
    &:hover {
      background-image: linear-gradient(
        -225deg,
        #a445b2 0%,
        #d41872 52%,
        #ff0066 100%
      );
    }
  }
  &:nth-child(2) {
    &:hover {
      background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
    }
  }
  &:nth-child(3) {
    &:hover {
      background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
    }
  }
  &:nth-child(4) {
    &:hover {
      background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);
    }
  }
  &:nth-child(5) {
    &:hover {
      background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);
    }
  }
  &:nth-child(6) {
    &:hover {
      background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    }
  }
  &:nth-child(7) {
    &:hover {
      background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
    }
  }
  &:nth-child(8) {
    &:hover {
      background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    }
  }
  &:nth-child(9) {
    &:hover {
      background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
    }
  }
  &:nth-child(10) {
    &:hover {
      background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
    }
  }
  &:nth-child(11) {
    &:hover {
      background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);
    }
  }
  &:hover {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
