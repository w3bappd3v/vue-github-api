import { shallowMount } from '@vue/test-utils'
import Repositories from '@/views/Repositories.vue'
// import axios from 'axios'

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ 
    repositories: [
      {
        name: 'test-repo',
        owner: {
          avatar_url: 'https://test.com',
          login: 'w3bappd3v'
        }
      }
    ]
  }))
}))


describe('Repositories.vue', () => {

  it('sets searchStr from input binding', () => {
    const wrapper = shallowMount(Repositories)

    let searchInput = wrapper.find('input[type="text"]')
    searchInput.element.value = 'foo'
    searchInput.trigger('input')

    expect(wrapper.vm.searchStr).toBe('foo')


  }) 

  it('fetches async when a button is clicked', async() => {
    const mockSearch = jest.spyOn(Repositories.methods, 'getRepositories')
    const wrapper = shallowMount(Repositories)

    const result = await wrapper.find('button').trigger('click')

    expect(mockSearch).toHaveBeenCalled()
  
  })

})