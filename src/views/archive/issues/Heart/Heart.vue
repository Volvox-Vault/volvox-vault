<template>
  <MainLayout>
    <body>
      <main>
        <div class="meta">
          <h1>Heart</h1>

          <hr />

          <iframe width="100%" height="360" src="https://www.youtube.com/embed/z4W8Esxp1S0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br><br>
          <p>
            An issue.
          </p>

          <p>Thank you for your generous support.</p>
        </div>
      </main>
    </body>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "Heart",
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
body {
  background: radial-gradient(closest-side,#723D46, #472D30);
  height: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: Arial, Helvetica, sans-serif;
}


.meta {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 250px;
  max-width: 700px;
  border-radius: 30px;
  background: rgba(215, 225, 168, 0.5);
  color: #472D30;
  padding: 35px;
  box-shadow: 0 3px 10px rgb(215, 225, 168 / 0.5);
  line-height: 2;
}
h1 {
  font-size: 20pt;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
h2 {
  font-size: 20pt;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 3;
}
p {
  font-size: 13pt;
}
a {
  color: #472D30;
  text-decoration: underline;
}
a:hover {
  text-decoration: line-through;
}
hr {
  color: #472D30;
  border: none;
  border-bottom: 1.6px dashed #76448a;
  margin-top: 20px;
  margin-bottom: 20px;
}
.buy {
  text-align: center;
  background-color: #d7bde2;
  width: 100%;
  border-collapse: collapse;
  border-radius: 30px;
  box-shadow: 0 3px 10px rgb(215 189 226 / 0.5);
}
td {
  padding: 20px;
}
video, iframe {
  border-radius: 30px;
  box-shadow: 0 5px 10px rgb(215 189 226 / 0.5);
}
</style>