<template>
  <MainLayout>
    <div id="blocks-About">

  <!-- ABOUT -->
  <div class="block-About">
    <p class="block-About-header">about</p>
    <p class="block-About-link"><img style="float: right; padding-bottom: 15px; padding-left: 15px;" src="../../assets/logo.png">  A <a href="https://en.wikipedia.org/wiki/Volvox" target="_blank">volvox</a> is essentially a type of algae colony, which envelops an aggregation of smaller algae colonies and so on. It's a similar matrix sensation to when you point your front camera into a mirror.<br>
      The volvox would not exist without its colonies... likewise, as creatives and human beings we strive with support from our colonies / communities.
         Volvox Vault is a special place to mindfully come together, and archive our creations and connections.
         <br><br>

    hello@volvoxvault.com<br><br>
    We are <a>supported</a> by community members like you.<br><br>
    Founded by <a href="http://tiana.computer/" target="_blank">Tiana Dueck</a>.</p>
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

</style>