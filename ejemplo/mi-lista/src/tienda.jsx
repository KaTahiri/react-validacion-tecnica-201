import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react'
import { entregables } from './datos'

function reducir(lista, accion) {
  switch (accion.type) {
    case 'marcar':
      return lista.map((item) =>
        item.id === accion.id ? { ...item, estado: 'revisado' } : item
      )
    default:
      return lista
  }
}

const TiendaContexto = createContext(null)

export function TiendaProveedor({ children }) {
  const [items, dispatch] = useReducer(reducir, entregables)
  const [revisor, setRevisor] = useState('Ana')
  const [avisos, setAvisos] = useState(0)

  const marcar = useCallback((id) => {
    dispatch({ type: 'marcar', id })
  }, [])

  const sumar = useCallback(() => setAvisos((n) => n + 1), [])

  const valor = useMemo(
    () => ({ items, marcar, revisor, setRevisor, avisos, sumar }),
    [items, marcar, revisor, avisos, sumar]
  )

  return <TiendaContexto.Provider value={valor}>{children}</TiendaContexto.Provider>
}

export function useStore() {
  const tienda = useContext(TiendaContexto)
  if (!tienda) throw new Error('useStore fuera de TiendaProveedor')
  return tienda
}