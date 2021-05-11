<template>
  <div class="app-container">
    <div id="nav">
      <div style="margin: auto; display: flex; flex-direction: column;">
        <router-link to="/">Home</router-link> -
        <router-link to="/work">Work</router-link>
      </div>
    </div>
    <router-view />
  </div>
  <div class="footer">
    <p class="my-info-label">Samuel Wong | 0434 986 374 | <a href="https://www.linkedin.com/in/samuel-wong-723537aa/" target="_blank">LinkedIn</a> </p>
    <p class="icons-disclaimer">Icons by icons8</p>
  </div>
</template>

<style lang="scss">
@import "scss/_variables.scss";

* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: $background;
  height: 100vh;
  overflow: scroll;
}

.footer {
  width: 100%;
  height: 64px;
  background-color: $primary;
  box-shadow: 0px -4px rgba(0, 0, 0, 0.3);
  display: flex;

  .icons-disclaimer {
    margin: auto;
    margin-right: 24px;
  }

  .my-info-label {
    margin: auto;
    margin-left: 24px;

    a {
      color: white;
    }
  }
}

.app-container {
  height: 100%;
  width: 100%;
  display: flex;

  #nav {
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    box-shadow: 4px 0px rgba(0, 0, 0, 0.3);
    display: flex;

    a {
      font-weight: bold;
      color: white;

      &.router-link-exact-active {
        color: $primary;
      }
    }
  }
}

.detail-text {
  color: $text_detail;
  text-align: left;
}

.main-title {
    text-align: left;
    font-size: 4em;
    font-weight: 900;
  }
</style>
