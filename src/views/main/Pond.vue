<template>
  <div class="pond">
    <div class="space">
      <router-link to="/"><p class="header">the volvox pond</p></router-link>
      <hr />
      <div class="chatness">
        <Chat />
      </div>
    </div>

    <footer
      style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 100%;
      "
    >
      <img
        src="@/assets/pond.png"
        class="pondpic"
      />
    </footer>
  </div>
</template>


<script>
import Chat from "../../components/chat";

export default {
  name: "Pond",
  components: {
    Chat,
  },
};
</script>

<style scoped>
.pond {
  height: 100vh;
  background-color: midnightblue;
}

.header {
  text-align: center;
  color: grey;
  font-size: 14pt;
}

.space {
  padding: 20px;
}



hr {
  border: none;
  border-bottom: 1px solid grey;
  margin-top: 20px;
  margin-bottom: 20px;
}

.pondpic {
  display: block; 
  float: right; 
  margin: 20px; 
  width: 40%; 
  min-width: 300px; 
  max-width: 600px;
}

@media(max-width: 1990px) {
  .pondpic {
    max-width: 400px;
    min-width: 300px;
  }
}
</style>

