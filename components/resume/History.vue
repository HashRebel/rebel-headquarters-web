<template>
  <section class="history">
    <h2>History</h2>

    <section class="employment">
      <h3>Employment</h3>
      <div
        v-for="experience in personal.experience"
        :key="experience.company"
        class="columns is-mobile experience"
      >
        <div class="column is-one-fifth">
          <div class="columns is-mobile">
            <div class="column">
              <img
                :src="experience.logo"
                :alt="experience.logoAlt"
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="job-card">
            <div class="duration">
              <div class="date">
                <p class="month"> {{ experience.fromMonth }} </p>
                <p class="year"> {{ experience.fromYear }} </p>
              </div>
              <div class="date">
                <p class="year"> &thinsp; - &thinsp;</p>
              </div>
              <div class="date">
                <p class="month"> {{ experience.toMonth }} </p>
                <p class="year"> {{ experience.toYear }} </p>
              </div>
            </div>

            <div>
              <h3>{{ experience.title }}</h3>
              <h4 class="company">{{ experience.company }}</h4>
              <h5 >{{ experience.location }}</h5>
            </div>

            <p
              v-for="description in experience.description"
              :key="description"
              class="history-content"
            >
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="intern">
      <h3>Internships</h3>
      <div class ="columns is-mobile has-text-centered">
        <div
          v-for="internship in personal.internships"
          :key="internship.company"
          class="column"
        >
          <div>
            <div class="date">
              <p class="month"> {{ internship.fromMonth }} </p>
              <p class="year"> {{ internship.fromYear }} </p>
            </div>
            <div class="date">
              <p class="year"> &thinsp; - &thinsp;</p>
            </div>
            <div class="date">
              <p class="month"> {{ internship.toMonth }} </p>
              <p class="year"> {{ internship.toYear }} </p>
            </div>
          </div>

          <img
            :src="internship.logo"
            :alt="internship.logoAlt"
          >
          <h4 class="company">{{ internship.company }}</h4>
          <h5>{{ internship.location }}</h5>
        </div>
      </div>

    </section>

    <section class="education">
      <h3>Education</h3>
      <div class="columns is-mobile has-text-centered">
        <div
          v-for="school in personal.education"
          :key="school.school"
          class="column"
        >
          <img
            :src="school.logo"
            :alt="school.logoAlt"
          >
          <h4>{{ school.school }}</h4>
          <h5>{{ school.degree }}</h5>
        </div>
      </div>
    </section>
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
                if(value.hasOwnProperty('experience') &&
                    value.hasOwnProperty('internships') &&
                    value.hasOwnProperty('education')) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
.history {
  figure {
    margin-left: auto;
  }

  h2 {
    margin-bottom: 2rem;
  }

  h4 {
    margin-top: 0.75rem;
    font-weight: 400;
  }

  .history-content {
    margin-top: 1.25rem;
  }

  .experience {
    margin-top: 4rem;
  }

  .job-card {
    margin-left: 4rem;
  }

  .month {
    color: grey;
    line-height: .75;
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: left;
  }

  .duration {
    font-family: $font-family-primary;
    float: right;
  }

  .year {
    font-weight: 600;
    font-size: 1.5rem;
    color: $color-brand-primary;
  }

  .date {
    display: inline-block;
  }

  .company {
    font-size: 1.25rem;
  }

  .intern{
    margin-top: $default-section-margin;
    h2{
      margin-bottom: 4rem;
    }
  }

  .education {
      margin-top: $default-section-margin;
      margin-bottom: $default-section-margin;

    h2{
      margin-bottom: 4rem;
    }
  }
}
</style>
