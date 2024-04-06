import Link from "next/link";
import styles from "./homepage.module.scss";
import HomeCarousel from '@/app/ui/homeCarousel'
export default function Home() {
  return (
    <main >
      <HomeCarousel />
      <div className={styles['homepage']}>

        <h1>
          <Link href="/products">Go to Product Catalog</Link>
        </h1>
      </div>

    </main >
  );
}
