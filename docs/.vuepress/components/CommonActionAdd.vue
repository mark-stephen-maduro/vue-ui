<template>
  <div class="app-styles">
    <div class="d-flex justify-content-end">
      <b-button variant="link" size="sm" class="text-dark mr-1">
        <BaseIcon name="cloud-download-alt" />
      </b-button>
      <b-button variant="link" size="sm" class="text-dark mr-1">
        <BaseIcon name="pen" />
      </b-button>
      <b-button variant="link" size="sm" class="text-dark mr-1">
        <BaseIcon name="cog" />
      </b-button>
      <b-button id="primary" variant="primary" size="sm"> Add Engine </b-button>
    </div>

    <b-table
      :items="[]"
      :fields="headers"
      borderless
      show-empty
      style="display: table"
    >
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'CommonActionAdd',
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
      ],
    }
  },
}
</script>

<style lang="scss"></style>
