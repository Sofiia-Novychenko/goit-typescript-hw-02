import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onClick }) {
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
