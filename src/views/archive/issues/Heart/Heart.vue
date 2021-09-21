<template>
  <MainLayout>
    <body>
      <main>
        <div class="meta">
          <h1>Heart</h1>

          <p>we are calling for submissions that come from your heart.<br><br>

explore your friendships, relationships, obsessions, and heartbreaks.<br><br>

do something lovely and send it our way.<br><br>

look inside and outside of yourself.<br><br>

pour your heart out.<br><br>

i think we can make something really sweet together.<br><br>

tentative deadline - dec 1, 2021<br><br>

-tiana</p>

<hr>

<!-- MAG SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">magazine</p>

        <ul class="block-Submit-ul">
          <li>
            <b> Heart: An issue reflecting on empathy, friendship, and love.</b>
          </li>
          <li>Deadline November 10th.</li>
          <li>
            You can create new art, or submit something you made in the past
            which fits the theme.
          </li>
          <li>
            Volvox Vault prioritizes showcasing works with gentle, mindful, and
            organic vibrations.
          </li>
          <li>
            For visual submissions, include at least 200 word artist's
            statement.
          </li>
          <li>Written pieces for the magazine may be 1-6 pages long.</li>
          <li>
            <router-link to="/support"
              >Subscribe to the newsletter for updates.</router-link
            >
          </li>
          <li>
            Email submissions / pitches to hello@volvoxvault.com, or through
            <a
              href="https://form.123formbuilder.com/5763218/form"
              target="_blank"
              >this form</a
            >.
          </li>
        </ul>
      </div>


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
  background: radial-gradient(closest-side, white, PaleVioletRed);
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
  background: rgba(255,182,193, 0.5);
  color: PaleVioletRed;
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
  color: PaleVioletRed;
  text-decoration: underline;
}
a:hover {
  text-decoration: line-through;
}
hr {
  color: lightpink;
  border: none;
  border-bottom: 1.6px dashed PaleVioletRed;
  margin-top: 20px;
  margin-bottom: 20px;
}
.buy {
  text-align: center;
  background-color: lightpink;
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