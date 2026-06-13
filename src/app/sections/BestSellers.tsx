import React from 'react'
import './bestsellers.css'


const products = [
  {
    id: 1,
    name: "Belt",
    price: 429,
    image: '/products/product-1.jpg',
    slug: '',
  },
  {
    id: 2,
    name: 'Necklace',
    price: 399,
    image: '/products/product-2.jpg',
    slug: 'crucified-devil',
  },
  {
    id: 3,
    name: 'Rings',
    price: 399,
    image: '/products/product-3.jpg',
    slug: 'divinal-reliq-ring',
  },
  {
    id: 4,
    name: "Others",
    price: 459,
    image: '/products/product-4.jpg',
    slug: 'elijahs-cross',
  },
  // ← add more products here, grid fills left→right then wraps down
]

export default function BestSellers() {
  return (
    <section className="mw">
      {/* Header row */}
      <div className="mw__header">
        <h2 className="mw__heading">BEST SELLERS</h2>
        <a href="/shop" className="mw__view-all">VIEW ALL</a>
      </div>

      {/* Product grid */}
      <div className="mw__grid">
        {products.map(product => (
          <div key={product.id} className="mw__card">
            {/* Image + hover overlay */}
            <div className="mw__img-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="mw__img"
                loading="lazy"
              />

              {/* + add to cart button */}
              <button className="mw__add" aria-label={`Add ${product.name} to cart`}>
                +
              </button>

              {/* View item overlay on hover */}
              <a href={`/products/${product.slug}`} className="mw__overlay">
                VIEW ITEM
              </a>
            </div>

            {/* Info */}
            <div className="mw__info">
              <p className="mw__name">{product.name}</p>
              <p className="mw__price">Rs. {product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}