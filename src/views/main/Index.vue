<template>
  <MainLayout>
  
    <head>
      <title>volvox.observer</title>

      <link rel="shortcut icon" type="image/png" href="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvvicon.png?v=1630726961919" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content="a public diary." />
      <meta name="author" content="volvox.observer" />

      <meta property="og:title" content="volvox.observer" />
      <meta property="og:description" content="a public diary." />
      <meta property="og:image" content="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvvicon.png?v=1630726961919" />
      <meta property="og:url" content="http://volvoxvault.com/" />

      <meta property="twitter:title" content="volvox.observer" />
      <meta property="twitter:description" content="a public diary." />
      <meta property="twitter:image" content="https://cdn.glitch.com/31c7994a-ff45-4592-b835-14262460c504%2Fvvicon.png?v=1630726961919" />
      <meta property="twitter:url" content="http://volvoxvault.com/" />

    
    </head>

<div class="bin2" style="overflow-x: hidden;">
          <div class="box2">
            <div class="new-container">
              <router-link to="/archive"
              ><div class="new-box">
                  <p>MAGAZINES</p>
                </div></router-link
              >
              <a href="/trueself"
                ><div class="new-box">
                  <p style="background: #f3f9e6;">TRUE SELF FILM FEST</p>
                </div></a
              >
              <router-link to="/latesummer"
                ><div class="new-box">
                  <p>FILM: LATE SUMMER</p>
                </div></router-link
              >
            </div>


            <router-link to="/2024"  class="newest-link">
            <div style="width: 100%; height: 300px;"><img style="height: 300px; width: 100%;  object-fit: cover;"
                src="https://cdn.glitch.global/1bc078b6-0415-4e03-b37b-6732f286da4c/algaebloom1.png?v=1711894134486"
              /></div>
            <div class="newest"><marquee><h1>THIS JUST IN — 2024 OPEN CALL: BLOOM</h1></marquee></div></router-link>


            <div class="column-container">
            <a href="/diary"
                ><div class="column-box">
                  <p class="col-6a">NEW: Volvox Diary</p>
                  <p class="col-6b">submit a diary entry</p>
                </div></a
              >
              <a href="/archive#projects"
                ><div class="column-box">
                  <p class="col-6a">Projects & Events</p>
                  <p class="col-6b">let's make something special together</p>
                </div></a
              >
              <a href="/archive#magazines"
                ><div class="column-box">
                  <p class="col-6a">Publication Archive</p>
                  <p class="col-6b">a whole world to discover</p>
                </div></a
              >
              <a href="/kindwords"
                ><div class="column-box">
                  <p class="col-6a">Kind Words</p>
                  <p class="col-6b">exchanging kind words</p>
                </div></a
              >
              <a href="https://open.spotify.com/show/2fo1GJaSCXUBF5iMCZgBQJ"
                ><div class="column-box">
                  <p class="col-1a">Oscillations</p>
                  <p class="col-1b">conversations with artists and friends</p>
                </div></a
              >
              <a href="/archive#gossip"
                ><div class="column-box">
                  <p class="col-5a">Personal Gossip</p>
                  <p class="col-5b">what's new?</p>
                </div></a
              >
              <a href="/archive#notebook"
                ><div class="column-box">
                  <p class="col-3a">Notebook</p>
                  <p class="col-3b">lessons and tutorials</p>
                </div></a
              >

              <a href="/archive#diary"
                ><div class="column-box">
                  <p class="col-2a">Dear Diary</p>
                  <p class="col-2b">personal realizations</p>
                </div></a
              >

              <a href="/archive#feelings">
                ><div class="column-box">
                  <p class="col-4a">Feelings</p>
                  <p class="col-4b">getting emotional</p>
                </div></a
              >

              
              
              
              
            </div>
          </div>
        </div>


  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";
/*import Chat from "../../components/chat";*/

export default {
  name: "Home",
  components: {
    MainLayout,
    /*Chat,*/
  },
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Home",
  },
};
</script>


