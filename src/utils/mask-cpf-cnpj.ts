export const cpfCnpjMask = (v: string) => {
  v = v.replace(/\D/g, '')

  v = v.slice(0, 14)

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2')
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  }

  return v
}

export const checkCpfCnpj = (v: string) => {
  return /^(?:(?:(\d{3})\.(\d{3})\.(\d{3})-(\d{2}))|(?:(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})))$/.test(
    v,
  )
}
