import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import SuperiorBar from '@/components/SuperiorBar.vue';
import Logo from '@/components/Logo.vue';

describe('SuperiorBar', () => {
  describe('does Logo component', () => {
    const wrapper = mount(SuperiorBar);
    const logo = wrapper.find(Logo);
    it('exists', () => {
      expect(logo.exists()).to.be.true;
    });
    it('has minilogo prop set as true', () => {
      expect(logo.props('minilogo')).to.be.true;
    });
  });
});