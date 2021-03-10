import { shallowMount } from '@vue/test-utils'
import Repositories from '@/views/Repositories.vue'

describe('Repositories.vue', () => {

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ 
        repositories: [
          {
            name: 'test-repo',
            owner: {
              avatar_url: 'https://test.com',
              login: 'w3bappd3v'
            }
          }
        ]
      })
    })
  )

  it('sets searchStr from input binding', () => {
    const wrapper = shallowMount(Repositories)

    let searchInput = wrapper.find('input[type="text"]')
    searchInput.element.value = 'foo'
    searchInput.trigger('input')

    expect(wrapper.vm.searchStr).toBe('foo')


  }) 

  it('initiates search', async () => {
    const mockSearch = jest.spyOn(Repositories.methods, 'searchRepositories')
    const wrapper = shallowMount(Repositories)
  
    await wrapper.find('button').trigger('click')

    expect(mockSearch).toHaveBeenCalled()
  })

})