<style scoped>
p,
a,
h1,
h2 {
  line-height: 1.6;
}
/* BLOCKS */
#blocks-Home {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  margin-top: 1px;
  padding: 0;
  grid-gap: 1px;
  box-sizing: border-box;
}

.block-Home {
  box-shadow: 0 0 0 1px yellowgreen;
  overflow: auto;
  height: 50vh;
}

.block-Home-header {
  background-color: Gainsboro;
  font-size: 12pt;
  font-weight: bold;
  color: #212121;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
  align-items: center;
}

.block-Home-enterpond {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
}

.block-Home-enterpond a {
  color: #212121;
}

.block-Home-enterpond a:hover {
  color: #212121;
  text-decoration: underline;
}

.block-Home-link {
  font-size: 12pt;
  color: #212121;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
  background-color: #f0f7de;
  align-items: center;
}

.block-Home-link a,
.recent-Router a,
.block-Home-shop a {
  color: #212121;
  text-decoration: none;
}

.block-Home-link a:hover,
.recent-Router a:hover,
.block-Home-shop a:hover,
.block-Home-header a:hover {
  text-decoration: underline;
  color: #9879a6;
  cursor: pointer;
}

.block-Home-header a {
  color: #9879a6;
  line-height: 0;
}

.block-Home-shop {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vh;
  height: 98%;
}

.block-Home-image {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.block-Home-image img {
  /* make sure the image is scaled keeping its aspect ratio */
  max-width: 70%;
  height: auto;
}

.block-Home-image-pond {
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  justify-content: center;
  overflow: hidden;
}

.block-Home-image-pond-img {
  /* make sure the image is scaled keeping its aspect ratio */
  max-width: 70%;
  height: auto;
  margin-top: 5%;
  margin-bottom: 5%;
}

.recent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 0;
  grid-gap: 1px;
  box-sizing: border-box;

  height: 100%;
  width: 100%;
}

.recent > div {
  overflow: auto;
  height: auto;
  width: auto;
  position: relative;
  box-shadow: 0 0 0 1px yellowgreen;
}

.recent-Router {
  position: absolute;
  font-size: 12pt;
  text-align: center;
  color: grey;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newest {
  border-bottom: 1px dotted #212121;
  background:#9879a6;
  color:#f0f7de;
  text-align:center;
  padding: 10px;
  padding-bottom: 5px;
  transition: 1s;
  width: 100%;
}
.newest-link {
  width: 100%;
}
.newest h1 {
  padding: 0px;
  margin: 0px;
  width: 100%;
}
.newest-link:hover .newest {
  background: #212121;
}
.chat-block-Home {
  background-color: midnightblue;
}

@media (min-width: 800px) {
  .chat-block-Home {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 2;
  }
}

@media (max-width: 800px) {
  #blocks-Home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Home {
    height: 100%;
  }
  .recent > div {
    padding: 25px;
  }
  .block-Home-image {
    overflow: hidden;
  }
  .block-Home-image img {
    /* make sure the image is scaled keeping its aspect ratio 
    max-width: 70%; */
    height: auto;
  }
  .chat-block-Home {
    grid-row: 1;
    height: 100%;
    overflow-y: auto;
  }
  .magazine-block {
    grid-row: 2;
    height: 100%;
  }
  .community-block {
    grid-row: 4;
  }

  .newest{
    width: 100vw;
  }
}

@media only screen and (max-device-width: 800px) {
  #blocks-Home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Home {
    height: 100%;
  }
  .block-Home-image {
    overflow: hidden;
  }
  .block-Home-image img {
    /* make sure the image is scaled keeping its aspect ratio 
    max-width: 70%; */
    height: auto;
  }
  .chat-block-Home {
    grid-row: 1;
    height: 100%;
    overflow-y: auto;
  }
  .magazine-block {
    grid-row: 2;
    height: 100%;
  }

  .newest{
    width: 100vw;
  }
}
</style>