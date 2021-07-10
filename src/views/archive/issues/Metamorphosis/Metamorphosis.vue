<template>
  <MainLayout>
    <body>
      <main>
        <div class="meta">
          <h1>Metamorphosis</h1>
          <br />
          <table class="buy">
            <tr>
              <td><a href="https://www.blurb.ca/b/10779132-metamorphosis">Buy the book.</a></td>
              <td><a href="https://checkout.square.site/merchant/VP8DEG0CP9DTF/checkout/ZIZCUOION452OBJHAA6YNUE3">Buy the pdf.</a></td>
            </tr>
          </table>

          <hr />

          <iframe width="100%" height="355" src="https://www.youtube.com/embed/z4W8Esxp1S0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>
          <p>
            Metamorphosis is a collection of creative projects from various
            artists, presented by Volvox Vault, ruminating on transformation,
            growth, and change. Over the three phases, from larva, to pupa, to
            butterfly; discover reflections, workshops, interviews, visual art,
            and more that may inspire a shift in your life.
          </p>
          <p style="text-align: right;" ><a href="https://checkout.square.site/buy/LMHV2EEIN2PVH6FFK3KU4W2L">Buy the bag!</a></p>

    
          <img
            src="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fbagsm.jpg?v=1625879209143"
            width="100%"
            style="display: block; margin: 0 auto; padding-top: 20px;"
          />
       
          <hr />
          <p>
            <i
              >Featuring <a href="https://tiana.computer/">Tiana Dueck</a>,
              <a>Rue Yi</a>, <a href="https://e-worm.club/">e-worm.club</a>,
              <a href="https://fee.cool/">Jake Fee</a>, Ada Bierling,
              <a href="https://www.beatricedouaihy.com/">Beatrice Douaihy</a>,
              Shannon Kennedy,
              <a href="https://khalilstemmler.com/">Khalil Stemmler</a>,
              <a href="https://www.henryholtgeerts.com/">Henry Holtgeerts</a>,
              <a href="https://www.instagram.com/kay.esser/">Kayla Esser</a>,
              <a href="https://www.instagram.com/_becca_clarke/"
                >Rebecca Clarke</a
              >,
              <a href="https://www.instagram.com/_adrianpop/">Adrian Pop</a></i
            >.
          </p>

          <hr />
          <h2>Table of Contents</h2>
          <p>
            <i><b>Phase I - Larva: Origin stories.</b></i
            ><br />
            The Spirituality of Algae ~ Tiana Dueck<br />
            The Proto-NFT: Unconverted Neopets ~ Rue Yi<br />
            <a href="https://e-worm.club/">e-worm.club</a><br />
            Better Living Through Alchemy ~ Jake Fee<br />
            <i><b>Phase II - Pupa: Odes to transitional periods.</b></i
            ><br />
            Muddy Waters ~ Ada Bierling<br />
            The Hunt for Online StyleGANs ~ Bea Douaihy<br />
            Growth ~ Shannon Kennedy<br />
            Existential State Machines ~ Khalil Stemmler<br />
            <i><b>Phase III - Butterfly: Various epilogues.</b></i
            ><br />
            Floral Memory ~ Henry Holtgeerts<br />
            Sew On and Sew Forth ~ Kayla Esser<br />
            Bland Sushi ~ Rebecca Clarke<br />
            Leslie Spit ~ Adrian Pop<br />
            Electric Canopy ~ Henry Holtgeerts<br />
          </p>
          <hr />
          <h2>Leslie Spit</h2>
          <p>Adrian Pop | Page 96</p>
          <br />
          <video
            width="100%"
            height="100%"
            poster="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FLeslie%20Spit%20Proj%20Cut%202.mp4.00_03_23_13.Still001.jpg?v=1625605444889"
            controls
          >
            <source
              src="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2FLeslie%20Spit%20Proj%20Cut%202.mp4?v=1625605177984"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <hr />
          <p>Thank you for your generous support.</p>
        </div>
      </main>
    </body>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "Metamorphosis",
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
body {
  background: radial-gradient(closest-side, #d7bde2, #af7ac5, #76448a);
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: Arial, Helvetica, sans-serif;
}

@font-face {
    font-family: 'cantiquenormal';
    src: url('./Cantique-Normal.woff2') format('woff2'),
         url('./Cantique-Normal.woff') format('woff');
}

.meta {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 250px;
  max-width: 700px;
  border-radius: 30px;
  background: rgba(215, 189, 226, 0.5);
  color: #76448a;
  padding: 35px;
  box-shadow: 0 3px 10px rgb(215 189 226 / 0.5);
  line-height: 2;
}
h1 {
  font-size: 25pt;
  text-align: center;
  font-family: cantiquenormal, Arial, Helvetica, sans-serif;
}
h2 {
  font-size: 20pt;
  font-family: cantiquenormal, Arial, Helvetica, sans-serif;
  line-height: 3;
}
p {
  font-size: 13pt;
}
a {
  color: #76448a;
  text-decoration: underline;
}
a:hover {
  text-decoration: line-through;
}
hr {
  color: #76448a;
  border: none;
  border-bottom: 1.6px dashed #76448a;
  margin-top: 20px;
  margin-bottom: 20px;
}
.buy {
  text-align: center;
  background-color: #d7bde2;
  width: 100%;
  border-collapse: collapse;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(215 189 226 / 0.5);
}
td {
  padding: 20px;
}
video, iframe {
  border-radius: 30px;
  box-shadow: 0 5px 10px rgb(215 189 226 / 0.5);
}
</style>