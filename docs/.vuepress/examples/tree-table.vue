<template>
  <div>
    <ClientOnly>
      <vue-ads-table
        :columns="columns"
        :rows="rows"
        :start="start"
        :end="end"
        :call-rows="callRows"
        :call-children="callChildren"
        :call-temp-rows="callTempRows"
        @filter-change="filterChanged"
      >
        <template v-slot:sort-icon="props">
          ({{
            props.direction === null ? 'null' : props.direction ? 'up' : 'down'
          }})
        </template>
        <template v-slot:toggle-children-icon="props">
          <BaseIcon v-if="props.expanded" name="folder-open" />
          <BaseIcon v-else name="folder" />
        </template>
      </vue-ads-table>
    </ClientOnly>
  </div>
</template>

<script>
import { VueAdsTable } from 'vue-ads-table-tree'
export default {
  components: {
    VueAdsTable,
  },

  data() {
    let rows = [
      {
        _id: 'Other browsers',
        name: 'All others',
        function: '-',
        city: '-',
        id: 'Other browsers',
        since: 'U',
        budget: '$320,800',
        _hasChildren: true,
      },
      {
        name: 'AOL browser (AOL desktop)',
        function: 'WinXP',
        city: '1.6',
        id: 'Gecko',
        since: 'A',
        budget: '$103,500',
        _showChildren: true,
        _children: [
          {
            name: 'Garrett Winters',
            function: 'Accountant',
            city: 'Tokyo',
            id: '8422',
            since: '2011/07/25',
            budget: '$170,750',
            _children: [
              {
                name: 'Garrett Winters',
                function: 'Accountant',
                city: 'Tokyo',
                id: '8422',
                since: '2011/07/25',
                budget: '$170,750',
              },
            ],
          },
        ],
      },
    ]

    rows.length = 4

    let columns = [
      {
        property: 'id',
        title: 'Engine',
        filterable: true,
      },
      {
        property: 'name',
        title: 'Browser',
        filterable: true,
      },
      {
        property: 'function',
        title: 'Platform',
        filterable: true,
      },
      {
        property: 'city',
        title: 'Engine Version',
        filterable: true,
      },
      {
        property: 'since',
        title: 'CSS Grade',
        filterable: true,
      },
      {
        property: 'budget',
        title: 'Budget',
        filterable: true,
      },
    ]
    return {
      rows,
      columns,
      filter: '',
      start: 0,
      end: 2,
    }
  },

  methods: {
    filterChanged(filter) {
      this.filter = filter
    },

    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },

    async callRows(indexesToLoad) {
      await this.sleep(1000)
      return indexesToLoad.map((index) => {
        return {
          name: 'Call Rows',
          function: 'Developer',
          city: 'San Francisco',
          id: '8196',
          since: '2010/07/14',
          budget: '$86,500',
        }
      })
    },

    async callChildren(parent) {
      await this.sleep(1000)
      return [
        {
          name: 'Call child',
          function: 'Developer',
          city: 'San Francisco',
          id: '8196',
          since: '2010/07/14',
          budget: '$86,500',
        },
      ]
    },

    async callTempRows(filter, columns, start, end) {
      await this.sleep(1000)
      return {
        rows: [
          {
            name: 'Temp call',
            function: 'Developer',
            city: 'San Francisco',
            id: '8196',
            since: '2010/07/14',
            budget: '$86,500',
          },
          {
            name: 'Temp call',
            function: 'Developer',
            city: 'San Francisco',
            id: '8196',
            since: '2010/07/14',
            budget: '$86,500',
          },
        ],
        total: 4,
      }
    },
  },
}
</script>
