<template>
  <div id="app">
    <body>
      <h1>heart</h1>

<hr>
      <h2>Shop</h2>
      <h3>
        <a href="https://square.link/u/PjrmPfus" target="_blank"
          >Buy the Hand-bound Print Version + Digital (Only 50 copies)</a
        >
      </h3>
      <h3>
        <a href="https://square.link/u/iUH9bsim" target="_blank"
          >Buy the Digital Verion</a> — <a href="#heartathome">Print at home?</a>
      </h3>

<hr>

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
        Rodriguez, <a href="">Leslie Liu</a>, <a href="">Kristoffer Tjalve</a>,
        <a href="">Sean Krow</a>, <a href="">Leah Maldonado</a>
      </p>

<hr>

      <h2 id="heartathome">heart @ home</h2>
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
  font-size: 85pt;
  font-family: Jugend, Arial, Helvetica, sans-serif;
  color: grey;
  font-weight: normal;
  text-align: center;
  line-height: 1;
}
h2 {
  font-size: 30pt;
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
video,
iframe {
  border-radius: 30px;
  box-shadow: 0 5px 10px rgb(215 189 226 / 0.5);
}
</style>