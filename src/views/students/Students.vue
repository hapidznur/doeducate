<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
      </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items="this.content"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        :clickableRows="true"
        @row-clicked="onRowClicked" 
        pagination
        table-filter
      >
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
import StudentService from '../../services/student.service'

export default {
  name: 'Student',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['nisn', 'nama', 'alamat', 'rombel']
      }
    },
    caption: {
      type: String,
      default: 'Siswa'
    },
    clickableRows: Boolean,
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    StudentService.getStudent().then(
      response => {
        this.content = response.data;
      },
      error => {
        console.log(error)
      }
    );
  },
  methods: {
    onRowClicked (item, index, event) {
      this.$router.push("/student/"+item.id)
    }
  }
}
</script>
