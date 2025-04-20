import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FormEvent } from 'react';

interface SearchBarProp {
  onSubmit: (inputValue: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProp) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const input = event.currentTarget.querySelector(
      'input[name="topic"]'
    ) as HTMLInputElement;

    const topic = input.value.trim();

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
