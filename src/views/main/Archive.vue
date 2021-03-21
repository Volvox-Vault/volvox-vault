<template>
  <MainLayout>

    <div class="select-nav"><span class="select">Type</span> <span class="select">Topic</span></div>
    
<div id="blocks-Collab">

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">Joseph on House Parties</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">The Rise and Fall of Tennis Shoes</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">Everything You Need To Know About Sculpture</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">Dating Advice for Hermits</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">What Is The Best Colour?</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">How To Sleep Better</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">Issy On Skirts</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">Date | Author</p>
    <p class="block-Collab-link" style="border: none;">The Meaning Of Life According To DerrikThe Meaning Of Life</p>
  </div>

</div>
  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'Collaborate',
  components: {
    MainLayout
  }
};
</script>

<style scoped>

  /* BLOCKS */
  #blocks-Collab {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin:20px;
    line-height: 1.6;
  }

  .select-nav {
    margin: 20px;
    color: grey;
  }

  .select {
    border: 1px solid yellowgreen;
    padding: 8px;
    margin-right: 5px;
  }

  .block-Collab {
    border: 1px solid yellowgreen;
      border-collapse: collapse;
    background-color: #f0f7de;
    overflow: auto;
    height: 35vh;
    position: relative;
  }


  .block-Collab-header {
    position: absolute;
    color: grey;
    font-size: 10pt;
    padding: 10px;
    align-items: center;
    margin-bottom: 8px;
  }

  .block-Collab-link {
    font-size: 12pt;
    height: 31.5vh;
    text-align: center;
    color: grey;
    padding: 10px;
    border-bottom: 1px solid yellowgreen;
    font-weight: bold;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .block-Collab-link a{
    color: grey;
    text-decoration: none;
  }

  .block-Collab-link a:hover, .block-shop a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .block-Collab-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>