<template>
  <MainLayout>
    <body>
      <main>
        <div>
          <div>
            <h1 class="head">How to make the most practical skirt ever.</h1>

          
            <p class="headDes">
              <em
                >With
                <a href="https://tiana.computer" target="_blank"
                  >Tiana Dueck</a
                > and <a href="https://www.instagram.com/by_wietskenutma/" target="_blank">Wietske Nutma</a>.
                </em>
            </p>

            <div class="imgBox">
              <div class="container">
                <iframe
                  src="https://www.youtube.com/embed/QOAXhm_HlH4"
                  frameborder="0"
                  allowfullscreen
                  class="video"
                ></iframe>
              </div>
            </div>


            <p>
              With the ambition to make the most practical skirt ever, Wietske and Tiana made their interpretation of the <a href="https://merchantandmills.com/eu/the-mathilde">Mathilde Skirt</a>.
              <br>
              This massive flowy gingham skirt with a comfy elastic waist and giant pockets will only add joy to your life. So try your hand at it!
              If you do, submit a photo/video to hello@volvox.observer and we'll add it to this webpage.
              <br>
              Watch their video to see how it went, and learn how you can make one for yourself!
            </p>

            

            <div class="imgBox">
              <img
                style="border-radius: 30px"
                src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/27E0C795-A1EC-4240-A2ED-C5205538E7F6.jpg?v=1692484797621"
              />
            </div>

            <br />

            <a href="https://paypal.me/ti4na" target="_blank"> Tip Jar ☕ </a>
          </div>
        </div>
      </main>
      <br />
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "skirt",
  components: {
    MainLayout,
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "How to make the most practical skirt.",
  },
};
</script>

<style scoped>
body {
  line-height: 2;
}

.HotelQ {
  color: yellowgreen;
  font-weight: bold;
}

.quote {
  font-size: 20pt;
  text-transform: uppercase;
  font-weight: bold;
  color: yellowgreen;
  border-top: 1px solid yellowgreen;
  border-bottom: 1px solid yellowgreen;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  line-height: 1.6;
  text-align: right;
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

.trevor {
  color: #593879;
}

a {
  color: yellowgreen;
  transition: 1s;
  text-decoration: underline;
}

a:hover {
  color: grey;
  text-decoration: none;
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

.firstAudio {
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  height: 30px;
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

.bandList {
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
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

    height: 100%;
  }

  .quote {
    font-size: 18pt;
  }
}

@media only screen and (max-device-width: 800px) {
  main {
    margin-top: 25px;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
  }

  .quote {
    font-size: 18pt;
  }
}
</style>