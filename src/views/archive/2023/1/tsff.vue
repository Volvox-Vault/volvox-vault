<template>
  <body>
    
    <div id="container">
      <video autoplay="true" ref="camera" id="videoElement"></video>
      <div class="box">True Self Film Fest</div>
      <div class="box">
        <a href="/vanderklipp">A Wet Cashew — Charles VanderKlipp</a>
      </div>
      <div class="box">Vlog #1460 — Connie Liu</div>
      <div class="box">I Am — Kailum Graves</div>
      <div class="box">I Am Here — Alexandra Stenberg</div>
      <div class="box">Across the Water — Ellen Bjerborn</div>
      <div class="box">A Film About My Grandparents — Joel Haver</div>
      <div class="box">Estranged — Lisa Saban</div>
      <div class="box">Mega Memories — Lara Olanick</div>
      <div class="box">
        Joel Meyerowitz and my Youtube Addiction — Stanley Tucker
      </div>
      <div class="box">Goddess She Her Hers — Charli Christine Marker</div>
      <div class="box">Why do Ants Go Back to Their Nests — Alex Lo</div>
      <div class="box">
        Tracing the Materiality of a Cellular Connection — Alan Perry
      </div>
      <div class="box">Matador — Matias Vaisman</div>
      <div class="box">Patient Object — Terry Cole</div>
      <div class="box">Okay, see you then — Maia Liebeskind</div>
      <div class="box">Salad — Tiana Dueck</div>
      <div class="box">Ellie's Lipstick — Anna + Jacob Brotman-Krass</div>
      <div class="box">
        Perfect Flowers Of The Scum Generation — Wilde Davis
      </div>
      <div class="box bottom">Echappe — Xinli She</div>
    </div>
  </body>
</template>


<script>
export default {
  name: "tsff",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "True Self Film Fest",
  },

  mounted() {
    
        navigator.mediaDevices.getUserMedia({video: true})
            .then(mediaStream => {
                    this.$refs.camera.srcObject = mediaStream;
                    this.$refs.camera.play()
                    this.mediaStream = mediaStream                   
            })   
    },

};
</script>

<style scoped>
@font-face {
  font-family: hersheyOld;
  src: url(https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/Hershey-Noailles-OldFrench-Bold.ttf?v=1673385487640);
}

body {
  background: #281e2d;
  margin: 0px;
  padding: 40px;
  font-family: "hersheyOld", arial, sans-serif;
  padding-top: 60px;
}

#container {
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 100%;
  border-collapse: collapse;
  overflow: hidden;
  color: #f3f9e6;
  max-width: 1000px;
  position: relative;
}

.box {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 0.5px solid #f3f9e6;
  border-collapse: collapse;
}

.bottom {
  border-bottom: 0px;
}

.video-container {
  height: 300px;
  width: 300px;
  position: relative;
}

video {
  background: #f3f9e6;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -1;
}

a {
  text-decoration: none;
  color: #f3f9e6;
}

a:hover {
  background: rgba(102, 76, 113, 0.8);
  padding: 5px;
  font-style: italic;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .ts-contain {
    grid-template-columns: 1fr;
  }
  .logo {
    width: 200px;
  }
}
</style>