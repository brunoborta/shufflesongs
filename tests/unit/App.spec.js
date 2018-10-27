import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import SuperiorBar from '@/components/SuperiorBar.vue';
import SongList from '@/components/SongList.vue';
import Logo from '@/components/Logo.vue';

describe('App', () => {
  it('has property showLogo', () => {
    expect(App.data()).to.have.property('showLogo');
  });

  it('showLogo has initial value of true', () => {
    const {showLogo} = App.data();
    expect(showLogo).to.be.true;
  });

  describe('has rendered component', () => {
    const wrapper = shallowMount(App, {
      data() {
        return {
          showLogo: false
        }
      }
    });
    it('SuperiorBar', () => {
      expect(wrapper.find(SuperiorBar).exists()).to.be.true;
    });
    it('SongList', () => {
      expect(wrapper.find(SongList).exists()).to.be.true;
    });
    it('Logo', () => {
      const wrapper = shallowMount(App, {
        data() {
          return {
            showLogo: true
          }
        }
      });
      expect(wrapper.find(Logo).exists()).to.be.true;
    });
  })
})
