import { useContext } from 'react'
import ValorGeneral from '../ValorGeneral.context'

const Level2 = ({ posicion }) => {
  const contexto = useContext(ValorGeneral)
  const valor = contexto[`valor${posicion}`]
  const setValor = contexto[`setValor${posicion}`]

  return (
    <>
      <p>Componente Level2 (posición {posicion})</p>
      <button onClick={() => setValor(valor + 1)}>{valor}</button>
    </>
  )
}

export default Level2