import Link from "next/link";
import styles from "./homepage.module.scss";

export default function Home() {
  return (
    <main >
      <div className={styles['homepage']}>

        <h1 >Hello, Next.js!</h1>
        <Link href="/products">Go to Product Catalog</Link>
      </div>
    </main>
  );
}
