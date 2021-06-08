<template>
  <BaseOnClickAway :do="hide">
    <div class="dropdown-container d-inline">
      <button
        class="menubar__button"
        v-tooltip.top="'Alignment'"
        @click="toggle"
      >
        <ExtensionIcons :name="`align-${icon}`" />
      </button>

      <div
        class="dropdown-container--menu shadow-sm"
        :class="[{ show: opened }, $style.dropdown]"
      >
        <ul class="list-group">
          <li class="dropdown-item">
            <button
              class="menubar__button"
              :class="$style.alignment"
              @click="commandHandler(commands, 'left')"
            >
              <ExtensionIcons name="align-left" />
            </button>
          </li>
          <li class="dropdown-item">
            <button
              class="menubar__button"
              :class="$style.alignment"
              @click="commandHandler(commands, 'right')"
            >
              <ExtensionIcons name="align-right" />
            </button>
          </li>
          <li class="dropdown-item">
            <button
              class="menubar__button"
              :class="$style.alignment"
              @click="commandHandler(commands, 'center')"
            >
              <ExtensionIcons name="align-center" />
            </button>
          </li>
          <li class="dropdown-item">
            <button
              class="menubar__button"
              :class="$style.alignment"
              @click="commandHandler(commands, 'justify')"
            >
              <ExtensionIcons name="align-justify" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </BaseOnClickAway>
</template>

<script>
import global from '../mixins/globalEvent';
import BaseOnClickAway from './ClickAway.vue';
import ExtensionIcons from '../icons/ExtensionIcons.vue';

export default {
  inject: ['commands'],
  mixins: [global],
  components: {
    BaseOnClickAway,
    ExtensionIcons,
  },
  data() {
    return {
      icon: 'left',
    };
  },

  methods: {
    commandHandler(command, direction) {
      this.icon = direction;
      command[`align_${direction}`]();
    },
  },
};
</script>

<style lang="scss" module>
.alignment {
  width: 1rem;
  min-width: 1rem !important;
  padding: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

:global(.show).dropdown {
  min-width: 2rem !important;
  left: 0px !important;
  padding: 0;
  margin: 0;

  ul li {
    align-items: center;
    padding: 0 !important;
  }
}
</style>
