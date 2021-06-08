<template>
  <b-col cols="12" class="tier-layout--tier3 overflow-hidden">
    <div class="pt-1 pb-2">
      <div class="d-flex justify-content-between mb-2">
        <div>
          <slot name="title"></slot>
        </div>
        <div>
          <slot name="actions"></slot>
        </div>
      </div>
    </div>

    <div class="tier-layout--tier3-content overflow-auto">
      <slot></slot>
    </div>
    <div class="mt-2 mb-2 w-100">
      <slot name="pagination"></slot>
    </div>
  </b-col>
</template>
