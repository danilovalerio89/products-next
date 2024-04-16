import { getProducts } from "@/app/services/products";
import ProductPage from "@/components/product";
import ProductsPage from "@/components/products";

export async function generateStaticParams() {
  const { products } = await getProducts();

  // if (!products) {
  //   return [];
  // }
  // const ids = [];

  // for (let i = 0; i < products!.products!.length; i++) {
  //   ids.push(products!.products![i].id.toLocaleString());
  // }
  // const paths = ids.map((ids) => ({ ids }));

  return (
    products?.products?.map((product) => ({ id: [product.id.toString()] })) ||
    []
  );
}

export default function Product({ params }: { params: { id: string[] } }) {
  const { id } = params;

  console.log(id);

  if (!id) {
    return <ProductsPage />;
  }

  return <ProductPage id={id[0]} />;
}
