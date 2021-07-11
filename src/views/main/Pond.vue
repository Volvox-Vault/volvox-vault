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
        bottom: 0;
        width: 100%;
      "
    >
      <img
        src="@/assets/pond.png"
        style="display: block; margin-right: 20px; width: 50%"
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

