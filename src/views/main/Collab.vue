<template>
  <MainLayout>
    
<div id="blocks-Collab">

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
  </div>

  <!-- CHAT -->
  <div class="block-Collab">
    <p class="block-Collab-header">chat</p>
    <p class="block-Collab-link" style="border: none;">coming soon...</p>
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
    padding: 0;
  }

  .block-Collab {
    border: 1px solid yellowgreen;
      border-collapse: collapse;
    overflow: auto;
    height: 25vh;
  }


  .block-Collab-header {
    color: grey;
    background-color: Gainsboro;
    font-size: 12pt;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid yellowgreen;
    align-items: center;
  }

  .block-Collab-link {
    font-size: 12pt;
    color: grey;
    padding: 10px;
    border-bottom: 1px solid yellowgreen;
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

  .block-Collab-shop {
    text-align: center;
    text-decoration: none;
    margin-top: 35%;
    margin-bottom: 45%;
    color: ghostwhite;
    font-size: 10vh;
    max-height: 50vh;
  }

  .block-Collab-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>