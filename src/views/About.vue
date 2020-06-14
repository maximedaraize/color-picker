<template>
  <div class="about">
    <section>
      <h1>About</h1>
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
    <section class="card-deck">
      <div class="card">
        <div class="author">
          <h3>Maxime Daraize</h3>
          <h4>Development</h4>
        </div>
        <div class="follow">
          <a
            href="https://github.com/maximedaraize"
            target="_blank"
            rel="noopener noreferrer"
          >Github</a>
          <a
            href="https://codepen.io/maximedaraize"
            target="_blank"
            rel="noopener noreferrer"
          >Codepen</a>
          <a
            href="https://twitter.com/maximedaraize"
            target="_blank"
            rel="noopener noreferrer"
          >Twitter</a>
        </div>
      </div>
      <div class="card">
        <div class="author">
          <h3>Érica Boudreau</h3>
          <h4>Design</h4>
        </div>
        <div class="follow">
          <a
            href="https://dribbble.com/ericaboudreau"
            target="_blank"
            rel="noopener noreferrer"
          >Dribbble</a>
          <a
            href="https://www.behance.net/ericaboudreau?tracking_source=search_users_recommended%7C%C3%A9rica%20boudreau"
            target="_blank"
            rel="noopener noreferrer"
          >Behance</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
}

h3,
h4 {
  margin-top: 0;
  margin-bottom: 4px;
}

h4 {
  font-weight: 400;
}

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

  section {
    margin-bottom: 40px;

    &.card-deck {
      display: flex;
      flex-direction: column;

      @media (min-width: 700px) {
        flex-direction: row;
      }

      .card {
        display: flex;
        flex-direction: column;
        width: 240px;
        min-height: 120px;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 10px 10px 27px #e1e1e3, -15px -15px 27px #ffffff;
        margin-bottom: 32px;
        // background: #f3f3f4;

        .follow {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: auto;

          a {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;

            font-size: 14px;
            margin-right: 16px;
          }
        }
      }
    }
  }

  a {
    color: var(--color-primary);
    font-weight: 500;
    transition: 0.2s ease-in;

    &:hover {
      color: #9eb1db;
    }
  }
}
</style>
