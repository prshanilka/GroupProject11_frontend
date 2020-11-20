<template>
	<AppLayout>
		<h1>List ot the post officers in a perticular division</h1>



<div>
  
  <b-row class="mb-5">
    
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-hoverable')">
        <b-table hover :items="items" />
      </b-card>
    </b-colxx>
    
    
  </b-row>
  </div>
	</AppLayout>
</template>


<script>


export default {

  components: {
	  AppLayout: AppLayout,
    'vuetable' : Vuetable,
    'vuetable-pagination-bootstrap' : VuetablePaginationBootstrap
  },
  data () {
    return {
      items: [
        { id: 1, first_name: 'Mark', last_name: 'Otto', username: '@mdo' },
        { id: 2, first_name: 'Jacob', last_name: 'Thornton', username: '@fat' },
        { id: 3, first_name: 'Lary', last_name: 'the Bird', username: '@twitter' }
      ],
      vuetableItems: {
        apiUrl: apiUrl + '/cakes/fordatatable',
        fields: [
          {
            name: 'title',
            sortField: 'title',
            title: 'Name',
            titleClass: '',
            dataClass: 'list-item-heading'
          },
          {
            name: 'sales',
            sortField: 'sales',
            title: 'Sales',
            titleClass: '',
            dataClass: 'text-muted'
          },
          {
            name: 'stock',
            sortField: 'stock',
            title: 'Stock',
            titleClass: '',
            dataClass: 'text-muted'
          },
          {
            name: 'category',
            sortField: 'category',
            title: 'Category',
            titleClass: '',
            dataClass: 'text-muted'
          }
        ]
      },
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      bootstrapTable: {
        selected: [],
        selectMode: 'multi',
        fields: [
          { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc', tdClass: 'list-item-heading' },
          { key: 'sales', label: 'Sales', sortable: true, tdClass: 'text-muted' },
          { key: 'stock', label: 'Stock', sortable: true, tdClass: 'text-muted' },
          { key: 'category', label: 'Category', sortable: true, tdClass: 'text-muted' },
          { key: 'status', label: 'Status', sortable: true, tdClass: 'text-muted' }
        ]
      }
    }
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    rowSelected (items) {
      this.bootstrapTable.selected = items
    },
    dataProvider (ctx) {
      const params = this.apiParamsConverter(ctx)
      let promise = axios.get(apiUrl + '/cakes/fordatatable', { params: params })

      return promise
        .then(result => result.data)
        .then((data) => {
          this.currentPage = data.current_page
          this.perPage = data.per_page
          this.totalRows = data.total
          const items = data.data
          return items;
        }).catch(_error => {
          return []
        })
    },
    apiParamsConverter (params) {
      let apiParams = {}
      if (params.perPage !== 0) {
        apiParams.per_page = params.perPage
      }
      if (params.currentPage >= 1) {
        apiParams.page = params.currentPage
      }
      if (params.sortBy && params.sortBy.length > 0) {
        apiParams.sort = `${params.sortBy}|${params.sortDesc ? 'desc' : 'asc'}`
      }
      if (params.filter && params.filter.length > 0) {
        // Optional
      }
      return apiParams
    }
  }
}
</script>











