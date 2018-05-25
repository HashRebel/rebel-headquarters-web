import HelloWorld from '@/lib/validators/validator.js.size'

describe('JavaScript Size Property Validator', () => {
  it('should validate 3px', () => {
    expect(HelloWorld.validateJsSize("3px"))
      .to.equal(true)
  })
})
