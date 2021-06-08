<template>
  <div class="app-styles">
    <div class="d-flex justify-content-end">
      <b-button variant="secondary" size="sm" class="mr-1">
        Refresh
        <BaseIcon class="ml-1 mb-1" name="redo-alt" size="sm" />
      </b-button>
      <b-button variant="danger" size="sm" class="mr-1">
        Delete
        <BaseIcon class="ml-1 mb-1" name="trash-alt" size="sm" />
      </b-button>
    </div>

    <b-table
      :items="items"
      :fields="headers"
      borderless
      show-empty
      style="display: table"
    >
      <template v-slot:cell(actions)>
        <b-dropdown
          size="sm"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
          class="mt-n2"
        >
          <template #button-content>
            <BaseIcon name="ellipsis-v" size="sm" />
          </template>
          <b-dropdown-item href="#">
            <BaseIcon class="mr-1" name="stop" size="sm" />
            Stop</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><BaseIcon class="mr-1" name="sync" size="sm" />
            Restart</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><BaseIcon
              class="mr-1"
              name="edit"
              size="sm"
            />Edit</b-dropdown-item
          >
          <b-dropdown-item href="#"
            ><BaseIcon
              class="mr-1"
              name="trash-alt"
              size="sm"
            />Delete</b-dropdown-item
          >
        </b-dropdown>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'CommonActionEdit',
  data() {
    return {
      headers: [
        {
          key: 'status_id',
          label: 'Engine',
          sortable: true,
          tdClass: ['text-truncate', 'middle-limited-width', 'd-md-table-cell'],
        },
        {
          key: 'id',
          label: 'ID',
          sortable: true,
          tdClass: ['text-truncate', 'middle-limited-width', 'd-md-table-cell'],
          thClass: ['text-truncate'],
        },
        {
          key: 'transaction_name',
          label: 'Browser',
          sortable: true,
          tdClass: [
            'text-truncate',
            'middle-limited-width',
            'd-md-table-cell',
            'd-none',
          ],
          thClass: [
            'text-truncate',
            'middle-limited-width',
            'd-md-table-cell',
            'd-none',
          ],
        },
        {
          key: 'created_at',
          label: 'Platform',
          sortable: true,
          tdClass: [
            'text-truncate',
            'middle-limited-width',
            'd-md-table-cell',
            'd-none',
          ],
          thClass: [
            'text-truncate',
            'middle-limited-width',
            'd-md-table-cell',
            'd-none',
          ],
        },
        {
          key: 'created_by',
          label: 'Engine version',
          tdClass: [
            'text-truncate',
            'middle-limited-width',
            'd-none',
            'd-md-table-cell',
          ],
          thClass: [
            'text-truncate',
            'middle-limited-width',
            'd-md-table-cell',
            'd-none',
          ],
        },
        {
          key: 'actions',
          label: '',
        },
      ],
      items: [
        {
          status_id: 'OA',
          id: '1001',
          transaction_name: 'Mozilla',
          created_at: 'Mobile',
          created_by: '1.1',
          actions: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
