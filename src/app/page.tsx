import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1 >Hello, Next.js!</h1>
      <Link href="/products">Go to Product Catalog</Link>
    </main>
  );
}
