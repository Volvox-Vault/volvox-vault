<template>
  <div id="app">
    <body>
      <h1 style="padding-bottom: 20px">heart</h1>

      <hr />

      <p style="text-align: center;">
        <router-link to="/">Volvox Vault's</router-link> 5th issue, 60 hand-bound pages inspired by love,
        friendship, and empathy.<br />
        <u>FROM THE BOTTOM OF OUR HEARTS</u>
      </p>

      <hr />
      <div>
        <img
          src="https://checkout.square.site/uploads/1/3/2/9/132988872/s759346569985731411_p17_i2_w828.jpeg"
          style="
            float: right;
            width: 20%;
            margin: 20px;
            margin-left: 40px;
            margin-right: 0px;
            border-radius: 50px;
          "
        />
        <h2>Shop</h2>
        <h3>
          <a href="https://square.link/u/PjrmPfus" target="_blank"
            >Buy the Hand-bound Print Version (only 50 copies) + Digital &#8674;</a
          >
        </h3>
        <h3>
          <a href="https://square.link/u/iUH9bsim" target="_blank"
            >Buy the Digital Version &#8674;</a
          > — <a href="#heartathome">Print + bind at home?</a>
        </h3>
      </div>

      <hr />

      <h2>contributors</h2>
      <p>
        <a href="http://tiana.land">Tiana Dueck</a>,
        <a href="https://www.are.na/rue-yi">Rue Yi</a>,
        <a href="https://grindler.design/">Jonah Grindler</a>,
        <a href="https://www.instagram.com/_becca_clarke/">Rebecca Clarke</a>,
        <a href="https://www.instagram.com/themoon.thestars.andem/">Em Biggs</a
        >,
        <a href="https://www.instagram.com/jeremyfranczyk/">Jeremy Franczyk</a>,
        <a href="https://www.door.link/">Romina Malta</a>,
        <a href="https://www.instagram.com/lupsc/">Luísa Cruz</a>,
        <a href="https://www.instagram.com/mivsmak/">Mivan Makia</a>, Joel
        Rodriguez,
        <a href="https://yardonthirdstreet.neocities.org/">Leslie Liu</a>,
        <a
          href="https://kristoffer.substack.com/subscribe?utm_source=substack&utm_medium=email&utm_content=postcta"
          >Kristoffer Tjalve</a
        >, <a href="">Ana Santl</a>
        <a href="https://write.as/hummingcrow/">Sean Krow</a>,
        <a href="https://leahmaldonado.com/">Leah Maldonado</a> — Special Thanks
        <a href="https://www.cuffgod.com/home">Samuel Letnik</a>,
        <a href="https://www.instagram.com/gardenvarietea/">Carling Bulger</a>, +
        <a href="https://youtu.be/klXDUvGtMMI">Spirit Josh</a>.
      </p>

      <hr />

      <h2 id="heartathome">heart @ home</h2>
      
      <div class="container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/kR-7Lset4_A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      </div>
      <p><a href="https://i.pinimg.com/originals/5f/86/7d/5f867d8704ba32bc55b818217db93417.jpg">heart origami</a></p>

      <hr />

      <h2>excerpts</h2>

      <img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/HEART%20EXCERPTS0.jpg?v=1646365151380"
        style="width: 100%; border-radius: 50px;"
      />
      <p style="text-align: center">table of contents</p>
      <br>
      <img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/HEART%20EXCERPTS1.jpg?v=1646365150773"
        style="width: 100%; border-radius: 50px;"
      />
      <p style="text-align: center">
        jonah grinder to tiana dueck in <i>heartfelt letters</i>
      </p>
      <br>
      <img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/HEART%20EXCERPTS2.jpg?v=1646365151032"
        style="width: 100%; border-radius: 50px;"
      />
      <p style="text-align: center">
        kristoffer tjalve and ana santl in <i>uno</i>
      </p>
      <br>
      <img
        src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/HEART%20EXCERPTS3.jpg?v=1646365151558"
        style="width: 100%; border-radius: 50px;"
      />
      <p style="text-align: center">
        leah maldonado (red) and tiana dueck (green) in
        <i>figma dinner party</i>
      </p>
      <br>

      <p style="text-align: center">and so much more...</p>
    </body>
  </div>
</template>

<script>
export default {
  name: "Heart",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "HEART",
  },
};
</script>

<style scoped>
@font-face {
  font-family: Jugend;
  src: url(/Jugend-2021.otf);
}

body {
  background: radial-gradient(closest-side, white, ivory);
  padding: 60px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2;
  color: grey;
}
h1 {
  font-size: 100pt;
  font-family: Jugend, Arial, Helvetica, sans-serif;
  color: grey;
  font-weight: normal;
  text-align: center;
  line-height: 1;
}
h2 {
  font-size: 35pt;
  font-family: Jugend, Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: grey;
}
h3 {
  font-size: 20pt;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: grey;
}
p {
  font-size: 13pt;
}
img {
  border: 1px dotted PaleVioletRed;
}
a {
  color: PaleVioletRed;
  text-decoration: underline;
}
a:hover {
  text-decoration: line-through;
}
hr {
  border: none;
  border-bottom: 1px dotted PaleVioletRed;
  margin-top: 20px;
  margin-bottom: 20px;
}
.buy {
  text-align: center;
  background-color: lightpink;
  width: 100%;
  border-collapse: collapse;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(255 255 255 / 0.5);
}
td {
  padding: 20px;
}

iframe {
  border-radius: 40px;
  box-shadow: 0 5px 10px rgb(215 189 226 / 0.5);
  border: 1px dotted PaleVioletRed;
}

.video {
    width: 360px;
    height: 640px;
}

 @media only screen and (max-width: 500px) {
 
 h1 {
   font-size: 90%;
 }

 .container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
 
 }
</style>