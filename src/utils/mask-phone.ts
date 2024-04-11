export const phoneMask = (v: string) => {
  v = v.replace(/\D/g, '')

  v = v.slice(0, 11)

  if (v.length <= 10) {
    v = v.replace(/(\d{2})(\d)/, '($1) $2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
    // v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/(\d{2})(\d)/, '($1) $2')
    v = v.replace(/(\d)(\d{4})(\d)/, '$1 $2-$3')
  }

  return v
}

export const checkPhoneMask = (v: string) => {
  return /^\(\d{2}\) \d \d{4}-\d{4}$|^\(\d{2}\) \d{4}-\d{4}$/.test(v)
}
