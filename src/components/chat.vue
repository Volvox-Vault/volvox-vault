<template>
  <div id="chat">
    <p v-if="!online">Chat coming soon...</p>
    <p v-if="!online && isDevMode">
      try going to the <pre>volvox-back</pre> repository and running <pre>npm run dev</pre>, then
      reloading! this warning only appears in development mode ;)
    </p>
    
    <template v-if="online">
      <ul>
        <li
          v-for="message in messages"
          :key="message.time + message.name + message.colors + message.message"
        >
          {{
            /* Show date if it's been more than 24 hrs since message,
             * and always show time. */
            Date.now() - message.time > 1000 * 60 * 60 * 24
              ? new Date(message.time).toLocaleDateString().toLowerCase()
              : "" +
                " " +
                new Date(message.time).toLocaleTimeString().toLowerCase()
          }}
          [<span
            v-for="(color, $index) in message.colors.map(
              (c) => `color: #${c};`
            )"
            :key="color + $index"
            class="colorblock"
            :style="color"
            >█</span
          >
          {{ message.name }}] {{ message.message }}
        </li>
      </ul>
      <hr />
      <form @submit.prevent="sendMessage()">
        <span v-if="error.length" id="error">woah! {{ error }} :)</span>
        <div class="chat-input">
          <label for="name">nickname: </label>
          <span>{{ name }}</span>
          <input
            type="text"
            v-model="name"
            id="name"
            name="name"
            required
            placeholder="include your pronouns!"
          />
        </div>
        <div class="chat-input">
          <label for="code">anti-impersonation: </label>
          <span
            v-for="(color, $index) in colorPreview.map((c) => `color: #${c};`)"
            :key="color + $index"
            class="colorblock"
            :style="color"
            >█</span
          >
          <input
            type="text"
            placeholder="make it up & keep it secret!"
            v-model="code"
            required
            id="code"
            name="code"
          />
        </div>

        <input
          type="text"
          placeholder="what's going on?"
          v-model="message"
          required
        />
        <input type="submit" value="Send" />
      </form>
    </template>
  </div>
</template>

<script>
import { sha256 } from "js-sha256";

// Make sure this is the same on the front & backend!
const salt = "!volvox!";

const chunk = (a, n) =>
  [...Array(Math.ceil(a.length / n))].map((_, i) => a.slice(n * i, n + n * i));

export default {
  name: "Chat",
  data: function () {
    return {
      connection: null,
      online: false,
      messages: [],
      name: "",
      code: "",
      message: "",
      error: "",
      errorTimer: -1,
    };
  },
  methods: {
    sendMessage: function () {
      this.connection.send(
        JSON.stringify({
          name: this.name,
          code: sha256(salt + this.code), // hash once, so nobody ever knows our plaintext password
          message: this.message,
        })
      );
    },
  },
  computed: {
    hashedCode() {
      return this.code ? sha256(salt + this.code) : "";
    },
    doubleHashedCode() {
      return this.hashedCode ? sha256(salt + this.hashedCode) : "";
    },
    colorPreview() {
      return this.code ? colors(this.doubleHashedCode) : [];
    },
    isDevMode() {
      return process.env.NODE_ENV === "development";
    },
  },
  created: function () {
    this.connection = new WebSocket("ws://localhost:4455/chat");
    this.connection.onopen = () => {
      this.online = true;
    };
    this.connection.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.error) {
        this.error = message.error;
        clearTimeout(this.errorTimer);
        this.errorTimer = setTimeout(() => (this.error = ""), 8000);
      } else if (
        message.name &&
        message.hash &&
        message.message &&
        message.time
      ) {
        message.colors = colors(message.hash);

        delete message.hash;
        this.messages.push(message);

        if (
          message.name === this.name &&
          message.hash === this.doubleHashedCode &&
          message.message === this.message
        )
          // Clear the input box, cause our message is sent!
          this.message = "";
        localStorage.setItem("chat_message", "");
      }
    };

    this.connection.addEventListener("close", () => {
      this.online = false;
    });

    this.name = localStorage.getItem("chat_name") || "";
    console.log("loaded name", this.name);
    this.code = localStorage.getItem("chat_code") || "";
    this.message = localStorage.getItem("chat_message") || "";
  },
  watch: {
    name(value) {
      if (value) {
        localStorage.setItem("chat_name", value);
      }
    },
    code(value) {
      if (value) {
        localStorage.setItem("chat_code", value);
      }
    },
    message(value) {
      if (value) {
        localStorage.setItem("chat_message", value);
      }
    },
  },
};

const colors = (hash) =>
  chunk(hash, 6)
    .filter((c) => c.length === 6)
    .slice(0, 4);
</script>

<style scoped>
#chat {
  padding: 16px;
  color: grey;
  line-height: 2;
}

#chat ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

#error {
  background: yellowgreen;
  color: grey;
  font-size: 80%;
  padding: 4px;
}

.chat-input > input {
  width: 0px;
  border: 0;
  margin: 0;
  padding: 0;
}

.chat-input:hover > span:not(.colorblock),
.chat-input:focus-within > span:not(.colorblock) {
  display: none;
}

.chat-input > input:invalid,
.chat-input:hover > input,
.chat-input:focus-within > input {
  width: auto;
}

hr {
  border: 0px;
  border-bottom: 1px solid #c8c8c8;
}

pre {
  display: inline-block;
}
</style>
