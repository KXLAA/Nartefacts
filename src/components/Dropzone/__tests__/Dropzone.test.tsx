import { render } from '@testing-library/react'

import { Dropzone } from '..'

describe('<Dropzone />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Dropzone />)
    const heading = getByRole('heading', { name: /Dropzone/i })

    expect(heading).toBeInTheDocument()
  })
})