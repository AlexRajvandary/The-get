import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  label: string;
  imageUrl: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <div className="flex-1">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
          gap: "20px",
          justifyContent: "start",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageUrl}
            title={product.title}
            category={product.category}
            price={product.price}
            href={`/product/${product.id}`} // Лучше передавать уникальный URL
          />
        ))}
      </div>
    </div>
  );
}
