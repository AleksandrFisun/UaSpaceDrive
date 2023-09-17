import { createPortal } from 'react-dom';
import styles from 'styles/index.module.scss';
import { useDispatch } from 'react-redux';
import advertsOperations from 'redux/adverts/advertsOperations';
import { useAdverts } from 'hooks';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  const { idCar, allCar } = useAdverts();

  const dispatch = useDispatch();

  const buttonExit = () => {
    dispatch(advertsOperations.modal({ IdCar: 0, OpenModal: false }));
  };
  const onClickBackdrop = e => {
    const currentEl = e.currentTarget;
    const targettEl = e.target;
    if (currentEl === targettEl) {
      dispatch(advertsOperations.modal({ IdCar: 0, OpenModal: false }));
    }
  };
  const filteredCar = allCar.filter(car => car.id && car.id === idCar);
  return createPortal(
    <>
      <div onClick={onClickBackdrop} className={styles.ModalBасkdrор}>
        <div className={styles.ModalContent}>
          <button
            className={styles.modalButtonExit}
            onClick={() => {
              buttonExit();
            }}
          ></button>
          {filteredCar &&
            filteredCar.map(
              ({
                id,
                year,
                make,
                model,
                img,
                address,
                type,
                accessories,
                description,
                rentalPrice,
                fuelConsumption,
                engineSize,
                rentalConditions,
                mileage,
              }) => {
                const text = `${address} ${'|'} id :${id} ${'|'} year : ${year} ${'|'} type : ${type} ${'|'} fuel consumption : ${fuelConsumption} ${'|'} engine size : ${engineSize}`;
                const result = text.replace(/[\s.,%]/g, '  ');

                return (
                  <div key={id} className={styles.cartModal}>
                    <div className={styles.cartModalImgWr}>
                      <img
                        src={img}
                        className={styles.cartModalImg}
                        alt="model"
                      />
                    </div>
                    <div className={styles.cartModalModel}>
                      {make}{' '}
                      <span className={styles.cartModalModelNameAccent}>
                        {model}
                      </span>
                      {', '}
                      {year}
                    </div>
                    <span className={styles.cartModalDescriptionF}>
                      {result}
                    </span>
                    <span className={styles.cartModalDescriptionS}>
                      {description}
                    </span>
                    <span className={styles.cartModalDescriptionRWR}>
                      <span className={styles.cartModalDescriptionR}>
                        Accessories and functionalities:
                      </span>
                      <span className={styles.cartModalDescriptionT}>
                        {accessories}
                      </span>
                    </span>
                    <div className={styles.cartModalRentalWr}>
                      <span className={styles.cartModalRentalTitle}>
                        Rental Conditions:
                      </span>
                      <div className={styles.cartModalRentalUseWr}>
                        <span className={styles.cartModalRentalUse}>
                          Minimum age :
                          <span className={styles.cartModalRentalUseAccent}>
                            {rentalConditions}
                          </span>
                        </span>
                        <span className={styles.cartModalRentalUse}>
                          Mileage :
                          <span className={styles.cartModalRentalUseAccent}>
                            {mileage}
                          </span>
                        </span>
                        <span className={styles.cartModalRentalUse}>
                          Price :
                          <span className={styles.cartModalRentalUseAccent}>
                            {rentalPrice}
                          </span>
                        </span>
                      </div>
                    </div>

                    <button className={styles.cartModalModelButton}>
                      Rental car
                    </button>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>,
    modalRoot
  );
};
