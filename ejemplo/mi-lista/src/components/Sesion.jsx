import { createContext, useContext, useState } from 'react'

const SesionContexto = createContext(null)

export function SesionProveedor({ children }) {
  const [revisor, setRevisor] = useState('Ana')
  return (
    <SesionContexto.Provider value={{ revisor, setRevisor }}>
      {children}
    </SesionContexto.Provider>
  )
}

export function useSesion() {
  const sesion = useContext(SesionContexto)
  if (!sesion) throw new Error('useSesion fuera del proveedor')
  return sesion
}