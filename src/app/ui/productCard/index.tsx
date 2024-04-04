import Link from 'next/link';
import styles from './product-card.module.scss'
import Image from 'next/image';

interface PlantProps {
  plant: {
    id: number;
    plant_name: string;
    image_url: string;
    color: string;
    size: string;
    variant: string;
    price: number;
  };
}

const ProductCard: React.FC<PlantProps> = ({ plant }) => {
  return (
    <Link href={`/products/${plant?.id}`}>
      <article className={styles.productCard}>
        <Image src={`/${plant?.plant_name}.jpg`} alt={plant?.plant_name} width={300} height={300} />
        <h3>{plant?.plant_name}</h3>
        <p>color: {plant?.color} size: {plant?.size} </p>
        <p>variant{plant?.variant} </p>
        <p class={styles.price}>${plant?.price}</p>
      </article>
    </Link>
  );
};

export default ProductCard;