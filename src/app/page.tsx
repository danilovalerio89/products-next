import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <button onClick={() => redirect("/products")}>Go to products</button> */}
    </div>
  );
}
