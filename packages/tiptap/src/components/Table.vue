<template>
  <div class="d-inline">
    <button
      class="menubar__button"
      v-tooltip.top="'Table'"
      @click="
        commands.createTable({
          rowsCount: 3,
          colsCount: 3,
          withHeaderRow: false,
        })
      "
    >
      <icon-table height="1rem" class="mb-1" />
    </button>

    <span v-if="isActive.table()">
      <button
        class="menubar__button"
        v-tooltip.top="'Remove table'"
        title="Remove table"
        @click="commands.deleteTable"
      >
        <icon-remove-table height="1rem" class="mb-1" />
      </button>
      <button
        class="menubar__button"
        v-tooltip.top="'Add column'"
        @click="commands.addColumnBefore"
      >
        <icon-add-col-before height="1rem" class="mb-1" />
      </button>
      <button
        class="menubar__button"
        v-tooltip.top="'Add column after'"
        @click="commands.addColumnAfter"
      >
        <icon-add-col-after height="1rem" class="mb-1" />
      </button>
      <button
        class="menubar__button"
        v-tooltip.top="'Delete column'"
        @click="commands.deleteColumn"
      >
        <icon-delete-col height="1rem" class="mb-1" />
      </button>
      <button class="menubar__button" v-tooltip.top="'Add row'" @click="commands.addRowBefore">
        <icon-add-row-before height="1rem" class="mb-1" />
      </button>
      <button class="menubar__button" v-tooltip.top="'Add row after'" @click="commands.addRowAfter">
        <icon-add-row-after height="1rem" class="mb-1" />
      </button>
      <button class="menubar__button" v-tooltip.top="'Delete row'" @click="commands.deleteRow">
        <icon-delete-row height="1rem" class="mb-1" />
      </button>
      <button
        class="menubar__button"
        v-tooltip.top="'Merge cells'"
        @click="commands.toggleCellMerge"
      >
        <icon-combine-cells height="1rem" class="mb-1" />
      </button>
    </span>
  </div>
</template>

<script>
import iconAddColAfter from "../icons/IconAddColAfter.vue";
import iconAddColBefore from "../icons/IconAddColBefore.vue";
import iconAddRowAfter from "../icons/IconAddRowAfter.vue";
import iconAddRowBefore from "../icons/IconAddRowBefore.vue";
import iconCombineCells from "../icons/IconCombineCells.vue";
import iconDeleteCol from "../icons/IconDeleteCol.vue";
import iconDeleteRow from "../icons/IconDeleteRow.vue";
import iconRemoveTable from "../icons/IconRemoveTable.vue";
import iconTable from "../icons/IconTable.vue";

export default {
  inject: ["commands", "isActive"],
  components: {
    iconAddColAfter,
    iconAddColBefore,
    iconAddRowAfter,
    iconAddRowBefore,
    iconCombineCells,
    iconDeleteCol,
    iconDeleteRow,
    iconRemoveTable,
    iconTable
  }
};
</script>

<style></style>
