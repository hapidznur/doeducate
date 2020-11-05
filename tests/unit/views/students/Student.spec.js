import Vue from 'vue'
import { mount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue'
import Student from '@/views/students/Student'

Vue.use(CoreuiVue)

describe('Student.vue', () => {
  // use mount. So the method applied to child components can be tested
  const wrapper = mount(Student)

  it('has a name', () => {
    expect(Student.name).toBe('Student')
  })
  it('Rendered correctly', () => {
    expect(wrapper.find('name').value()).toEqual('Test Student')
  })
})
