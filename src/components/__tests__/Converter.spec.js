import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Converter from '../Converter.vue'

describe('Converter', () => {
  it('renders properly', () => {
    const wrapper = mount(Converter)
    expect(wrapper.text()).toContain('Unit Converter')
  }),
  it('has input fields', () => {
    const wrapper = mount(Converter)
    const inputFields = wrapper.findAll('.input-field')
    
  })
})
