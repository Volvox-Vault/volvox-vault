<template>
  <body>
    <h1>There's No Place Like Home</h1>
    <p>
      By
      <a href="https://josieeccleston.format.com/" target="_blank"
        >Josie Eccleston</a
      >
      and Sofia LaGrotta<br />
      Webpage by
      <a href="https://tiana.computer/" target="_blank">Tiana Dueck</a> |
      <a href="https://velvetyne.fr/fonts/compagnon/" target="_blank">Font</a
      ><br />
      on <router-link to="/archive">volvox vault</router-link>
    </p>

    <div class="one">
      <p>
        <img
          src="./R1-05934-0030_Original.jpg"
          alt="josie and sofia playing twister."
          style="
            float: right;
            height: 200px;
            padding-left: 20px;
            padding-bottom: 20px;
          "
        />Josie Eccleston and Sofia LaGrotta are the moment. Are Full of beans.
        Are @ gmail dot com. Are the bachelor. Are bisexual. Are Goblins. Are
        Inviting you in. <br /><br />
        There’s No Place Like Home (2019) maps our bedrooms and projects them
        elsewhere, stripping those spaces of any sentimentality. There is no
        ideal space for the work to exist as it will never recreate our homes.
        Reducing our most precious and intimate objects down to simple text
        invites the viewer to project their own ideas of what the text stands in
        place of. By putting the places we live on display in this manner, the
        work explores the boundaries between art and artist — questioning how
        much of our personal lives is visible within our practice.
        <br /><br />
        Now living in a different home, the piece serves as a kind of obituary
        to the places we used to call home and the feeling that was present
        there.
        <br /><br />
        Tell us your most embarrassing stories at eccjosie@gmail.com and/or
        sofiamlagrotta@gmail.com and take a look at more of our offerings on
        instagram @trinagnome + @venus.mycelium
      </p>
    </div>

    <div class="two">
      <p class="p1">
        Using projectors and word processing software we labeled all the
        personal items in our bedrooms including our furniture, decorations and
        art on our walls. Each object in these spaces have sentimental value,
        placed specifically with thought and intention.
      </p>

      <img
        src="./noplacelikehome2.jpg"
        style="display: block; margin: 0 auto; width: 100%"
      />

      <div class="contain">
        <div class="item0" style="overflow: hidden">
          <img
            src="./noplacelikehome3.jpg"
            style="display: block; margin: 0 auto; width: 100%; height: 100%"
          />
        </div>
        <div class="item2">
          <p style="text-align: right">
            We loved the way the light of the projector curved around our
            belongings almost as if becoming part of a collage.<br /><br />
            The objects in our bedrooms can be transported, we can simulate the
            effect the projections had dancing around our homes, but it doesn’t
            compare to the real thing.
          </p>
        </div>
        <div class="item1">
          <img
            src="./noplacelikehome7.jpg"
            style="display: block; margin: 0 auto; width: 100%; height: 100%"
          />
        </div>
        <div class="item2">
          <p>
            Photographs of our rooms with the projections allow the viewer to
            observe what we saw and essentially play “i-spy” with the
            projections serving as a kind of key.<br /><br />
            By mapping the objects in our rooms and projecting them into the
            critique room, they lose all sentimental value and meaning. The
            installation explores the separation of art and artist and where
            that line exists.
          </p>
        </div>
        <div class="item0" style="overflow: hidden">
          <img
            src="./noplacelikehome4.jpg"
            style="display: block; margin: 0 auto; width: 100%; height: 100%"
          />
        </div>
      </div>

      <img
        src="./noplacelikehome9.jpg"
        style="display: block; margin: 0 auto; width: 100%; height: 100%"
      />

      <p>
        Screens of varying sizes – some of which we carry with us everyday -
        invite the viewer in to examine the rooms in different ways.<br />
        Our coats hang on the walls of the room; when removed from our bodies
        they cannot personify us.
      </p>
      <table>
        <tr>
          <td>
            <img
              src="./noplacelikehome11.jpg"
              style="display: block; margin: 0 auto; width: 100%"
            />
          </td>
          <td>
            <img
              src="./noplacelikehome5.jpg"
              style="display: block; margin: 0 auto; width: 80%"
            />
          </td>
          <td>
            <img
              src="./noplacelikehome10.jpg"
              style="display: block; margin: 0 auto; width: 100%"
            />
          </td>
        </tr>
      </table>

      <p>
        The installation can be set up anywhere, creating a kind of “mobile
        home”. The projected walls morph and bend around objects, creating new
        silhouettes each time the work is displayed. There’s no limitations to
        where the work can be displayed as the space is malleable; no matter
        what it won’t recreate the space it was drawn.
      </p>

      <img
        src="./noplacelikehome12.jpg"
        style="display: block; margin: 0 auto; width: 100%"
      />

      <iframe
        width="100%"
        height="800"
        src="https://www.youtube.com/embed/IBoUoz6a280"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </body>
</template>


<script>
export default {
  name: "noPlace",
  components: {},
};
</script>

<style scoped>
@font-face {
  font-family: "Compagnon";
  src: url("Compagnon/Compagnon-Roman.woff") format("woff"),
    url("Compagnon/Compagnon-Roman.woff2") format("woff2");
}

@font-face {
  font-family: "CompagnonBold";
  src: url("Compagnon/Compagnon-Bold.woff") format("woff"),
    url("Compagnon/Compagnon-Bold.woff2") format("woff2");
}

h1 {
  font-family: CompagnonBold;
  font-size: 50pt;
  margin: 30px;
  color: rebeccapurple;
  margin-top: 10px;
}

body {
  margin: 0px;
  padding: 0px;
}

p {
  font-family: Compagnon;
  margin: 30px;
  line-height: 1.6;
}

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}
.e {
  grid-area: e;
}

.contain {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item0,
.item2 {
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  line-height: 1.6;
}

.item1 {
  overflow-y: hidden;
  height: 600px;
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 0px;
  padding: 0px;
}

table,
tr,
td {
  border-collapse: collapse;
  padding: 0;
  margin: 0;
}

.one {
  border: 1px dotted black;
  padding: 10px;
  margin: 30px;
  font-family: Compagnon;
  line-height: 1.6;
  font-size: 15pt;
}

.two {
  font-family: Compagnon;
  line-height: 1.6;
  font-size: 20pt;
}

.p1 {
  width: 50%;
}

a {
  color: rebeccapurple;
}

a:visited {
  color: rebeccapurple;
}

@media (min-width: 1990px) {
  h1 {
    font-size: 100pt;
  }
  .item0,
  .item2 {
    height: 400px;
  }

  .item1 {
    height: 800px;
  }
}

@media (max-width: 800px) {
  .contain {
    grid-template-columns: 1fr;
  }

  .item0 {
    height: 100%;
  }

  .item2 {
    height: 500px;
  }

  .item1 {
    height: 100%;
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    margin: 0px;
    padding: 0px;
  }

  .p1 {
    width: 80%;
  }
}

@media only screen and (max-device-width: 566px) {
  .contain {
    grid-template-columns: 1fr;
  }

  .item0 {
    height: 650px;
  }

  .item2 {
    height: 700px;
  }

  .item1 {
    height: 650px;
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    margin: 0px;
    padding: 0px;
  }

  .p1 {
    width: 80%;
  }

  h1 {
    font-size: 70pt;
  }

  p {
    font-size: 30pt;
    line-height: 1.6;
  }
}
</style>