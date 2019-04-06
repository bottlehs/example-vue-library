import HelloWorld from './src/main.vue';

HelloWorld.install = (Vue) => {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
