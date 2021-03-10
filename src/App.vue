<script>
export default {
  data: function () {
    return {
      darkMode: false
    }
  },
  created: function () {
    this.setMode(this.getMode());
  },
  methods: {
    getMode () {
      return localStorage.getItem('darkMode');
    },
    setMode (value) {
      let htmlElement = document.documentElement;
      if (value) {
          htmlElement.setAttribute('theme', 'dark');
          localStorage.setItem('darkMode', true);
          this.darkMode = true;
      } else {
          htmlElement.setAttribute('theme', 'light');
          localStorage.removeItem("darkMode");
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <header>
      <h1>Repo Finder</h1>
      <input type="checkbox" class='theme-switch' @change="setMode($event.target.checked)" v-bind:checked="this.darkMode" />Dark Mode<br>
    </header>
    <router-view @setMode="setMode"/>
    <footer>Footer</footer>
  </div>
</template>

<style lang="scss">

  html{ height: 100vh; overflow: auto; }

  body {
    background: var(--body-background-color);
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
  #app {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    border: 1px solid #7e7e7e;
    color: var(--app-font-color);
    height: fit-content;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1200px;
    border-top: none;
    border-bottom: none;
    min-width: 307px;
    padding: 20px;
    background: var(--app-background);
  }
  ul {
    list-style: none;
    text-align: left;
  }
  button {
    height: 36px;
    border: none;
    border-radius: 6px;
    background: #bdbdbd;
    padding: 0 20px;
    outline-color: #fff;
  }

  button:hover {
    background: #829fdd;
    cursor: pointer;
    color: #fff;
    outline-color: #829fdd;
  }

  button:focus {outline:0;}

  h1 {
    margin: 5px 5px 10px 0;
    display: inline-block;
  }
  
</style>