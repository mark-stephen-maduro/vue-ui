<script>
export default {
  name: 'BaseLoading',
  functional: true,
  render(h, { data, children }) {
    return (
      <div class="input-loading-indicator" {...data}>
        <BaseIcon name="spinner" class="animation" />
        {children}
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.input-loading-indicator {
  display: flex;
  &.inline {
    display: inline-flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .animation {
    animation: rotating 0.7s linear infinite;
    width: 16px;
    height: 10px;
    border-radius: 50%;
    border: transparent 2px solid;
  }

  &.primary > .animation {
    color: #42b983;
  }

  &.small > .animation {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }

  &.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    > .animation {
      margin-bottom: 32px;
    }
  }
}

@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
