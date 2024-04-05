import Image from "next/image";
import styles from './product_details.module.scss';
import Accordion from "@/components/accordion";

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
        <Image
          priority
          src={`/${data?.plant_name}.jpg`}
          alt={data?.plant_name}
          width={320}
          height={480}
        />
      </div>
      <div className={styles.productInfo}>
        <h1>{data?.plant_name}</h1>
        <p>{data.description}</p>
        <div className={styles.action}>
          <p className={styles.price}>${data?.price}</p>
          <button className="button-primary">Add to cart</button>
        </div>
        <Accordion title="Details">
          {Object.entries(data.details).map(([key, value]) => (
            <p className={styles.detailsItem} key={key}>{`${key}: ${value}`}</p>
          ))}
        </Accordion>
        <Accordion title="Care">
          {Object.entries(data.care).map(([key, value]) => (
            <p className={styles.careItems} key={key}>{`${key}: ${value}`}</p>
          ))}
        </Accordion>

      </div>
    </div>
  )
}