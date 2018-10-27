import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import SuperiorBar from '@/components/SuperiorBar.vue';
import SongList from '@/components/SongList.vue';
import Logo from '@/components/Logo.vue';

const appFactory = (values = {}) => {
  return shallowMount(App, {
    data() {
      return {
        ...values
      }
    }
  });
}

describe('App', () => {
  it('has property showLogo', () => {
    expect(App.data()).to.have.property('showLogo');
  });

  it('showLogo has initial value of true', () => {
    const {showLogo} = App.data();
    expect(showLogo).to.be.true;
  });

  describe('has rendered components:', () => {
    const wrapper = appFactory({showLogo: false});
    it('SuperiorBar', () => {
      expect(wrapper.find(SuperiorBar).exists()).to.be.true;
    });
    it('SongList', () => {
      expect(wrapper.find(SongList).exists()).to.be.true;
    });
    it('Logo', () => {
      const wrapper = appFactory({showLogo: true});
      expect(wrapper.find(Logo).exists()).to.be.true;
    });
  });

  it('should change showLogo when clicked', () => {
    const wrapper = appFactory({showLogo: true});
    const logo = wrapper.find(Logo);
    logo.trigger('click');
    expect(wrapper.find(Logo).exists()).to.be.false;
    expect(wrapper.vm.showLogo).to.be.false;
  })
})
