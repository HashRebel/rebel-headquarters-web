<template>
  <section class="competencies">
    <h2>Competencies</h2>

    <div class="columns is-mobile skills">

      <div class="column is-one-quarter has-text-left ">
        <h3>{{ skills.professional.catagory }} </h3>
        <ul class="professional">
          <li
            v-for="skill in skills.professional.data"
            :key="skill.name"
          >
            <p>
              <span class="icon has-text-primary is-small">
                <i class="fas fa-check-circle fa-sm"/>
              </span> {{ skill.name }}
            </p>
          </li>
        </ul>
      </div>

      <div class="column has-text-left">
        <h3>Technical</h3>
        <div class="columns is-mobile">
          <div
            v-for="skill in skills.technological"
            :key="skill.catagory"
            class="column"
          >
            <h4>
              {{ skill.catagory }}
            </h4>
            <ul>
              <li
                v-for="data in skill.data"
                :key="data.name"
              >
                <p>
                  {{ data.name }}
                </p>
                <progress
                  :value="data.experience"
                  class="progress is-primary is-small"
                  max="100"
                >
                  {{ data.experience }}%
                </progress>
              </li>
            </ul>
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
        skills: {
            type: Object,
            required: true,
            validator(value) {
                if(value.hasOwnProperty('professional') &&
                    value.hasOwnProperty('technological')) {
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
.competencies {
  margin-top: 4rem;

  h4, h3 {
    margin-bottom: 1rem;
  }

  li {
    display: block;
    margin-bottom: 0.75rem;
  }

  .skills {
    margin-top: 3rem;
  }

  .professional {
    margin-top: 4rem;
  }
}
</style>
