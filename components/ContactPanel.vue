<template>
  <table class="table is-hoverable is-fullwidth">
    <tbody>
      <tr>
        <td>
          <span class="icon is-medium">
            <i class="fas fa-thumbtack fa-2x" title="Location"></i>
          </span>
        </td>
        <td>
          <a :href="locationRef" target="_blank">{{ location }}</a>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon is-medium">
            <i class="fas fa-phone fa-2x" title="Phone"></i>
          </span>
        </td>
        <td>
          <a :href="phoneRef" target="_blank">{{ phone }}</a>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon is-medium">
            <i class="fas fa-envelope fa-2x" title="Email"></i>
          </span>
        </td>
        <td>
          <a :href="emailRef" target="_blank">{{ email }}</a>
        </td>
      </tr>
      <tr>
        <td>
          <span class="icon is-medium">
            <i class="fas fa-globe fa-2x" title="Website"></i>
          </span>
        </td>
        <td>
          <a :href="webRef" target="_blank">{{ web }}</a>
        </td>
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

<style lang="scss" scoped>
.table{
  font-size: 1.2rem;
  font-weight: 400
}
</style>
