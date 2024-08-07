export class HandleError extends Error {
  public readonly name: string
  constructor(message: string) {
    super(message)
    this.name = 'HandleError'
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
