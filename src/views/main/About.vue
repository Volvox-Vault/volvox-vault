<template>
  <MainLayout>
    <div id="blocks-About">

  <!-- ABOUT -->
  <div class="block-About">
    <p class="block-About-header">about</p>
    <p class="block-About-link"><img src="../../assets/logo.png">  
    We are a creative community inspired by <router-link to="/colony">each other</router-link>.<br><br>
    A <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank">volvox</a> is a type of algae colony mad eup of smaller volvox colonies. It's a similar matrix sensation to when you point your front camera into a mirror.<br>
      The volvox would not exist without its colonies... likewise, as creatives and human beings we thrive with support from our colonies / communities.
         Volvox Vault is a special place to mindfully come together, and archive our creations and connections.
         <br><br>
    We are <a href="/Support">supported</a> by community members like you.<br><br>

    Editor-in-Chief — <a href="https://tiana.computer/" target="_blank">Tiana Dueck</a><br>
    Website Team — Tiana Dueck &#38; <a href="https://ari.computer/" target="_blank">Ari Lotter</a><br>
    Managing Editor — <a href="http://beatricedouaihy.com//" target="_blank">Beatrice Douaihy</a><br>
    Horoscopes — <a href="mailto:themoonthestarsandem@gmail.com">Em Biggs</a><br><br>
    
    hello@volvoxvault.com</p>

  </div>
  </div>

<br><br><br>
  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'About',
  components: {
    MainLayout
  }
};
</script>



<style scoped>

/* BLOCKS */
#blocks-About {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  padding: 0;
  grid-gap: 10px;
}

.block-About {
  background-color: #f0f7de;
  color: grey;
  border: 1px solid yellowgreen;
    border-collapse: collapse;
  overflow: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}


.block-About-header {
  font-size: 15pt;
  font-weight: bold;
  color: grey;

  background-color: Gainsboro;

  padding: 15px;

  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-About-link {
  font-size: 12pt;

  padding: 15px;

  align-items: center;
}

.block-About-link img {
  float: right; 
  padding-bottom: 15px; 
  padding-left: 15px;
}

.block-About-link a, .block-shop a {
  color: #9879a6;
  text-decoration: none;
}

.block-About-link a:hover, .block-shop a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-About-shop {
  text-align: center;
  text-decoration: none;
  margin-top: 35%;
  margin-bottom: 45%;
  font-size: 10vh;
  max-height: 50vh;
}


.block-About-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media(max-width: 800px) {

  .block-About-link img {
  width: 35%;
  }

}

@media only screen and (max-device-width: 566px) {

  .block-About-link img {
  width: 35%;
  }

}



</style>