<template>
  <MainLayout>
     <body>
    <div class="container">
      <div class="box">
        <h2>Open Call 2024: BLOOM</h2>
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
        <h2>Pitch Guide</h2>
        <p>
          Please include your name, your website (or social media), a working title for your idea, a summary
          of up to 300 words on your idea, your portfolio, and list your top 3
          favourite websites. Please note this is an unfunded and unpaid passion
          project. We hope to work with you for the creative joy of it!
        </p>
         <p>
          <strong
            >Email hello@volvox.observer with your pitch.<br />
            Deadline: June 1, 2024</strong>
        </p>     
      </div>
      <div class="box">
        <h2>Blooms So Far...</h2>
        <ul>
        <li><router-link to="/latesummer">Late Summer (Film by Ryan Steel archived as a web experience)</router-link></li>
        </ul>
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
        background-image: url("https://cdn.glitch.global/1bc078b6-0415-4e03-b37b-6732f286da4c/algaebloom.png?v=1711893921767");
        background-size: cover;
        overflow: hidden;
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
        font-size: 30px;
        color: #f3f9e6;
        background: rgba(108, 75, 113, 0.8);
      }

      .box {
        background-color: rgba(108, 75, 113, 0.8);
        padding: 20px;
        height: 100%;
        overflow: auto;
      }

      @media only screen and (max-width: 600px) {
        .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 4px;
        grid-row-gap: 10px;
        height: 100%;
        background-color: rgba(108, 75, 113, 0.8);
        }

        .box {
        background-color: rgba(108, 75, 113, 0);
        height: 100%;
        overflow: hidden;
        }
      }
</style>