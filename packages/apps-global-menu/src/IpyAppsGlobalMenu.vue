<template>
  <div class="application-dropdown">
    <div class="application-dropdown--button" @click="buttonToggle">
      <slot> Subscriptions </slot>
    </div>

    <!-- MENU -->
    <IpyClickAway :do="toggleMenu">
      <div class="application-dropdown--menu" :class="{ show: showMenu }">
        <ul class="application-dropdown--group">
          <IpyAppMenuItem
            v-for="(item, index) in subscription"
            :key="index"
            :app="item"
            class="application-dropdown--apps"
            @click="openApp(item)"
          >
            <slot name="app" v-bind="{ item, subscription }"> </slot>
          </IpyAppMenuItem>
        </ul>

        <div class="application-dropdown--footer--bg">
          <div class="application-dropdown--divider"></div>

          <ul v-if="feature.defaultFooter" class="application-dropdown--footer">
            <li @click="openApp({ app_name: 'configuration' })">
              <span class="application-dropdown--title"> Configuration </span>
              <div class="application-dropdown--title--sub"
                >Configure the application's flow based on your organization's
                policy.</div
              >
            </li>
            <li @click="openApp({ app_name: 'subscriptions' })">
              <span class="application-dropdown--title"> Subscriptions </span>
              <div class="application-dropdown--title--sub"
                >Manage recurring payments and subscriptions.</div
              >
            </li>
          </ul>
        </div>
      </div>
    </IpyClickAway>
  </div>
</template>

<script>
import { IpyClickAway } from '@infopiphany/ui'
import IpyAppMenuItem from './IpyAppMenuItem.vue'

export default {
  name: 'IpyAppsGlobalMenu',
  components: { IpyClickAway, IpyAppMenuItem },

  props: {
    subscription: {
      type: Array,
      default: () => [],
    },
    customIcon: {
      type: Boolean,
      default: false,
    },
    feature: {
      type: Object,
      default: () => {
        return { defaultFooter: true }
      },
    },
    action: {
      type: Function,
      default: (v) => v,
    },
    configuration: {
      type: Function,
      default: (v) => v,
    },
    subscriptionConfig: {
      type: Function,
      default: (v) => v,
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = false
    },
    buttonToggle() {
      this.showMenu = !this.showMenu
    },
    openApp(app) {
      this.toggleMenu()
      this.action()
      if (app.app_name === 'configuration') {
        this.configuration()
      }

      if (app.app_name === 'subscriptions') {
        this.subscriptionConfig()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './style.scss';
.application-dropdown {
  position: relative;
  li {
    padding: 1rem 1.5rem 0.5rem 1.5rem;
    text-align: left;
    list-style: none;
    white-space: initial;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;

    &:not(:last-child) {
      flex-basis: 50%;
    }
    &:hover a .application-dropdown--title > .icon {
      @extend %hover;
    }
  }

  &--menu {
    color: #2e2e2e;

    @extend %dropdown-menu--ease;
    @extend %dropdown-menu-style;

    position: absolute !important;
    line-height: 20px;
    border-radius: 3px;
    left: 0 !important;
    text-align: left;
    font-size: 0.9rem;
    min-width: 600px;
    max-width: 600px;

    @media (max-width: 575.98px) {
      width: 100%;
      min-width: 100%;
    }
  }

  &--menu.show {
    @extend %dropdown-menu--show;

    line-height: 20px;
    border-radius: 3px;
    display: block;
    clear: both;
    white-space: nowrap;
    text-align: left;
    font-size: 0.9rem;
    transform: translateY(2px);
  }

  &--link {
    @extend %link;
  }

  &--title {
    @extend %title;
    .icon {
      @extend %icon;
    }

    &--sub {
      @extend %sub;
    }
  }

  &--button {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: fit-content;
    cursor: pointer;
  }

  &--group {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5rem 0 0.5rem 0;
  }

  &--divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
  }

  &--footer {
    padding-left: 0;
    &--bg {
      background-color: #f7fafc;
      padding-bottom: 1.3rem;
    }
  }
}
</style>
