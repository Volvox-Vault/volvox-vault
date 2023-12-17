<template>
  <body>
   <a href="/tsff"> <img
      src="https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/ts.png?v=1673389523276"
      class="logo"
    /></a>

    <h1>
      <router-link to="/trueself" style="text-decoration: none"
        >true self film fest</router-link
      >
    </h1>
    <br />
    <p style="font-family: hersheyFut">
      by <router-link to="/">volvox observer</router-link> |
      <a href="https://ko-fi.com/volvoxobserver">support us on ko-fi</a> <br />
      hosted by <a href="https://tiana.computer">tiana dueck</a> &
      <a href="http://kalilhaddad.com">kalil haddad</a>
    </p>
    <hr />
    <br />

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe3ikgMzpEYPoDDbd8xkLeLwNMQjKgqWVJ9uQBcehLpBoIjCA/viewform?embedded=true"
      width="100%"
      frameborder="0"
      marginheight="0"
      style="overflow: auto; overflow-x: hidden"
      marginwidth="0"
      >Loading…</iframe
    >
    <br /><br />
    <hr />
    <br /><br /><br />
  </body>
</template>


<script>
export default {
  name: "vote",
  components: {},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "True Self Film Fest | Audience Vote",
  },
};
</script>

<style scoped>
@font-face {
  font-family: hersheyOld;
  src: url(https://cdn.glitch.global/31c7994a-ff45-4592-b835-14262460c504/Hershey-Noailles-OldFrench-Bold.ttf?v=1673385487640);
}

* {
  scrollbar-color: #664c71 #664b71;
  scrollbar-width: thin !important;
}

body {
  line-height: 1.6;
  background: #664c71;
  font-family: hersheyOld;
  height: 100%;
  overflow: hidden;
  color: #f3f9e6;
  padding: 30px;

  height: 99vh;

  scrollbar-width: thin;
  scrollbar-color: #664b71 #664b71;
}

*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #664b71;
}

*::-webkit-scrollbar-thumb {
  background-color: #664b71;
  border-radius: 20px;
  border: 3px solid #664b71;
}

h1,
p {
  padding: 0px;
  margin: 0px;
}

h1 {
  line-height: 1;
  font-size: 45pt;
}

h2 {
  padding: 0px;
  margin: 0px;
  line-height: 1;
}

ul {
  font-size: 15pt;
}

.logo {
  width: 150px;
  float: right;
  padding-left: 10px;
  padding-bottom: 10px;
}

a {
  color: #f3f9e6;
  transition: 1s;
  text-decoration: underline;
}

a:hover,
.ok {
  text-decoration: none;
  background: #f3f9e6;
  color: #664c71;
}

.ts-contain {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
}

.ts-box {
  border: 1px dotted #212121;
  padding: 30px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

iframe {
    height: 700px;
}

@media only screen and (max-width: 600px) {
  .ts-contain {
    grid-template-columns: 1fr;
  }
  .logo {
    width: 200px;
  }
  iframe {
    height: 400px;
    }
}
</style>