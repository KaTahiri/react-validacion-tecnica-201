import { useSesion } from '../components/Sesion'

const conRevisor = (ComponenteOrigen) => {
  function Envuelto(props) {
    const { revisor } = useSesion()
    const completas = { ...props, revisor }
    return <ComponenteOrigen {...completas} />
  }
  return Envuelto
}

export default conRevisor