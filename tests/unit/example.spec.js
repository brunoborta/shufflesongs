import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Presentation from '@/components/Presentation.vue'

describe('Presentation', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Presentation, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
