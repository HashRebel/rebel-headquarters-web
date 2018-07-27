<template>
  <section class="competencies">
    <h2>Competencies</h2>

    <div class="columns is-mobile skills">

      <div class="column is-one-quarter has-text-left ">
        <h3>Professional</h3>
        <ul class="professional">
          <li
            v-for="skill in professionalSkills"
            :key="skill.value.name"
          >
            <p>
              <span class="icon has-text-primary is-small">
                <i class="fas fa-check-circle fa-sm"/>
              </span> {{ skill.value.name }}
            </p>
          </li>
        </ul>
      </div>

      <div class="column has-text-left">
        <h3>Technical</h3>
        <div class="columns is-mobile">
          <div
            v-for="skill in technicalSkills"
            :key="skill.value.category"
            class="column"
          >
            <h4>
              {{ skill.value.category }}
            </h4>
            <ul>
              <li
                v-for="data in skill.value.data"
                :key="data.value.name"
              >
                <p>
                  {{ data.value.name }}
                </p>
                <progress
                  :value="data.value.experience"
                  class="progress is-primary is-small"
                  max="100"
                >
                  {{ data.value.experience }}%
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
        professionalSkills: {
            type: Array,
            required: true,
            validator(value) {
                if(true) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        technicalSkills: {
            type: Array,
            required: true,
            validator(value) {
                if(true) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    // data() {
    //     return {
    //     };
    // },
    // computed: {
    // },
    // methods:{
    // },
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
