<template>
  <div class="app-styles">
    <div class="container-sample border">
      <div class="window">
        <div class="browser-buttons">
          <div class="btn-1"></div>
          <div class="btn-2"></div>
        </div>
        <div class="browser-header d-flex align-items-center">
          <span class="text-white ml-3">
            <BaseIcon class="mb-1 text-warning" size="sm" name="info" />
            nfopiphany
            <BaseIcon class="text-warning" name="project-diagram" />
          </span>
        </div>
        <div class="bread">
          <div class="bread-1"></div>
          <div class="bread-separator">
            <BaseIcon class="mb-1 ml-2 mr-2" name="angle-right" size="sm" />
          </div>
          <div class="bread-2"></div>
        </div>

        <div class="content">
          <div class="empty-state-content">
            <span class="empty-state-icon">
              <BaseIcon class="reflect" name="box-open" />
            </span>
            <div class="title"> Assistant</div>
            <div class="description">
              An assistant helps your customers complete tasks and get
              information faster. It may clarify requests, search for answer
              from a knowledge base, and can also direct your customer to a
              human.
            </div>
            <div class="button-primary">
              <b-button variant="primary" squared>Create assistant</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyStateStarter',
}
</script>

<style lang="scss">
.window {
  // border: 2px solid #eaeaea;
  overflow: auto;
  min-width: 300px;
  .browser-header {
    height: 35px;
    background: #0078b7;
    span {
      font-weight: 600;

      svg {
        margin-right: -4px;
      }
    }
  }

  .browser-buttons {
    display: flex;
    height: 20px;
    justify-content: flex-end;
    align-items: center;
    background: #565656;
    padding: 10px;
    .btn-1,
    .btn-2 {
      height: 8px;
      width: 8px;
      background: #ff605c;
      border-radius: 50%;
      margin: 3px;

      &:not(.btn-2) {
        background: #ffbd44;
      }
    }
  }
}

.bread {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50;
  padding: 25px;
  background: white;
  border-left: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
}
.bread-1,
.bread-2 {
  width: 75px;
  height: 15px;
  background: #a8a8a8;
  margin: 5px;
}

.content {
  height: 450px;
  background: #f3f3f3;

  .empty-state {
    &-content {
      padding-left: 4.5rem;
      padding-right: 4.5rem;
      padding-top: 3rem;

      .title {
        padding-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .description {
        font-weight: 500;
        padding-top: 5px;
      }

      .button-primary {
        margin-left: 0px;
        margin-top: 1.5rem;
      }
    }

    &-icon {
      font-size: 4.5rem;
      color: #c5c2c2;

      .reflect {
        -webkit-box-reflect: below -8px -webkit-gradient(
            linear,
            right top,
            right bottom,
            from(transparent),
            to(rgba(255, 255, 255, 0.4))
          );
      }
    }
  }
}
</style>
