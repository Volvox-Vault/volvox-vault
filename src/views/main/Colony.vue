<template>
  <MainLayout>
    
    <div id="blocks-Artists">


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>


      <div class="block-Artists">
        <p class="block-Artists-header">community</p>
        <p class="block-Artists-link">hello</p>
      </div>

    </div>
  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'Colony',
  components: {
    MainLayout
  }
};
</script>




<style scoped>

/* BLOCKS */
#blocks-Artists {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 20px;
  padding: 0;
}

.block-Artists {
  border: 1px solid yellowgreen;
    border-collapse: collapse;
  overflow: auto;
  height: 25vh;
}


.block-Artists-header {
  color: grey;
  background-color: Gainsboro;
  font-size: 12pt;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-Artists-link {
  font-size: 12pt;
  color: grey;
  padding: 10px;
  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-Artists-link a{
  color: grey;
  text-decoration: none;
}

.block-Artists-link a:hover{
  text-decoration: underline;
  cursor: pointer;
}

</style>