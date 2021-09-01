<template>
  <MainLayout>
    <head>
      <title>
        Volvox Vault - An essay by Jake Fee, featured in Metamorphosis.
      </title>

      <link
        rel="shortcut icon"
        type="image/png"
        href="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content="An essay by Jake Fee, featured in Metamorphosis."
      />
      <meta name="author" content="Jake Fee" />

      <meta
        property="og:title"
        content="Volvox Vault - An essay by Jake Fee, featured in Metamorphosis."
      />
      <meta
        property="og:description"
        content="An essay by Jake Fee, featured in Metamorphosis."
      />
      <meta
        property="og:image"
        content="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271"
      />
      <meta
        property="og:url"
        content="http://volvoxvault.com/articles/2021/homeCooking/"
      />

      <meta
        property="twitter:title"
        content="Volvox Vault - Better Living Through Alchemy"
      />
      <meta
        property="twitter:description"
        content="An essay by Jake Fee, featured in Metamorphosis."
      />
      <meta
        property="twitter:image"
        content="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fjake.png?v=1627754078271"
      />
      <meta
        property="twitter:url"
        content="http://volvoxvault.com/articles/2021/homeCooking/"
      />
    </head>

    <body>
      <main>
        <div>
          <div>
            <h1 class="head">"How are you appreciating nature this summer?"</h1>

            <p class="headDes">
              Tiana asked the Volvox community "How are you appreciating nature this summer?"<br>
              Seán responded...
            </p>

            <br />
            <hr />
            <br />

            <p>
              After taking a pollinator stewardship course last year, I've been
              learning about the bees that are visiting the flowers around my
              home this year and am pausing a lot more than usual to notice
              which plants attract which kinds of bees (and other insects). This
              summer, I'll be illustrating/painting some of the species that I
              observe, and might create a mini zine or two about bees at some
              point to send to family &amp; friends. 
              <br><br>
              More broadly, I'm also learning
              to become better at listening to the land, and recognizing when I
              should stay out of the way to let other organisms &amp; processes have
              the space &amp; time to work things out on their own. Reflecting on
              how I can better support other-than-human stewardship and how the
              landscape might change over the next millennium and beyond. 
              <br><br>
              My first bee painting (from last summer):
            </p>

            <img src="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fo3v0oFW.jpg?v=1630533904588" alt="Seán holding his painting of a bumble bee hanging out on a leaf between his index and thumb."/>
            <br>
            <img src="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2F7Xaw0gu.jpeg?v=1630533851359" alt="Seán holding his painting of a bumble bee hanging out on a leaf between his index and thumb."/>

            <br />
            <hr />
            <br />

            <a href="https://write.as/hummingcrow/little-paintings-a-bumble-bee-rests-in-the-sun" target="_blank"> Seán's website. </a>
            |
            <a href="https://www.paypal.com/paypalme/ti4na" target="_blank">
              Tip Jar ☕
            </a>
          </div>
        </div>
      </main>
    </body>
  </MainLayout>
</template>


<script>
import MainLayout from "../../../../layouts/MainLayout";

export default {
  name: "ssummer",
  components: {
    MainLayout,
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

hr {
  border: none;
  border-bottom: 1px dashed grey;
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