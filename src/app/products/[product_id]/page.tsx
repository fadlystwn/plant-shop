
import { Metadata } from "next";
import Image from "next/image";
import styles from './product_details.module.scss';
import Accordion from "@/components/accordion";
import CartAction from "@/app/ui/cartAction";

export const metadata: Metadata = {
  title: 'Product Details',
  description: 'Plant Data',
}


export default async function Page({ params }: { params: { product_id: string; } }) {
  let data = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/plants/${params.product_id}`);
    data = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        {data.plant_name && (
          <Image
            priority
            src={`/${data.plant_name.toLowerCase()}.jpg`}
            alt={data.plant_name}
            width={320}
            height={480}
          />
        )}
      </div>
      <div className={styles.productInfo}>
        <h1>{data.plant_name}</h1>
        <p>{data.description}</p>
        <div className={styles.action}>
          <p className={styles.price}>${data.price}</p>
          <CartAction />
        </div>
        <Accordion title="Details">
          {data.details &&
            Object.entries(data.details).map(([key, value]) => (
              <p className={styles.detailsItem} key={key}>{`${key}: ${value}`}</p>
            ))}
        </Accordion>
        <Accordion title="Care">
          {data.care &&
            Object.entries(data.care).map(([key, value]) => (
              <p className={styles.careItems} key={key}>{`${key}: ${value}`}</p>
            ))}
        </Accordion>
      </div>
    </div>
  )
}