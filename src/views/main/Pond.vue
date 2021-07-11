<template>
  <div class="pond">
    <div class="space">
      <p class="header">The Pond</p>
      <br /><br />
      <div class="chatness">
        <Chat />
      </div>
    </div>

    <footer
      style="
        position: fixed;
        bottom: 0;
        width: 100%;
        padding-bottom: 0.5em;
        font-size: 1vw;
      "
    >
      <img
        src="@/assets/pond.png"
        style="display: block; margin: 0 auto; width: 90%"
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
  background-color: honeydew;
  background: linear-gradient(honeydew, lightblue);
}

.header {
  text-align: center;
  color: grey;
  font-size: 20px;
}

.space {
  padding: 40px;
}

.chatness {
  height: 70vh;
  overflow-y: auto;
}
</style>

