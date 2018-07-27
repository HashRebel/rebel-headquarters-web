<template>
  <section class="hero">
    <div class="hero-body">
      <div class="name">
        <h1>
          <span
            class="firstName has-text-grey">
            {{ personal.first }}
          </span>
          <span
            class="lastName">
            {{ personal.last }}
          </span>
        </h1>
      </div>
      <div class="columns is-mobile">
        <div class="column is-two-fifths">
          <img
            :src="getBaseUrl() + personal.avatar.path"
            alt="avatar 😎"
            class="avatar"
          >
        </div>
        <div class="column">
          <div class="overview">
            <h2>
              {{ title }}
            </h2>
            <p class="sumary">
              {{ summary }}
            </p>
            <!-- <contact-panel
              :phone="personal.phone"
              :phone-ref="TODO"
              :web="personal.web"
              :web-ref="TODO"
              :email="personal.email"
              :email-ref="TODO"
              :location="personal.location"
              :location-ref="TODO"
            /> -->
            <div class="quote">
              <no-ssr>
                <p>
                  <span class="icon"><i class="fas fa-quote-left"/></span>
                  {{ quote.value }}
                  <span class="icon"><i class="fas fa-quote-right"/></span>
                </p>
              </no-ssr>
              <footer>
                <p>
                  <i>{{ quote.author }}</i>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactPanel from '@/components/ContactPanel.vue';

export default {
    components: {
        contactPanel
    },
    props: {
        personal: {
            type: Object,
            required: true,
            validator(value) {
                if(value.hasOwnProperty('first') &&
                   value.hasOwnProperty('last') &&
                   value.hasOwnProperty('phone') &&
                   value.hasOwnProperty('email') &&
                   value.hasOwnProperty('avatar')){
                    return true;
                } else {
                    return false;
                }
            }
        },
        quote: {
            type: Object,
            required: true,
            validator(value) {
                if(value.hasOwnProperty('content') &&
                   value.hasOwnProperty('author')){
                    return true;
                } else {
                    return false;
                }
            }
        },
        summary: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    methods:
    {
        getBaseUrl: () => {
            return process.env.cockpitBaseUrl + '/';
        }
    }
};
</script>

<style lang="scss" scoped>
.name{
  margin-bottom: $default-section-margin;
}

.firstName {
  font-size: 5rem;
  font-weight: 100;
  text-transform: lowercase;
}

.lastName {
  text-transform: uppercase;
  margin-left: 0.5rem;
  font-size: 8rem;
  font-weight: 700;
  font-style: bold;
}

.avatar {
  border: 0.15rem solid $color-brand-primary-light-er;
  border-radius: 50%;
}

.overview{
  margin-left: 4rem;
}

.sumary {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.quote {
  p {
    text-align: center;
    font-size: 1.2rem;
  }

  footer {
    color: $color-brand-primary;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .icon {
    color: $color-brand-primary;
    font-size: .75rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
</style>
