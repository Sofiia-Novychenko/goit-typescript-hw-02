import styles from './ImageCard.module.css';

export default function ImageCard({ image }) {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.description}
        className={styles.image}
      />
    </div>
  );
}
