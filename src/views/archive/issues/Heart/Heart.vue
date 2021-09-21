<template>
  <MainLayout>
    <body>
      <main>
        <div class="meta">
          <h1>heart.</h1>

          <p>
            <i>An issue reflecting on empathy, friendship, and love.</i
            ><br /><br />
            Write or create a project about something that comes from your
            heart. About a memory, idea, person, or something like that which
            you hold dear to you.<br />
            Create something personal, or community driven with friends and
            strangers.<br />
            Explore your friendships and relationships deeper with a creative
            exercise you could share in this issue.<br /><br />
            Send a pitch through
            <a
              href="https://form.123formbuilder.com/5763218/form"
              >this form</a
            >
            by <b>November 1st</b>. Final submissions are due around
            <b>December 1st</b>.<br /><br />

            Discuss your ideas
            <a href="https://volvoxvault.com/pond"
              >at the pond</a
            >—and
            <a
              href="https://www.when2meet.com/?12956396-qjYsH"
              >let's schedule a community video call</a
            >. We'll meet at
            <a href="https://meet.jit.si/volvoxhearttoheart"
              >https://meet.jit.si/volvoxhearttoheart</a
            >.
          </p>

          <hr />

          <img
            style="width: 100%; margin-top: 0px;"
            src="http://cdn.mcauto-images-production.sendgrid.net/98dc96f70d943c3b/9d08116c-92fb-4b47-b6b4-3af6ca146a72/1307x812.JPG"
          />

          <p>
            One person I often think fondly of is my Nana, who has always been
            there for me. The warmest person I know.<br />
            Who do you think warmly of? Do you think warmly of yourself? Did you
            used to think warmly of someone but no longer do?<br />
            Let’s explore these things and more in Heart.<br />
            —Tiana
          </p>

          <hr />

          <!-- MAG SUB -->
            <h2>Guidelines</h2>

            <ul class="block-Submit-ul">
              <li>
                <b>
                  Heart: An issue reflecting on empathy, friendship, and
                  love.</b
                >
              </li>
              <li>
                Send a pitch through
                <a
                  href="https://form.123formbuilder.com/5763218/form"
                  >this form</a
                >
                by <b>November 1st</b>. Final submissions are due around
                <b>December 1st</b>.
              </li>
              <li>
                You can create new art, or submit something you made in the past
                which fits the theme.
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
            </ul>

            <hr />

            <p>Thank you for your support.</p>
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
  background: rgba(219, 112, 147, 0.5);
  color: white;
  padding: 35px;
  box-shadow: 0 3px 10px rgb(215, 225, 168 / 0.5);
  line-height: 2;
}
h1 {
  font-size: 25pt;
  font-family: Arial, Helvetica, sans-serif;
}
h2 {
  font-size: 20pt;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 2;
}
p {
  font-size: 13pt;
}
a {
  color: white;
  font-weight: bold;
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
video,
iframe {
  border-radius: 30px;
  box-shadow: 0 5px 10px rgb(215 189 226 / 0.5);
}
</style>