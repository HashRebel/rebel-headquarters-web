<template>
  <table class="table">
    <tbody>
      <tr>
        <th>
          <span class="icon is-medium">
            <i class="fas fa-thumbtack fa-2x" title="Location"></i>
            </span>
        </th>
        <th>
          <a :href="locationRef">{{ location }}</a>
        </th>
      </tr>
      <tr>
        <th>
          <span class="icon is-medium">
            <i class="fas fa-phone fa-2x" title="Phone"></i>
          </span>
        </th>
        <th>
          <a :href="phoneRef">{{ phone }}</a>
        </th>
      </tr>
      <tr>
        <th>
          <span class="icon is-medium">
            <i class="fas fa-envelope fa-2x" title="Email"></i>
          </span>
        </th>
        <th>
          <a :href="emailRef">{{ email }}</a>
        </th>
      </tr>
      <tr>
        <th>
          <span class="icon is-medium">
            <i class="fas fa-globe fa-2x" title="Website"></i>
          </span>
        </th>
        <th>
          <a :href="webRef">{{ web }}</a>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      phone: String,
      phoneRef: String,
      web: String,
      webRef: String,
      email: String,
      emailRef: String,
      location: String,
      locationRef: String
    }
  }
</script>

<style lang="sass" scoped>

</style>
