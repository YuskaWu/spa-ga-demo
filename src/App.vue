<template>
  <div id="app">
    <div id="nav">
      <router-link to="/news/4038689">新聞1</router-link> |
      <router-link to="/news/4032601">新聞2</router-link> |
      <router-link to="/news/4034614">新聞3</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
