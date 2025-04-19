import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';
export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value.trim();

    if (!topic) {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={styles.input}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
