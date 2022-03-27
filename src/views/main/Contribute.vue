<template>
  <MainLayout>
    <div id="blocks-Submit">
      <div class="block-Submit">
        <p class="block-Submit-header">contribute</p>
        <p style="padding: 15px">We hope to see you in our inbox sometime.</p>
      </div>

      <!-- NEWS SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">newspaper</p>
        <p class="block-Submit-link">
          A quarterly newspaper for the everyday creative.<br />
          Seeking personal gossip, community updates, artwork, and interviews<br>
          To contribute, fill out
          <a href="https://form.123formbuilder.com/5763208/form" target="_blank"
            >this form</a
          >
          or email hello@volvoxvault.com<br />
          <a
            href="https://checkout.square.site/buy/TWWRLYXJEZVU5BCM3W56HKSX"
            target="_blank"
            >Subscribe to Volvox Times</a
          >
        </p>
      </div>

      <!-- VOL -->
      <div class="block-Submit" style="height: 100%;">
        <p class="block-Submit-header">volunteer with us</p>

        <p style="padding: 15px; padding-bottom: 0px">
          We're looking to expand our community.<br>
          Positions are unpaid (counts towards intern hours for students), with free access to our digital publications.<br>
          Ideally, you might have at least 10 hours per month to spend with Volvox remotely or together.<br>
          <a href="https://forms.gle/NDP9SvEs32HaamMa6" target="_blank">Apply here</a>, or email tiana@volvoxvault.com
        </p>

        <ul class="block-Submit-ul">
          <li>
            <b>Managing Editor</b><br />
            We are looking for a managing editor with a passion for community
            and creativity to help us conceptualize new articles and projects through
            reaching out to people who are doing cool creative things. They would be an active community member, looking for and producing creative pieces to feature in Volvox Vault. Additionally, the managing editor
            is someone who ponders the next steps for Volvox Vault as a
            whole—considering ideas for creative, financial, and community
            growth.
          </li>
          <li>
            <b>Editor</b><br />
            We are looking for editors with a passion for community
            and creativity to help us conceptualize new articles and projects through
            reaching out to people who are doing cool creative things. They would be an active community member, looking for and producing creative pieces to feature in Volvox Vault. 
          </li>
          <li>
            <b>Writer</b><br />
            We are looking for writers that we can go to with
            leads for articles, projects, and such who are up for the challenge
            of making our ideas into realities.
          </li>
          <li>
            <b>Community Creative</b><br />
            We are looking for community creatives
            with unique skills like design, programming, photography,
            videography, illustration, and more, who want to practice within our community. 
            Creating assets which would be featured on
            our website, articles, projects, publications, and merch.
          </li>
          <li>
            <b>Community Coordinator</b><br />
            We are looking for community
            coordinators who love working with new people to help us with
            producing projects, and managing roles and deadlines.
          </li>
          <li>
            <b>Grant Writer / Financial Manager</b><br />
            We are looking for someone who can help us
            grow into a community that can pay its contributors, and has the
            means to sell our publications and such at more affordable prices!
          </li>
        </ul>
      </div>

      <!-- WEB SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">website</p>

        <ul class="block-Submit-ul">
          <li>
            Any kind of creative article / project can be submitted / pitched to
            the website. Media must be original.
          </li>
          <li>
            Articles, stories, paintings, photographs, films, generative art,
            etc.
          </li>
          <li>
            For visual submissions, include at least 200 word artist's
            statement.
          </li>
          <li>Email submissions / pitches to hello@volvoxvault.com</li>
        </ul>
      </div>

      <!-- MAG SUB -->
      <div class="block-Submit">
        <p class="block-Submit-header">magazine</p>

        <ul class="block-Submit-ul">
          <li>
            TBA
          </li>
          <li>
            You can create new art, or submit something you made in the past
            which fits the theme. Media must be original.
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
      </div>

      
    </div>

    <br /><br /><br />
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "Contribute",
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
/* BLOCKS */
#blocks-Submit {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0;
  padding: 0;
  grid-gap: 10px;
}

.block-Submit {
  background-color: #f0f7de;
  color: grey;
  border: 1px solid yellowgreen;
  border-collapse: collapse;
  overflow: auto;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.block-Submit-header {
  font-size: 15pt;
  font-weight: bold;
  color: grey;

  background-color: Gainsboro;

  padding: 15px;

  border-bottom: 1px solid yellowgreen;
  align-items: center;
}

.block-Submit-link {
  font-size: 12pt;

  padding: 15px;

  align-items: center;
}

.block-Submit-ul {
  padding-right: 15px;
}

.block-Submit-link a,
li a, p a {
  color: #9879a6;
  text-decoration: none;
}

.block-Submit-link a:hover,
.block-shop a:hover,
li a:hover, p a:hover {
  text-decoration: underline;
  cursor: pointer;
}

.block-Submit-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  #blocks-Submit {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Submit-image {
    overflow: hidden;
  }
}

@media only screen and (max-device-width: 566px) {
  #blocks-Submit {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block-Submit-image {
    overflow: hidden;
  }
}
</style>