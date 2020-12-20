import { mount } from '@vue/test-utils'
import Repository from '@/components/Repository.vue'

describe('Repository.vue', () => {

  it('renders data', () => {
    const wrapper = mount(Repository, {
      propsData: {
        repository: {
          name: 'test-repo',
          owner: {
            avatar_url: 'https://test.com',
            login: 'w3bappd3v'
          },
          language: 'JavaScript',
          forks_count: '1',
          watchers_count: '2',
          stargazers_count: '3'
        }
      }
    })

    expect(wrapper.text()).toContain('w3bappd3v')
    expect(wrapper.text()).toContain('test-repo')
    expect(wrapper.text()).toContain('JavaScript')
    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('3')

  })

})