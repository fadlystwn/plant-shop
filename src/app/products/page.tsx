import styles from './products.module.scss';
import { Metadata } from 'next';
import ProductCard from '../ui/productCard';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blossom Haven: Your Botanical Paradise Awaits',
  description: 'Discover Nature Finest Selection at Our Premier Plant Emporium',
}

export default async function Page() {
  let data = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/plants`);
    data = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <main className={styles.products}>
      <h1 className={styles.heading}>Blossom Haven: Your Botanical Paradise Awaits</h1>
      <p>Discover Nature Finest Selection at Our Premier Plant Emporium</p>
      <div className={styles.productGrid}>
        <Suspense fallback={<div>Loading...</div>}>
          {data && data?.map((plant: any) => {
            return (
              <ProductCard key={plant.id} plant={plant} />
            )
          })}
        </Suspense>
      </div>
    </main >
  )
}