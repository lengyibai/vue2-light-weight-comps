import UniqueCard from "./";

const components = [UniqueCard];
export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.component(component.name, component);
    });
  },
};
