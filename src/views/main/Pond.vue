<template>
  <div class="pond">
    <div class="space">
      <p class="header">The Pond</p>
      <br />
      <div class="chatness">
        <Chat />
      </div>
    </div>

    <footer
      style="
        position: fixed;
        bottom: 2em;
        right: 2em;
        width: 50%;
      "
    >
      <img
        src="@/assets/pond.png"
        style="display: block; margin: 0 auto; width: 30%; min-width: 150px;"
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

