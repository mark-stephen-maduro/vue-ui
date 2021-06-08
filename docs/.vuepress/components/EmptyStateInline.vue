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
            <div class="empty-state-content-left">
              <span class="empty-state-icon">
                <BaseIcon class="reflect" name="box-open" />
              </span>
            </div>

            <div class="empty-state-content-right">
              <div class="title"> In-line documentation</div>
              <div class="description">
                Use this paragraph to include any background information, and/or
                explanations of terms or concepts that can educate a user and
                assist them in making decisions.
                <br />
                <br />
                You can also use this space to highlight benefits of usage to
                pique interest and help drive engagement.
                <br />
                <br />
                Include instructional text here.
              </div>
              <div class="button-primary">
                <b-button variant="primary" squared>Action</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyStateInline',
}
</script>

<style lang="scss" scoped>
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
      display: flex;
      &-left {
        display: flex;
        flex: 0 0 50%;
        justify-content: center;
        align-items: center;
      }

      &-right {
        flex: 0 0 50%;
      }

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
