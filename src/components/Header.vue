<template>
  <div class="hero is-medium is-primary">
    <div class="hero-header"></div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <hash-rebel-main-logo/>
        <h1 class="title is-uppercase has-text-white">
          Decenterlize the world
        </h1>
        <h2 class="subtitle">
          BRIAN HENZE - <br> Developer Sandbox
        </h2>
      </div>
    </div>
    <div class="hero-footer">
      <!-- <div class="container has-text-right"> -->
        <div class="level-right">
        <a
          target="_blank"
          href="https://github.com/HashRebel/rebel-headquarters-web"
        >
          <img class="test" src="../assets/images/icons/social-media/github-anchor.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import HashRebelMainLogo from "./icons/HashRebelMain.vue";

  export default {
    components: {
      hashRebelMainLogo: HashRebelMainLogo,
    }
  }
</script>
