<template>
  <section class="history">
    <h2>History</h2>

    <section class="employment">
      <h3>Employment</h3>
      <div
        v-for="experience in experience"
        :key="experience.value.company"
        class="columns is-mobile experience"
      >
        <div class="column is-one-fifth">
          <div class="columns is-mobile">
            <div class="column">
              <img
                :src="getBaseUrl() + experience.value.logo.path"
                alt="copany logo"
              >
            </div>
          </div>
        </div>
        <div class="column">
          <div class="job-card">
            <div class="duration">
              <div class="date">
                <p class="month"> {{ experience.value.fromMonth }} </p>
                <p class="year"> {{ experience.value.fromYear }} </p>
              </div>
              <div class="date">
                <p class="year"> &thinsp; - &thinsp;</p>
              </div>
              <div class="date">
                <p class="month"> {{ experience.value.toMonth }} </p>
                <p class="year"> {{ experience.value.toYear }} </p>
              </div>
            </div>

            <div>
              <h3>{{ experience.value.title }}</h3>
              <h4 class="company">{{ experience.value.company }}</h4>
              <h5 >{{ experience.value.location.address.slice(0, -26) }}</h5>
            </div>

            <p class="history-content">
              {{ experience.value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="intern">
      <h3>Internships</h3>
      <div class ="columns is-mobile has-text-centered">
        <div
          v-for="internship in internships"
          :key="internship.value.company"
          class="column"
        >
          <div>
            <div class="date">
              <p class="month"> {{ internship.value.fromMonth }} </p>
              <p class="year"> {{ internship.value.fromYear }} </p>
            </div>
            <div class="date">
              <p class="year"> &thinsp; - &thinsp;</p>
            </div>
            <div class="date">
              <p class="month"> {{ internship.value.toMonth }} </p>
              <p class="year"> {{ internship.value.toYear }} </p>
            </div>
          </div>

          <img
            :src="getBaseUrl() + internship.value.logo.path"
            alt="company logo"
          >
          <h4 class="company">{{ internship.value.company }}</h4>
          <h5>{{ internship.value.location.address.slice(0, -26) }}</h5>
        </div>
      </div>

    </section>

    <section class="education">
      <h3>Education</h3>
      <div class="columns is-mobile has-text-centered">
        <div
          v-for="school in education"
          :key="school.value.school"
          class="column"
        >
          <img
            :src="getBaseUrl() + school.value.logo.path"
            alt="school logo"
          >
          <h4>{{ school.value.school }}</h4>
          <h5>{{ school.value.degree }}</h5>
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
        experience: {
            type: Array,
            required: true,
            validator(value) {
                //TODO: add validation
                if(true) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        internships: {
            type: Array,
            required: true,
        },
        education: {
            type: Array,
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
    white-space: pre-line;
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
