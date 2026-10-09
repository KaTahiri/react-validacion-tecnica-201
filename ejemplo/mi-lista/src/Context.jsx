import { useState } from 'react'
import Level1 from './components/Level1'
import ValorGeneral from './ValorGeneral.context'

const Context = () => {
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)
  const [valor3, setValor3] = useState(0)

  return (
    <ValorGeneral.Provider
      value={{ valor1, valor2, valor3, setValor1, setValor2, setValor3 }}
    >
      <Level1 />
    </ValorGeneral.Provider>
  )
}

export default Context