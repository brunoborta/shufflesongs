import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

const logoFactory = (values = {}) => {
  return shallowMount(Logo, {
    propsData: {
      ...values
    }
  });
}

describe('Logo', () => {
  it('shows minilogo when minilogo prop is set', () => {
    const wrapper = logoFactory({minilogo: true});
    expect(wrapper.contains('p')).to.be.true;
  });

  it('shows big logo when minilogo prop is not set', () => {
    const wrapper = logoFactory();
    expect(wrapper.contains('h2')).to.be.true;
  });

  it('should has the default value of minilogo prop as false', () => {
    const wrapper = logoFactory();
    expect(wrapper.vm.minilogo).to.be.false;
  });
});
