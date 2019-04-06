import HelloWorld from './packages/HelloWorld/index';

const install = (Vue) => {
  Vue.component(HelloWorld.name, HelloWorld);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWorld,
};