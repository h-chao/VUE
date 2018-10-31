/* eslint-disable */

export default {
  install(Vue, options) {
    Vue.$test1 = () => console.log('test1')
    Vue.prototype.$test3 = {
      test3: 'test3'
    }
    Vue.mixin({
      methods: {
        $test2() {
          console.log('test2', option)
        }
      }
    })
    Vue.component('test-test', {
      render(createElement) {
        return createElement('h1', 'Carry Chao')
      }
    })
  }
}