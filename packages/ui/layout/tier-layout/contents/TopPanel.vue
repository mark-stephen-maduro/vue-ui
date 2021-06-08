<template>
  <b-col cols="12" class="tier-layout--tier2">
    <div class="mb-2">
      <div class="d-flex justify-content-between mb-2">
        <div>
          <slot name="title"></slot>
        </div>
        <div>
          <slot name="actions"></slot>
        </div>
      </div>

      <slot></slot>
    </div>
  </b-col>
</template>
