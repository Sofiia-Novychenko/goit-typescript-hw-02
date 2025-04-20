import { Image } from '../../types';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.description || 'Image'}
        className={styles.image}
      />
    </div>
  );
}
