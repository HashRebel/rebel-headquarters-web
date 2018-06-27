<template>
  <footer class="footer">
    <div class="container content">
      <div class="columns">
        <div class="column">
          <p class="fix-bottom">© 2018 Hash Rebel</p>
        </div>
        <div class="column">
          <img
            class="fix-bottom center"
            src="@/assets/images/icons/hash_rebel/main-fist-code-inlay-optimized.svg"
            height=100px
            width=100px
          >
        </div>
        <div class="column">
          <div class="fix-bottom fix-right">
            <ul>
              <li v-for="icon in socialMediaConfig.iconInfo" :key="icon.name">
                <a
                  :href="icon.url"
                  target="_blank"
                >
                  <img
                    width="30"
                    height="30"
                    :src="icon.imgSrc"
                    :alt="icon.name"
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import gitHubIcon from "@/assets/images/icons/social-media/github-original.svg";
  import steemitIcon from "@/assets/images/icons/social-media/steemit-original.svg";
  import telegramIcon from "@/assets/images/icons/social-media/telegram-original.svg";
  import mediumIcon from "@/assets/images/icons/social-media/medium-original.svg";
  import dockerIcon from "@/assets/images/icons/social-media/docker-original.svg";
  import twiterIcon from "@/assets/images/icons/social-media/twitter-original.svg";

  export default {
    data() {
      return {
        socialMediaConfig: {
          iconInfo: [{
              name: "GitHub",
              url: "https://github.com/bhenze",
              imgSrc: gitHubIcon
            },
            {
              name: "Steemit",
              url: "https://steemit.com/@hashrebel",
              imgSrc: steemitIcon
            },
            {
              name: "Telegram",
              url: "https://t.me/hash_rebel",
              imgSrc: telegramIcon
            },
            {
              name: "Medium",
              url: "https://medium.com/@henze.brian",
              imgSrc: mediumIcon
            },
            {
              name: "DockerHub",
              url: "https://hub.docker.com/u/hashrebel/",
              imgSrc: dockerIcon
            },
            {
              name: "Twitter",
              url: "httpshttps://twitter.com/HashRebel",
              imgSrc: twiterIcon
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-bottom: 0;

  padding: 24rem 1.5rem 1rem 1.5rem;
  //margin: 24rem 1.5rem 1rem 1.5rem;
  background: {
    image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000000), url('~/assets/images/beetle-profile-crop.jpg');
    position: center bottom;
    repeat: no-repeat;
    attachment: fixed;
    size: 100% auto;
  }
  li {
    display: inline-block;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
  a {
    text-decoration: none;
    &:hover,
    &:active {
      opacity: 0.5;
    }
  }
  .column {
    position: relative;
  }
  .fix-bottom {
    position: absolute;
    bottom: 0.5rem;
  }
  .center{
    @include center-absolute-element();
  }
  .fix-right {
    right: 0;
  }
}
</style>
