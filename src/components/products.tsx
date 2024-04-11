import { ProductsProps, getProducts } from "@/app/services/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
  const { products, error } = await getProducts();

  if (!products || error) {
    notFound();
  }

  return (
    <ul className="grid grid-cols-4">
      {products?.products?.map((product: ProductsProps) => (
        <li key={product.id} className="border-2 p-5 flex flex-col">
          <h2>{product.title}</h2>
          <Link href={`/products/${product.id}`}>
            <button>Vai</button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
