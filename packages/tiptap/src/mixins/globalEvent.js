export default {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    show() {
      this.opened = true;
    },
    hide() {
      this.opened = false;
    },
  },
};
