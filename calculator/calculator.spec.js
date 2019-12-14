const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, './calculator.html'), 'utf8')

jest.dontMock('fs')

describe('calculator', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  afterEach(() => {
    jest.resetModules()
  })

  it('renders "Calculator" as an h1 heading', async () => {
    expect(document.querySelector('h1').textContent).toEqual('Calculator')
  })
})
