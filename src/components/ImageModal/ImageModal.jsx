import Modal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return;

  return (
    <>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <img src={image.urls.regular} alt={image.description} />
      </Modal>
    </>
  );
}
