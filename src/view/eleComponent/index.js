import eleTable from './eleTable/thisTable'

export default {
  install: (Vue) => {
    Vue.component('this-table', eleTable)
  }
}
