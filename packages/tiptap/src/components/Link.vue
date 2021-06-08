<template>
  <div class="dropdown-container d-inline">
    <button
      class="menubar__button"
      v-tooltip.top="'Link'"
      type="button"
      @click="setLink(getMarkAttrs('link'))"
    >
      <ExtensionIcons name="link" />
    </button>

    <div
      class="dropdown-container--menu shadow-sm"
      :class="[{ show: opened }, $style.dropdown]"
      @click.stop
    >
      <ul class="list-group">
        <li class="dropdown-item">
          <div>
            <input
              class="d-inline"
              type="text"
              v-model="linkUrl"
              placeholder="https://"
              ref="linkInput"
              @keydown.esc="hideLinkMenu"
              @keydown.enter="setLinkUrl(commands.link, linkUrl)"
            />
            <div
              class="text-white"
              @click="setLinkUrl(commands.link, linkUrl)"
              style="cursor: pointer"
            >
              <ExtensionIcons name="link" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
import global from "../mixins/globalEvent";
export default {
  inject: ["commands", "activeMarks"],
  components: { ExtensionIcons },
  props: ["getMarkAttrs"],
  mixins: [global],
  data() {
    return {
      linkUrl: null
    };
  },

  methods: {
    setLink(attrs) {
      if (this.opened) {
        this.linkUrl = null;
        return this.hide();
      }
      this.linkUrl = attrs.href;
      return this.show();
    },

    setLinkUrl(command, url) {
      // fix url t o accept
      command({ href: url });
      this.opened = false;
    }
  }
};
</script>

<style lang="scss" module>
.alignment {
  width: 1rem;
  min-width: 100px !important;
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
  min-width: 150px !important;
  left: -125px !important;
  padding: 0;
  margin: 0;

  ul li {
    align-items: center;
    padding: 0 !important;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    div {
      height: 30px;
      input {
        caret-color: white;
        border: none;
        background: transparent;
        color: rgb(86, 138, 86) !important;
        margin-right: 5px !important;
        padding-left: 8px !important;
        width: 250px;
        font-weight: 500;
      }

      div {
        display: inline;
        padding-right: 10px;
        margin-bottom: 2px;
      }
    }

    button {
      background: transparent;
      border: 0;
      color: #fff;
      cursor: pointer;
      height: 20px;
      width: 100%;
      font-size: 0.8rem;
      vertical-align: top;

      &:hover {
        background-color: transparent;
      }

      &:active {
        background-color: transparent !important;
        color: #fff !important;
        outline: none !important;
        box-shadow: none !important;
      }

      &.is-active {
        background-color: transparent;
      }
    }
  }
}
</style>
