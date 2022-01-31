<template>
  <MainLayout>
    <main>
      <h2>Error 404</h2>
      <br />
      <p>This page doesn't exist. :(</p>
    </main>
  </MainLayout>
</template>


<script>
import MainLayout from "../layouts/MainLayout";

export default {
  name: "NotFound",
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
main {
  margin: 50px;
  text-align: center;
}
h2 {
  color: yellowgreen;
}
p {
  color: grey;
}
</style>