<template>
  <MainLayout>
     <body>
    <div class="container">
      <div class="box">
        <h2>Open Call 2024</h2>
        <p>
          <em>Dear net artists, thinkers, creatives, designers...</em>
        </p>
        <p>
          This year Volvox Observer intends to produce digital experiences with
          creatives from around the world. We're interested in experimenting
          with what artistic contemporary communication can look like. Do you
          have an idea you're passionate about that could be made into an
          interactive web experience? An essay, game, photo/video, experimental
          art...
        </p>
        <p>
          <strong
            >Email hello@volvox.observer with your pitch.<br />
            Deadline: June 1, 2024</strong
          >
        </p>
      </div>
      <div class="box">
        <h2>Pitch Guide</h2>
        <p>
          Please include your name, a working title for your idea, a summary
          of up to 300 words on your idea, your portfolio, and list your top 3
          favourite websites. Please note this is an unfunded and unpaid passion
          project.
        </p>
      </div>
    </div>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "opencall2024",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "2024 Open Call",
  },
};
</script>

<style scoped>
body {
        line-height: 1.6;
        margin: 0px;
        background-image: url("https://cdn.glitch.global/1bc078b6-0415-4e03-b37b-6732f286da4c/images.png?v=1711829203596");
        background-size: cover;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 4px;
        grid-row-gap: 4px;
        height: 100vh;
        color: #f3f9e6;
      }

      p {
        background: rgba(108, 75, 113, 0.8);
      }

      h2 {
        font-size: font-size: 30px;
      }

      .box {
        background-color: rgba(108, 75, 113, 0.8);
        padding: 20px;
        overflow: auto;
      }

      .div1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 2;
      }
      
      .title {
        text-align: center;
      }
</style>