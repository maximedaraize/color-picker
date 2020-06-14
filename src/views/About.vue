<template>
  <div class="about">
    <h1>About Tasty Colors</h1>

    <section>
      <h2>What is it</h2>
      <p>
        Tasty colors is a collection of color based on fruit. The app let you copy
        to your clipboard the hexadecimal value of the color you clicked on. More
        colors will be added to the site every weeks.
      </p>
    </section>
    <section>
      <h2>Submit a color</h2>
      <p>
        If you want to submit a color, send me a
        <a
          href="https://twitter.com/maximedaraize"
          target="_blank"
        >tweet</a>.
        Tell me which fruit and the hexadecimal value you want to see.
      </p>
    </section>
    <section>
      <h2>Creators</h2>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: grid;
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

  h1,
  section {
    grid-column-start: 1;
    grid-column-end: 3;
    @media (min-width: 560px) {
      grid-gap: 0 32px;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    @media (min-width: 950px) {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    @media (min-width: 1250px) {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    p {
      max-width: 480px;
    }
  }
}
</style>
