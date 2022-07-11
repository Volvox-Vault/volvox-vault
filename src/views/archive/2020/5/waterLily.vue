<template>
  <MainLayout>
    <body>
      <main>
        <h1 class="head">Water Lily</h1>

        <p class="headDes">A digital painting by Daniel Maluka</p>

        <p style="text-indent: 15px">
          <strong>T</strong>his illustration is based on a painting I saw once
          in passing. I was struck by the image and I knew I wanted to do my own
          version. The figure in the original painting was a white woman and I
          wanted to use an African American subject in my version. I feel as
          though figures with western features are the default subjects in the
          majority of mainstream art. My illustration is my way to combat this
          mentality of white subjects as the default. This was the major thought
          during the process of creating this illustration, I did not have any
          other themes in mind.
        </p>

        <p style="text-indent: 15px">
          <strong>I</strong>t started out a line drawing in pencil which I
          outlined with ink. Once the illustration was clean enough, I scan it
          and then transferred it to my computer. I used the linework as a guide
          while I coloured in the image. I used softer colours since that was
          the feeling the illustration gave me.
        </p>
        <br />

        <img src="./WaterLily.jpg" />
        <br />

        <a
          href="https://www.paypal.com/paypalme/danielmalukaart"
          target="_blank"
        >
          Daniel Maluka's Tip Jar ☕
        </a>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "waterLily",
  components: {
    MainLayout,
  },
};
</script>


<style scoped>
body {
  line-height: 2;
}

.head {
  text-align: center;
  font-size: 20pt;
}

.headDes {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: yellowgreen;
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
  max-width: 50%;
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
  width: 60%;
  min-width: 300px;
}

.imgBox {
  border: 1px solid;
  border-image-slice: 1;
  border-width: 1px;

  border-image-source: linear-gradient(to bottom, yellowgreen, grey);

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

.bandList {
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
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