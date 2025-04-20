import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Text from '../Text/Text';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { getImagesWithTopic } from '../../ApiService/images-api';
import { Image } from '../../types';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState<Image | null>(null);

  function openModal(image: Image) {
    setSelectImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectImage(null);
  }

  useEffect(() => {
    if (!query) return;

    const fetchMoreImages = async () => {
      setLoading(true);
      try {
        // * не забудь що передаєш в getImagesWithTopic ОБʼЄКТ!!

        const { total_pages, results } = await getImagesWithTopic({
          query,
          page,
        });

        if (!results.length) {
          setIsEmpty(true);
          return;
        }

        setImages((prevImages: Image[]): Image[] => [
          ...prevImages,
          ...results,
        ]);
        setIsVisible(page < total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMoreImages();
  }, [page, query]);

  const GetQuery = (inputValue: string): void => {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setError(false);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const handleClick = () => setPage(page + 1);

  return (
    <>
      <SearchBar onSubmit={GetQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!error && !isEmpty && !images.length && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {isEmpty && (
        <Text textAlign="center">Sorry, we couldn't find anything</Text>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal} />
      )}
      {isVisible && <LoadMoreBtn onClick={handleClick} disabled={loading} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectImage}
      />
    </>
  );
}

export default App;
