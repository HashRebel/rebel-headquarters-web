<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://github.com/HashRebel/rebel-headquarters-web/tree/master/docs"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://brianhenze.com"
          target="_blank"
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/HashRebel"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
