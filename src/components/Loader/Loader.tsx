import { FadeLoader } from 'react-spinners';
import styles from './Loader.module.css';
import React from 'react';

export default function Loader(): React.ReactElement {
  return (
    <div className={styles.loaderContainer}>
      <FadeLoader color="#3B82F6" />
    </div>
  );
}
