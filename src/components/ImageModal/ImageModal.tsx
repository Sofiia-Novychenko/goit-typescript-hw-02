import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { Image } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <>
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <img src={image.urls.regular} alt={image.description || 'Image'} />
      </Modal>
    </>
  );
}
