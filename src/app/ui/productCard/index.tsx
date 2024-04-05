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
  const { id, plant_name, color, size, variant, price } = plant;
  return (
    <Link href={`/products/${id}`}>
      <article className={styles.productCard}>
        <Image src={`/${plant_name}.jpg`} alt={plant_name} width={300} height={300} />
        <h3>{plant_name}</h3>
        <p>color: {color} size: {size} </p>
        <p>variant{variant} </p>
        <p className={styles.price}>${price}</p>
      </article>
    </Link>
  );
};

export default ProductCard;