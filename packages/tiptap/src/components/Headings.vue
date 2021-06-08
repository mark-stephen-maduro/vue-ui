<template>
  <BaseOnClickAway :do="hide">
    <div class="dropdown-container d-inline">
      <button class="menubar__button headings" @click="toggle">
        {{
          isActive.paragraph()
            ? 'Paragraph'
            : isActive.heading({ level: 1 })
            ? 'Heading 1'
            : isActive.heading({ level: 2 })
            ? 'Heading 2'
            : isActive.heading({ level: 3 })
            ? 'Heading 3'
            : 'Headings'
        }}
      </button>

      <div
        class="dropdown-container--menu shadow-sm"
        :class="[{ show: opened }, $style.dropdown]"
        @click.stop
      >
        <ul class="list-group">
          <li class="dropdown-item">
            <label
              class="menubar__button"
              :class="[{ 'is-active': isActive.paragraph() }, $style.alignment]"
              @click="commands.paragraph"
              >Paragraph</label
            >
          </li>

          <li class="dropdown-item" v-for="level in headingLevels" :key="level">
            <label
              class="menubar__button"
              :class="[
                { 'is-active': isActive.heading({ level: level }) },
                ,
                $style.alignment,
              ]"
              @click="commands.heading({ level: level })"
              >{{ `Heading ${level}` }}</label
            >
          </li>
        </ul>
      </div>
    </div>
  </BaseOnClickAway>
</template>

<script>
import BaseOnClickAway from './ClickAway.vue';
import global from '../mixins/globalEvent';

export default {
  mixins: [global],
  components: {
    BaseOnClickAway,
  },
  props: {
    headingLevels: {
      type: Number,
      default: 3,
      validator: function (value) {
        // The value must match one of these strings
        return [1, 2, 3, 4, 5].includes(Number(value));
      },
    },
  },

  inject: ['commands', 'isActive'],
};
</script>

<style lang="scss" module>
.alignment {
  width: 1rem;
  min-width: 110px !important;
  padding: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 30px !important;
}

:global(.show).dropdown {
  min-width: 110px !important;
  left: -1px !important;
  padding: 0;
  margin: 0;

  ul li {
    align-items: center;
    padding: 0 !important;
  }
}
</style>
