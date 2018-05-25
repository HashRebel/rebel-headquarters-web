<!-- TODO:
  * use the following code for the hamburger: https://codepen.io/michaeltcoelho/pen/awGzf
  * https://codepen.io/michaeltcoelho/pen/awGzf
-->
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
      <div class="level-right">
        <a
          target="_blank"
          href="https://github.com/HashRebel/rebel-headquarters-web"
        >
          <github-logo
            :height="githubIconAnchorHeight"
            :width="githubIconAnchorWidth"
          />
        </a>
    </div>
    <div class="hero-footer">
      <!-- <div class="container has-text-right"> -->
        
      </div>
    </div>
  </div>
</template>

<script>
  import HashRebelMainLogo from "./icons/HashRebelMain.vue";
  import GitHubLogo from "./icons/GitHubOriginal.vue";
  import layoutStyleSheet from "!!sass-variable-loader!../assets/stylesheets/vars/layout.scss";

  export default {
    data(){
      return {
        githubIconAnchorHeight: layoutStyleSheet.gitHubIconAnchorHeight,
        githubIconAnchorWidth: layoutStyleSheet.gitHubIconAnchorWidth
      }
    },
    components: {
      hashRebelMainLogo: HashRebelMainLogo,
      githubLogo: GitHubLogo
    }
  }
</script>
