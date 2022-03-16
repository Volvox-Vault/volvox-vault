<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">Foraging a Sculpture: Mossiah</h1>

            <p class="headDes">
              With Tiana Dueck, Sam Letnik, and Carling Bulger.
            </p>
            <hr />
            <div class="imgBox">
              <div class="container">
                <iframe
                  src="https://www.youtube.com/embed/us2Xd27d_08"
                  frameborder="0"
                  allowfullscreen
                  class="video"
                ></iframe>
              </div>
            </div>
            <p>
              We went on a winter adventure to build a sculpture with what we
              found on a hike. We bonded with nature, each other, and maybe you
              too.
            </p>

            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7072.jpg?v=1647393468318"
              />
            </div>
            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7068.jpg?v=1647393467747"
              />
            </div>
            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7086.jpg?v=1647393468651"
              />
            </div>
            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7070.jpg?v=1647393468427"
              />
            </div>
            <div class="imgBox">
              <img
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/IMG_7082.jpg?v=1647393468794"
              />
            </div>

            <br />

            <a href="https://paypal.me/ti4na" target="_blank"> Tip Jar ☕ </a>
          </div>
        </div>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "mossiah",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Mossiah",
  },
};
</script>

<style scoped>
body {
  line-height: 2;
  color: grey;
  font-family: arial, sans-serif;
}

.head {
  text-align: center;
  font-size: 20pt;
  line-height: 1.5;
}

.headDes {
  text-align: center;
  padding-top: 15px;
  color: yellowgreen;
}

p {
  font-size: 13pt;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: none;
}

a:hover {
  color: grey;
}

main {
  width: 50%;
  max-width: 600px;
  min-width: 340px;
  background-color: rgb(255, 255, 255, 0.6);
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 90px;
  padding: 40px;
  border-radius: 45px;
}

img {
  display: block;
  margin: 0 auto;
  width: 100%;
  border-radius: 30px;
}

.imgBox {
  border: 1px solid yellowgreen;
  border-image-slice: 1;
  border-width: 1px;
  border-radius: 30px;

  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

hr {
  border: none;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid yellowgreen;
}

.firstAudio {
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  height: 30px;
}

.bandList {
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

mark.mollyA {
  background-color: Moccasin;
  color: black;
}

mark.molly {
  background-color: OliveDrab;
  color: black;
}

@media (max-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
  }
}

@media only screen and (max-device-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
  }
}
</style>