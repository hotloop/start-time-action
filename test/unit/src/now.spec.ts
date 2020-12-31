import MockDate from 'mockdate'
import { now } from '../../../src/now'

describe('#now', () => {
  beforeEach(() => {
    MockDate.set('2021-01-01T00:00:01.123')
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('returns the current timestamp in seconds', () => {
    const result = now()
    result.should.equal(1609452001)
  })
})
