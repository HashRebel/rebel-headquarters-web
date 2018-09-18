<template>
  <section class="container">
    <div class="columns hr-dictionary">
      <div class="column is-5">
        <h1>hash</h1>
        <h2>/haSH/</h2>
        <h3>verb</h3>
        <ol>
          <li>
            A one way cryptographic function used in computer science to secure and ensure the integrity of data.
          </li>
          <li>
            In the blockchain, a hash has various uses and is the life line in ensuring trust between parties.
          </li>
        </ol>
        <div v-if="advancedMode">
          <h3>noun</h3>
          <ol>
            <li>
              An extract of the cannabis plant, containing concentrations of the psychoactive resins.
            </li>
          </ol>
        </div>
      </div>
      <div class="column is-5 is-offset-2 right">
        <h1>rebel</h1>
        <h2>/ˈrɛb(ə)l/</h2>
        <h3>noun</h3>
        <ol>
          <li>
            A person who resists the status quo through revolution in favor of progress for all.
          </li>
          <li>
            A person having membership with a group of raticals who opposes the Galactic Empire at all costs.
          </li>
        </ol>
      </div>
    </div>
    <div class="mission">
      <div class="columns">
        <div class="column is-9">
          <h1>
            Mission:
          </h1>
          <p>
            What does it mean to be a hash rebel?
            <br>
            To be a hash rebel means to dedicate oneself to challenging the status quo in order to advance the progress of all mankind through the use of technology such as blockchains, 3D printing, AI, and IOT. We believe these technologies will fundamentally reshape the world as we know it. Due to this, research, education, and development of these technologies are critical to the progress of humankind.
            <br> <!--TODO: I would like to make the end of this paragraph into bullet points. -->
            In the spirit of our fallen revolutionaries, we vow to apply all emerging technologies to form a much fairer and more equal society for all. Bringing democracy to the workplace and changing the way we organize; using automation in order to unlock a wealth of untapped intuition; providing a higher level of transparency within institutions are among the top priorities of the Hash Revolution.
            <!--TODO: In the spirit of our fallen revolutionaries, we vow to apply all emerging technologies to form a society of prosperity for ALL. We achieve that by bringing democracy to the workplace. By challenging the way we organize our institutions. Using automation in order to unlock a wealth of untapped human intuition. Providing a higher level of transparency in our governing bodies. And most of all, we achieve this by working together.-->
            <br>
            This can only be down together, so join us in putting our fists air and taking a stand. Let’s decentralize the world and take back our futures.
            <!-- TODO: So join us in putting our fists air in solidarity and let's get to work. It's time to decentralize the world and take back our futures!-->
          </p>
        </div>
      </div>
    </div>
    <div class="hr-my-work">
      <div class="columns">
        <div class="column is-5">
          <div class="avatar-container">
            <img
              src="@/assets/images/icons/hash_rebel/bullseye-optimized.svg"
              alt="bullseye logo"
              class="left-wm"
            >
            <img
              :src="avatar"
              alt="avatar 😎"
              class="avatar"
            >
          </div>
        </div>
        <div class="column is-5 is-offset-2">
          <div>
            <h1>
              Brian Henze
            </h1>
            <p>
              As a wee lad, I started off my tech adventures early by taking apart random household appliances just to see if I could put it back together. Today my passion is in building a better future by taking advantage of the hacker skills I have picked up along the way. In this ever change environment I believe it is important to always be pushing yourself forward to avoid becoming stale.
              <br>
              I am currently focusing on learning as much as I can about emerging technologies and learning the best practices of full stack development so that I can meet the growing need of a diverse set of clients.
            </p>
            <div class="has-text-centered-mobile">
              <nuxt-link
                class="hr-button"
                to="/resume"
              >
                See My Work
              </nuxt-link>
            </div>
          </div>
          <img
            class="right-wm"
            src="@/assets/images/icons/hash_rebel/bullseye-optimized.svg"
            alt="bullseye logo 🎯"
          >
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <!-- Make the following into a component" -->
      <div class="quote">
        <no-ssr>
          <p>
            <span class="icon"><i class="fas fa-quote-left"/></span> A social movement that only moves people is merely a revolt. A movement that changes both people and institutions is a revolution. <span class="icon"><i class="fas fa-quote-right"/></span>
          </p>
        </no-ssr>
        <footer>
          <i>- Martin Luther King</i>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import avatar from '@/assets/images/avatar-side-snow.jpg';

export default{
    data() {
        return {
            advancedMode: false,
            avatar
        };
    }
};
</script>

<style lang="scss" scoped>
.center{
    margin: auto;
    width: 50%;
}

.container {
    div{
        @include touch {
            padding: 0 1rem;
        }
    }
    h1{
      font-size: 3rem;
    }
}

.hr-dictionary {
    margin-bottom: 8rem;

    h2 {
        margin-top: 2rem;
        margin-bottom: 2rem;

        font: {
            size: 1.5rem;
            weight: medium;
        }
    }
    h3 {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        font: {
            size: 1rem;
            style: italic;
            weight: 300;
        }
    }
    ol {
        list-style-position: outside;
        @include mobile {
            margin-right: 1rem;
            margin-left: 1rem;
        }
    }
    ol li {
        display: list-item;
        padding-left: 0.5rem;
        margin-bottom: 0.75rem;
    }

    .right {
        margin-top: 10rem;
        @include mobile {
            margin-top: 3rem;
        }
    }

    @include mobile {
        h1{
            font-size: 3rem;
        }
    }
}

.mission {
    margin-bottom: 8rem;
}

.hr-my-work {
    position: relative;
    margin-bottom: 12rem;

    .avatar-container
    {
        position: relative;

        height: 30rem;
        width: 100%;
        .left-wm {
            position: absolute;
            height: auto;
            width: 20.5rem;
            opacity: 0.3;

            @include mobile {
                top: -1rem;
                left:-1rem;
            }
        }
        .avatar {
            position: absolute;
            top: 7rem;
            left: 8rem;
            border-radius: 50%;
            height: auto;
            width: 20.5rem;

            @include mobile {
                top: 6rem;
                left: 3rem;
            }
        }
    }
    .right-wm {
        position: absolute;
        z-index: -1; // Force to the background
        top: -30rem;
        right: -5rem;
        height: 45rem;
        width: 45rem;
        opacity: 0.16;

        @include touch {
            top: -35rem;
            right: -15rem;
        }

        @include mobile {
            top: 25rem;
            right: -20rem;
        }
    }
}

.quote {
    display: inline-block;
    margin: 0 10rem 6rem 10rem;
    position: relative;

    p {
      text-align: center;
    }

    font: {
        size: 1.5rem;
        weight: 300;
    }

    footer {
        margin-top: 1.5rem;
        color: $color-brand-primary;
    }
    .icon {
        color: $color-brand-primary;
        font-size: 1rem;
        padding-right: 2rem;
        padding-left: 2rem;
    }

    /* Media Queries:
     * *************************************************************************
     */
     @include touch {
        margin: 0 3rem 3rem;
    }
}
</style>
