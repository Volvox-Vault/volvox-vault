<template>
  <div id="app">
    <body>
      <h1>HEART</h1>

      <h2>contributors</h2>
      <p><a href="http://tiana.land">Tiana Dueck</a>, <a href="">Rue Yi</a>, <a href="">Jonah Grindler</a>, <a href="">Rebecca Clarke</a>, <a href="">Em Biggs</a>, 
        <a href="">Jeremy Franczyk</a>, <a href="">Romina Malta</a>, <a href="">Luisa Cruz</a>, <a href="">Mivan Makia</a>, <a href="">Joel Rodriguez</a>, <a href="">Leslie Liu</a>, <a href="">Kristoffer Tjalve</a>, <a href="">Sean Krow</a>, <a href="">Leah Maldonado</a></p>

      <h2>Shop</h2>
      <h3>Buy the Digital Verion — Print at home?</h3>
      <h3>Buy the Hand-bound Print Version + Digital (Only 50 copies)</h3>

      <h2>Put your Heart together</h2>


    </body>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "Heart",
  components: {
    MainLayout,
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
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: Arial, Helvetica, sans-serif;
}

.meta {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 250px;
  max-width: 700px;
  border-radius: 30px;
  background: rgba(219, 112, 147, 0.5);
  color: white;
  padding: 35px;
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.6);
  line-height: 2;
}
h1 {
  font-size: 25pt;
  font-family: Jugend, Arial, Helvetica, sans-serif;
}
h2 {
  font-size: 20pt;
  font-family: Jugend, Arial, Helvetica, sans-serif;
  line-height: 2;
}
p {
  font-size: 13pt;
}
a {
  color: white;
  font-weight: bold;
  text-decoration: underline;
}
a:hover {
  text-decoration: line-through;
}
hr {
  color: lightpink;
  border: none;
  border-bottom: 1.6px dashed PaleVioletRed;
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