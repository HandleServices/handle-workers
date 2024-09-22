export class HandleError extends Error {
  public readonly name: string
  public readonly response: { status: number }
  public readonly url: string

  constructor(message: string, status: number, url: string) {
    super(message)
    this.name = 'HandleError'
    this.response = { status }
    this.url = url
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
