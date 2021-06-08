<template>
  <div class="app-styles">
    <br />
    <div>
      <ul class="list-color">
        <li
          v-for="color in colors"
          :key="color"
          :style="{ backgroundColor: color }"
          class="d-flex justify-content-center align-items-center"
        >
          <span>{{ color.toUpperCase() }}</span>
        </li>
        <span class="text-muted">{{title}}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: [Array, String],
      default: ''
    },
    title: {
      type: [String],
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
.list-color {
  list-style-type: none;

  li {
    position: relative;
    display: block;
    float: left;
    font-size: 0.9rem;
    font-weight: 600;
    width: 20%;
    height: 100px;
    top: 0;
    transition: top 0.2s ease-out;
    cursor: pointer;
    &:hover {
      top: -5px;
    }

    span {
      font-weight: 600;
      font-size: 0.8rem;
    }
  }

  span {
    font-weight: 600;
    font-size: 0.8rem;
  }
}
</style>
