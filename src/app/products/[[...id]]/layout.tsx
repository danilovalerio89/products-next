import { getProducts } from "@/app/services/products";
import { notFound } from "next/navigation";

export default async function ProductsLayout({
  params,
  children,
}: {
  params: { id?: string[] };
  children: React.ReactNode;
}) {
  const { products, error } = await getProducts();

  if (!products || error) {
    notFound();
  }

  return <div>{children}</div>;
}
