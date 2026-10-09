import { memo } from 'react'
import conSombra from '../hoc/conSombra'
import { useStore } from '../tienda'

const Product = ({ product }) => {
  const { marcar, revisor } = useStore()

  return (
    <article>
      <p>{product.titulo}</p>
      <p>
        {product.id} · {product.proveedor}
      </p>
      <p>Revisor: {revisor}</p>
      <p className={`estado ${product.estado}`}>{product.estado}</p>
      {product.estado === 'pendiente' ? <p>Falta revisión</p> : null}
      <button type="button" onClick={() => marcar(product.id)}>
        {product.estado === 'revisado' ? 'Hecho' : 'Anotar'} {product.id}
      </button>
    </article>
  )
}

export default memo(conSombra(Product))