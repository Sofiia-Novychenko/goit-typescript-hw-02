import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

export default function LoadMoreBtn({ onClick, disabled }: LoadMoreBtnProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      Load more
    </button>
  );
}
