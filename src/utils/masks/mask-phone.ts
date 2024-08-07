export const phoneMask = (v: string) => {
  v = v.replace(/\D/g, '') // Remove todos os não dígitos

  v = v.slice(0, 15)

  if (v.length <= 10) {
    // Formatação para números com até 10 dígitos
    v = v.replace(/(\d{2})(\d)/, '($1) $2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  } else if (v.length === 11) {
    // Formatação para números com 11 dígitos (nacional)
    v = v.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
  } else if (v.length === 12) {
    // Formatação para números com 12 dígitos (com código internacional)
    v = v.replace(/(\d{2})(\d{2})(\d{4})(\d{4})/, '+$1 ($2) $3-$4')
  } else {
    v = v.replace(
      /(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})(\d{0,})/,
      '+$1 ($2) $3 $4-$5$6',
    )
  }

  return v.trim()
}

export const checkPhoneMask = (v: string) => {
  // Validação para números com 11 a 15 dígitos, incluindo o código internacional
  return /^\(\d{2}\) \d \d{4}-\d{4}$|^\+\d{2} \(\d{2}\) \d \d{4}-\d{4}\d{0,3}$/.test(
    v,
  )
}
