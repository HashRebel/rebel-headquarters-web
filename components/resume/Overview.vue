<template>
  <section class="hero">
    <div class="hero-body">
      <div class="name">
        <h1>
          <span class="firstName has-text-grey">
            {{ personal.first }}
          </span>
          <!-- <br> -->
          <span class="lastName">
            {{ personal.last }}
          </span>
        </h1>
      </div>
      <div class="columns is-mobile">
        <div class="column is-two-fifths">
          <img
            :src="require('@/assets/images/' + personal.avatar + '.jpg')"
            alt="avatar 😎"
            class="avatar"
          >
        </div>
        <div class="column">
          <div class="overview">
            <h2>
              Entrepreneur, Developer, Consultant
            </h2>
            <p class="sumary">
              Software engineer with more than 12 years of experience in enterprise level software development using a wide varity of technologies and software methodologies. Collaborative communicator that freely shares information within a diverse team, across functional lines and across multiple disciplines.
            </p>
            <contact-panel
              :phone="personal.phone"
              :phone-ref="personal.phoneRef"
              :web="personal.web"
              :web-ref="personal.webRef"
              :email="personal.email"
              :email-ref="personal.emailRef"
              :location="personal.location"
              :location-ref="personal.locationRef"
            />
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
                    value.hasOwnProperty('avatar') &&
                    value.hasOwnProperty('last') &&
                    value.hasOwnProperty('phone') &&
                    value.hasOwnProperty('phoneRef') &&
                    value.hasOwnProperty('web') &&
                    value.hasOwnProperty('webRef') &&
                    value.hasOwnProperty('email') &&
                    value.hasOwnProperty('emailRef') &&
                    value.hasOwnProperty('location') &&
                    value.hasOwnProperty('locationRef'))
                {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    data() {
        return {
            quote: {
                value: 'Somewhere, something incredible is waiting to be known.',
                author: 'Carl Sagan'
            }
        };
    },
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
