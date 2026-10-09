const SearchBox = ({ text, onSearch }) => (
  <>
    <label htmlFor="filtro">Buscar</label>
    <input
      id="filtro"
      value={text}
      onChange={(event) => onSearch(event.target.value)}
    />
  </>
)

export default SearchBox