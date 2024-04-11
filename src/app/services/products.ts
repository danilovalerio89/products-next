export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

export interface ProductsResponse {
  products: ProductsProps[] | null;
  error: string | null;
}

export async function getProducts(): Promise<{
  products: ProductsResponse | null;
  error: string | null;
}> {
  try {
    const endpoint = "https://dummyjson.com/products/";
    const res = await fetch(endpoint);
    const data = await res.json();

    if (typeof data === "string" || !data) {
      throw new Error("Failed to fetch products");
    }

    return { products: data, error: null };
  } catch (error: any) {
    return {
      products: null,
      error: error.message || "Failed to fetch products",
    };
  }
}

export async function getProductById(id: number): Promise<{
  product: ProductsProps | null;
  error: string | null;
}> {
  try {
    const endpoint = `https://dummyjson.com/products/${id}`;
    const res = await fetch(endpoint);
    const data = await res.json();

    if (typeof data === "string" || !data) {
      throw new Error("Failed to fetch product");
    }

    return { product: data, error: null };
  } catch (error: any) {
    return {
      product: null,
      error: error.message || "Failed to fetch product",
    };
  }
}
