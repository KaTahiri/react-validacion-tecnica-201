const conSombra = (Componente) => {
  function ConSombra(props) {
    return (
      <div
        style={{
          boxShadow: '0 8px 24px #0003',
          borderRadius: 12,
          padding: 12,
        }}
      >
        <Componente {...props} />
      </div>
    )
  }
  return ConSombra
}

export default conSombra