<script>
import { peerDependencies } from '@infopiphany/ui/package.json'
export default {
  name: 'InfopiphanyUIPeerDeps',
  computed: {
    peerDeps() {
      return peerDependencies
    },
  },

  methods: {
    installScript(pkg, ver) {
      return `yarn add ${pkg}@${ver}\r\n`;
    }
  }
}
</script>

<template>
  <div>
    <ul>
      <li v-for="(ver, pkg, i) in peerDeps" :key="i">
        {{ pkg }} - {{ ver }}
      </li>
    </ul>

    <div class="language- extra-class">
      <pre class="language-text"><code v-for="(ver, pkg, i) in peerDeps" :key="i">{{installScript(pkg, ver)}}</code></pre>
    </div>
  </div>
</template>
