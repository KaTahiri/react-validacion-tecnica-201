import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import SearchBox from './components/SearchBox'
import { useStore } from './tienda'

function App() {
  const [texto, setTexto] = useState('')
  const { items, revisor, setRevisor, avisos, sumar } = useStore()

  const visibles = items.filter((item) => {
    const blob = `${item.titulo} ${item.proveedor} ${item.id}`.toLowerCase()
    return blob.includes(texto.toLowerCase())
  })

  const pendientes = items.filter((item) => item.estado === 'pendiente').length

  useEffect(() => {
    document.title = `Pendientes: ${pendientes}`
  }, [pendientes])

  return (
    <main>
      <h1>Bandeja de entregables ({avisos})</h1>
      <button type="button" onClick={sumar}>Aviso</button>

      <label htmlFor="revisor">Revisor</label>
      <input
        id="revisor"
        value={revisor}
        onChange={(evento) => setRevisor(evento.target.value)}
      />

      <SearchBox text={texto} onSearch={setTexto} />

      {visibles.length === 0 ? <p>Ningún entregable coincide.</p> : null}
      <ProductList products={visibles} />
    </main>
  )
}

export default App