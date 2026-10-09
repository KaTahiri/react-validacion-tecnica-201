import { useContext } from 'react'
import Level2 from './Level2'
import ValorGeneral from '../ValorGeneral.context'

const Level1 = () => {
  const { valor1, valor2, valor3 } = useContext(ValorGeneral)
  const total = valor1 + valor2 + valor3

  return (
    <>
      <p>Valor general (suma): {total}</p>

      <Level2 posicion={1} />
      <Level2 posicion={2} />
      <Level2 posicion={3} />
    </>
  )
}

export default Level1