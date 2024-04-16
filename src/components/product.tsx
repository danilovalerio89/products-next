import { getProductById } from "@/app/services/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({ id }: { id: string }) {
  const { product, error } = await getProductById(Number(id));

  console.log(product);

  if (!product || error) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Link href="/products/" replace={true}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
