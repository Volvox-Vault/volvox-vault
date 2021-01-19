<template>
  <MainLayout>
    <h1>Home Page</h1>
  </MainLayout>
</template>


<script>
import MainLayout from '../../layouts/MainLayout'

export default {
  name: 'Home',
  components: {
    MainLayout
  }
};
</script>

<style scoped>
#blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  align-items: flex-end;
  justify-content: flex-end;
}

.m1 {
    margin-bottom: 15px;
}

.m1:hover {
    text-decoration: line-through;
}

.block {
  background-color: #F7F7F7;
  /*height: 300px;
  width: 300px;*/
  min-height: 300px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  line-height: 1.2;
}

#blocks p, #blocks .list h2, #blocks .list a {
  border-bottom: 1px solid #E6E6E6;
  padding: 8px;
}
#blocks .list a {
  display: block;
  background: #fff;
}

.btn-group button {
  background-color: #fff;
  border: 1px solid grey;
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  width: 100%; /* Set a width if needed */
  display: block; /* Make the buttons appear below each other */
  text-align: left;
  padding-left: 10px;
  -webkit-appearance: none;

}

.rand_img {
  background-size: cover;
  background-position: center center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: auto;
  height: auto;
  grid-gap: 0px;
}

.indent {
  margin-left: 30px;
}

.gallery_display {
  position: relative;
  overflow: hidden;
}

.gallery div {

}

.gallery div:hover {
  opacity: 0.8;
}

.thumb {
  cursor: pointer;
}

.thumb img {
  width:100%;
  height: auto;
}


#footer {
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 10px;
  border-top: 1px solid black;
}


@media(max-width: 800px) {
  #main {
    width: 100%;
    margin-top: 10px;
  }
  body{
      background: #D3D3D3;
  }
  #blocks, #header {
    grid-template-columns: 1fr;
  }

  .blocks {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
  #header-title {
    font-size: 20px;
    color: black;
  }
  .gallery_display{
    overflow-y: scroll;
  }
  #footer {
    margin-bottom: 50px;
  }
}

@media only screen and (max-device-width: 566px) {
  #main {
    width: 100%;
    margin-top: 10px;
  }
    body{
      background: #D3D3D3;
  }
  #blocks, #header {
    grid-template-columns: 1fr;
  }

  .blocks {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
  #header-title {
    font-size: 20px;
    color: black;
  }
  #header p {
    font-size: 15px;
  }
  .gallery_display{
    overflow-y: scroll;
  }
  #footer {
    margin-bottom: 50px;
  }
}

</style>