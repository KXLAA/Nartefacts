import { fireEvent, render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import { Header } from '@/components/Header'
import { createMockRouter } from '@/utils'

describe('<Header />', () => {
  it('should render the header based on props', () => {
    const { getByRole } = render(<Header primary />)
    const header = getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('should render <Header /> correctly', () => {
    const { container } = render(<Header primary />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the nav', () => {
    const { getByRole } = render(<Header primary />)
    const navigation = getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('should render the navigation buttons', () => {
    const { getByText } = render(<Header primary />)
    // const infoLink = getByText(/info/i)
    const savedLink = getByText(/saved/i)
    const createLink = getByText(/create/i)

    // expect(infoLink).toBeInTheDocument()
    expect(savedLink).toBeInTheDocument()
    expect(createLink).toBeInTheDocument()
  })

  it('has navigation buttons that work', () => {
    const router = createMockRouter({
      query: { id: '33' },
      pathname: 'kola',
    })

    const { getByRole } = render(
      <RouterContext.Provider value={router}>
        <Header primary />
      </RouterContext.Provider>,
    )

    const createLink = getByRole('link', { name: /create/i })

    fireEvent.click(createLink)
    expect(router.push).toHaveBeenCalledWith('/create', '/create', {
      locale: undefined,
      scroll: undefined,
      shallow: undefined,
    })
  })
})
