import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../packages/HelloWorld/src/main.vue';

// Helper function to create a component
const createComponent = propsData => shallowMount(HelloWorld, { propsData });

describe('HelloWorld.vue', () => {
  let cmp;
  describe('Properties', () => {
    it('when the component is created without message prop, the default message is `Hello World`', () => {
      cmp = createComponent();
      expect(cmp.vm.message).toBe('Hello World');
    });
    it('when the component is created with a custom message, the custom message is setted', () => {
      const message = 'Hi Javier';
      cmp = createComponent({ message });
      expect(cmp.vm.message).toBe(message);
    });
  });
});
