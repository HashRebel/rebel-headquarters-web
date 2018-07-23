<template>
  <footer class="footer">
    <div class="container content">
      <div class="columns">
        <div class="column">
          <p class="fix-bottom">{{copyRight}}</p>
        </div>
        <div class="column">
          <img
            class="logo fix-bottom center"
            src="@/assets/images/icons/hash_rebel/main-fist-code-inlay-optimized.svg"
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
                    class="logo-social"
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
  import gitHubIcon from '@/assets/images/icons/social-media/github-original.svg';
  import steemitIcon from '@/assets/images/icons/social-media/steemit-original.svg';
  import telegramIcon from '@/assets/images/icons/social-media/telegram-original.svg';
  import mediumIcon from '@/assets/images/icons/social-media/medium-original.svg';
  import dockerIcon from '@/assets/images/icons/social-media/docker-original.svg';
  import twiterIcon from '@/assets/images/icons/social-media/twitter-original.svg';

  export default {
    data() {
      return {
        socialMediaConfig: {
          iconInfo: [{
              name: 'GitHub',
              url: 'https://github.com/bhenze',
              imgSrc: gitHubIcon
            },
            {
              name: 'Steemit',
              url: 'https://steemit.com/@hashrebel',
              imgSrc: steemitIcon
            },
            {
              name: 'Telegram',
              url: 'https://t.me/hash_rebel',
              imgSrc: telegramIcon
            },
            {
              name: 'Medium',
              url: 'https://medium.com/@henze.brian',
              imgSrc: mediumIcon
            },
            {
              name: 'DockerHub',
              url: 'https://hub.docker.com/u/hashrebel/',
              imgSrc: dockerIcon
            },
            {
              name: 'Twitter',
              url: 'https://twitter.com/HashRebel',
              imgSrc: twiterIcon
            }
          ]
        },
        copyRight: '© 2018 Hash Rebel'
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-bottom: 0;
  padding: 40vw 0rem 3rem 0rem;
  text-align: center;

  background: {
    image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #000000), url('~/assets/images/beetle-profile-crop.jpg');
    position: center bottom;
    repeat: no-repeat;
    attachment: fixed;
    size: 100% auto;
  }

  .logo {
    height: 6rem;
    width: auto;

    &-social{
      height: 1.5rem;
      width: autop;
    }

    @include tablet{
      height: 8rem;
      width: auto;

      &-social{
        height: 2rem;
        width: autop;
      }
    }
  }

  ul {
    margin-top: 0;
    margin-left: 0;
  }
  li {
    display: inline-block;
    margin-right: 0.4rem;
    margin-left: 0.4rem;
  }
  a {
    text-decoration: none;
    &:hover,
    &:active {
      opacity: 0.5;
    }
  }
  p {
    text-align: center;
  }

  @include mobile{
    padding: 15vw 0rem 1.5rem 0rem;
    background-size: auto 50vw;

    .column{
      margin: 2.5vw 0;
      padding: 0 0;
    }
  }

  @include tablet{
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
}
</style>
