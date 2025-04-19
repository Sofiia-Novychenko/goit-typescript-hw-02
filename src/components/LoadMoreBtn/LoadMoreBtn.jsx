import styles from './LoadMoreBtn.module.css';
export default function LoadMoreBtn({ onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
}
