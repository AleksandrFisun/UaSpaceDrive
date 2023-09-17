import { useSelector } from 'react-redux';
import {
  selectCar,
  selectAdvertsPage,
  selectAllCar,
  selectOpenModal,
  selectIdCar,
} from 'redux/adverts/advertsSelectors';

export const useAdverts = () => {
  const car = useSelector(selectCar);
  const page = useSelector(selectAdvertsPage);
  const allCar = useSelector(selectAllCar);
  const OpenModal = useSelector(selectOpenModal);
  const idCar = useSelector(selectIdCar);

  return {
    car,
    page,
    allCar,
    OpenModal,
    idCar,
  };
};
