import Product from './Product'

const ProductList = ({ products }) => (
  <ul className="lista">
    {products.map((product) => (
      <li key={product.id}>
        <Product product={product} />
      </li>
    ))}
  </ul>
)

export default ProductList