import { getProducts } from "@/app/services/products";
import ProductPage from "@/components/product";
import ProductsPage from "@/components/products";

export async function generateStaticParams() {
  const { products } = await getProducts();

  if (!products) {
    return [];
  }
  const ids = [];

  for (let i = 0; i < products!.products!.length; i++) {
    ids.push(products!.products![i].id);
  }
  const paths = ids.map((ids) => ({ ids }));

  return paths;
}

export default async function Products({
  params,
}: {
  params: { id: number[] };
}) {
  const { id } = params;

  if (!id) {
    return <ProductsPage />;
  }

  console.log(id);

  return <ProductPage id={id[0]} />;
}
