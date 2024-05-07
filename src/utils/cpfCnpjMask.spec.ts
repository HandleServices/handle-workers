import { checkCpfCnpj, cpfCnpjMask } from './mask-cpf-cnpj'

describe('CPF/CNPJ Mask', () => {
  it('should be able to accept a valid cpf/cnpj', () => {
    const document = '123.123.123-32'

    expect(checkCpfCnpj(document)).toBeTruthy()
  })

  it('should be able to non-accept an invalid cpf/cnpj', () => {
    const phoneNumber = '1234.1234.1234-321'

    expect(checkCpfCnpj(phoneNumber)).toBeFalsy()
  })

  it('should format a document to accepted format', () => {
    const phoneNumber = '12312312332'

    expect(cpfCnpjMask(phoneNumber)).toEqual('123.123.123-32')
  })
})
