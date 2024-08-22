import { useEffect, useState } from 'react'
import { z } from 'zod'

const TodoDialog = () => {
  const [services, setServices] = useState<string[]>([])

  const TodoSchema = z.object({
    name: z.string(),
    service: z.string(),
  })

  useEffect(() => {
    const fetchServices = async () => {
      // const response = await fetch('https://api.example.com/services')
      // const data = await response.json()
      // setServices(data)
      setServices(['Service 1', 'Service 2', 'Service 3'])
    }
    fetchServices()
  })

  return (
    <>
      <div>
        <h1 className="text-handle-blue text-2xl font-medium">
          Cadastrando uma nova tarefa...
        </h1>
        <h2 className="text-handle-blue text-base font-light">
          por favor preencha os campos necessários
        </h2>
      </div>
      <form className="flex flex-col">
        <input type="text" name="name" id="name" placeholder="Nome" />
        <select name="service" id="service">
          <option selected disabled hidden>
            Serviço Prestado
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </form>
    </>
  )
}

export default TodoDialog
