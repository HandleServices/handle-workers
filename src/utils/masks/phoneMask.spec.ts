import { checkPhoneMask, phoneMask } from '../masks/mask-phone'

describe('Phone Mask', () => {
  it('should be able to accept a valid phone number', () => {
    const phoneNumber = '(88) 9 9999-9999'

    expect(checkPhoneMask(phoneNumber)).toBeTruthy()
  })

  it('should be able to non-accept an invalid phone number', () => {
    const phoneNumber = '(88) 9 123-123'

    expect(checkPhoneMask(phoneNumber)).toBeFalsy()
  })

  it('should format a number to accepted format', () => {
    const phoneNumber = '88999999999'

    expect(phoneMask(phoneNumber)).toEqual('(88) 9 9999-9999')
  })
})
