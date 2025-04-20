import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../types';

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

export default function ImageGallery({ images, onClick }: ImageGalleryProps) {
  return (
    <ul className={styles.list}>
      {images.map(image => (
        <li
          key={image.id}
          className={styles.item}
          onClick={() => onClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
