import styles from 'styles/index.module.scss';
import { Modal } from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import advertsOperations from 'redux/adverts/advertsOperations';
import { useEffect } from 'react';
import { useAdverts } from 'hooks';

const Catalog = () => {
  const { car, adertsError, page, allCar, OpenModal } = useAdverts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(advertsOperations.getAdverts());
    dispatch(advertsOperations.getAdvertsAll());
  }, [dispatch]);

  const LoadMore = e => {
    const newPages = page + 1;
    dispatch(advertsOperations.getAdvertsMore(newPages));
  };
  const openModal = id => {
    dispatch(advertsOperations.modal({ idCar: id, OpenModal: true }));
  };

  return (
    <section className={styles.spContainer}>
      <div className={styles.shContainer}>
        <div className={styles.sgContainer}>
          <div className={styles.sideBar}>
            <button>Search</button>
          </div>
          {!car && <div>{adertsError}</div>}
          {car && (
            <ul className={styles.cartCar}>
              {car &&
                car.map(
                  ({
                    id,
                    year,
                    make,
                    model,
                    img,
                    address,
                    rentalCompany,
                    accessories,
                    rentalPrice,
                    functionalities,
                  }) => {
                    const text = `${address} ${rentalCompany} ${model}${functionalities} ${accessories}`;
                    const result =
                      text.replace(/[\s.,%]/g, ' | ').substring(0, 100) + '...';

                    return (
                      <li key={id} className={styles.cartCarItem}>
                        <div className={styles.cartCarImgWr}>
                          <img
                            src={img}
                            className={styles.cartCarImg}
                            alt="model"
                          />
                          <button className={styles.cartCarImgHeart}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                                fill="transparent"
                                stroke="white"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className={styles.cartCarModelWr}>
                          <span className={styles.cartCarModelName}>
                            {make}{' '}
                            <span className={styles.cartCarModelNameAccent}>
                              {model}
                            </span>
                            {', '}
                            {year}
                          </span>
                          <span className={styles.cartCarModelPrice}>
                            {rentalPrice}
                          </span>
                        </div>
                        <div className={styles.cartCarDescriptionWr}>
                          <span className={styles.cartCarDescription}>
                            {result}
                          </span>
                        </div>
                        <button
                          className={styles.cartCarModelButton}
                          onClick={() => {
                            openModal(id);
                          }}
                        >
                          Learn more
                        </button>
                      </li>
                    );
                  }
                )}
            </ul>
          )}

          {allCar.length !== car.length && (
            <div className={styles.loadMoreCarWr}>
              <button
                className={styles.loadMoreCar}
                onClick={() => {
                  LoadMore();
                }}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
      {OpenModal && <Modal />}
    </section>
  );
};
export default Catalog;
