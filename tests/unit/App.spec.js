import { mount } from '@vue/test-utils'
import App from './../../src/App.vue'

describe('App', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

describe('Mounted App', () => {
  const wrapper = mount(App, {
    stubs: ['router-view']
  });

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('sets theme mode', () => {
    wrapper.vm.setMode(true)
  })
})