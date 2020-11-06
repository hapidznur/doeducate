<template>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>Data Siswa</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Nama lengkap siswa"
                label="Nama Siswa"
                v-model="student.nama"
                horizontal
                autocomplete="nama"
              />
              <CTextarea
                description="Alamat"
                label="Alamat"
                v-model="student.alamat"
                horizontal
              />
              <CInput
                description=""
                label="Kelas"
                v-model="student.nisn"
                horizontal
              />
              <CInput
                description="tanggal lahir"
                label="Tanggal Lahir"
                v-model="student.tgl_lahir"
                type="date"
                horizontal
              />
              <CInput
                description="nama_ayah"
                label="Ayah"
                v-model="student.nama_ayah"
                horizontal
              />
              <CInput
                description="Ibu"
                label="Ibu"
                v-model="student.nama_ibu"
                horizontal
              />
             <CTextarea
                description="alamat"
                label="Alamat Orangtua"
                v-model="student.alamat_ortu"
                horizontal
              />  
             <CInput
                description=""
                label="Pekerjaan Ayah"
                v-model="student.pekerjaan_ayah"
                horizontal
              />  
              <CInput
                description=""
                label="Pekerjaan Ibu"
                v-model="student.pekerjaan_ibu"
                horizontal
              /> 
              <CTextarea
                description=""
                label="Alamat Orangtua"
                v-model="student.alamat_ortu"
                horizontal
              />  
             <CInput
                description=""
                label="Nama Wali"
                v-model="student.nama_wali"
                horizontal
              />  
             <CInput
                description=""
                label="Pekerjaan Wali"
                v-model="student.pekerjaan_wali"
                horizontal
              /> 
             <CInput
                description=""
                label="Tahun Ajaran"
                v-model="student.ajaran"
                type="date"
                horizontal
              /> 
             <CInput
                description=""
                label="Jenjang"
                v-model="student.jenjang"
                horizontal
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="reset" class="float-right" size="sm" color="danger" style="margin-left:1em"><CIcon name="cil-ban"/> Reset</CButton>
            <CButton type="submit" size="sm" class="float-right" color="primary" ><CIcon name="cil-check-circle"/> Submit</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
</template>

<script>
import studentService from '../../services/student.service';
export default {
  name: "Student",
  data () {
    return {
      student: ""
   }
  },
  methods: {
   getSiswa(id) {
      studentService.getStudentById(id)
        .then(response => {
          this.student = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted () {
    this.getSiswa(this.$route.params.id);
  }
}
</script>