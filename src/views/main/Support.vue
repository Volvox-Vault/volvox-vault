<template>
  <MainLayout>
    <div id="blocks-Support">
      <a href="https://www.patreon.com/volvoxobserver" target="_blank"
        ><div class="block-Support patreon-Support">
          <br />
          <h2>Patreon</h2>
        </div></a
      >

      <a
        href="https://checkout.square.site/buy/TWWRLYXJEZVU5BCM3W56HKSX"
        target="_blank"
        ><div class="block-Support newspaper-Support">
          <br />
          <h2>Newspaper</h2>
        </div></a
      >

      <router-link to="/shop"
        ><div class="block-Support magazines-Support">
          <br />
          <h2>Shop</h2>
        </div></router-link
      >
    </div>

    <div class="newsletter-Support" style="padding: 20px">
      <p style="font-style: italic; font-size: 12pt; line-height: 2">
        Volvox Vault is funded by nice people like you. ♥<br />
        Thank you to our patrons: Kristoffer Tjalve, Kalil Haddad, and Seán.
      </p>
    </div>

    <div class="newsletter-Support" style="padding: 25px; margin-bottom: 60px">
      <h2>Newsletter</h2>
      <br />
      <iframe
        src="https://cdn.forms-content.sg-form.com/18d274c9-df21-11ea-8215-a279536b68ff"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  </MainLayout>
</template>


<script>
import MainLayout from "../../layouts/MainLayout";

export default {
  name: "Support",
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
#blocks-Support {
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px;
}

.block-Support h2 {
  color: #fbfdf7;
}

.block-Support {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #fbfdf7;
  text-decoration: none;
  font-weight: normal;
  font-size: 13px;
  cursor: pointer;
}

.block-Support {
  background-color: #fbfdf7;
  /*height: 300px;
  width: 300px;*/
  min-height: 110px;
  max-height: 110px;

  overflow: hidden;
  line-height: 1.2;
  text-align: center;
}

.block-Support h2,
.newsletter-Support h2 {
  font-size: 30pt;
  font-weight: normal;
  text-align: center;
}

.block-Support h2:hover {
  font-style: italic;
}

.patreon-Support {
  border: 1px solid #212121;

  background-color: #cbbad2;
}

/* for some reason this messes up the responsive newspaper margin... */
.newspaper-Support {
  border: 1px solid #212121;

  background-color: yellowgreen;
}

.magazines-Support {
  background-color: #9879a6;
  border: 1px solid #212121;
}

.newsletter-Support {
  padding: 20px;
  margin: 20px;
  background-color: #fbfdf7;
  color: #212121;
  border: 1px solid #212121;
  border-collapse: collapse;
  width: auto;
  line-height: 1.2;
  padding: 8px;
  text-align: center;
}

iframe {
  border: none;
}

@media (max-width: 800px) {
  #blocks-Support {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-device-width: 566px) {
  #blocks-Support {
    grid-template-columns: 1fr;
  }

  #header-Support-title {
    font-size: 20px;
    color: black;
  }

  #header-Support p {
    font-size: 15px;
  }
}
</style>