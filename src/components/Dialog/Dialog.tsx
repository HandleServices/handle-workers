import './Dialog.css'

export interface DialogProps {
  children?: React.ReactNode
}

const Dialog = ({ children }: DialogProps) => {
  return <>{children}</>
}

export default Dialog
