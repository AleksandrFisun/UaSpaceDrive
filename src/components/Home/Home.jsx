import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { BsCreditCard2Front } from 'react-icons/bs';
import styles from 'styles/index.module.scss';

const Home = () => {
  return (
    <div className={styles.spContainer}>
      <section className={styles.HeroWr}>
        <img
          src="https://res.cloudinary.com/dyq4kuhir/image/upload/v1694896343/rental-car-home/gwidhmwlpkh26jfwap92.jpg"
          className={styles.HeroImg}
          alt=" Have the best trip with UaSpaceDrive Ukraine"
        />
        <span className={styles.HeroText}>
          Have the best trip with UaSpaceDrive Ukraine
        </span>
      </section>
      <section className={styles.shContainer}>
        <div className={styles.Advantages}>
          <ul className={styles.AdvantagesWr}>
            <li className={styles.AdvantagesItem}>
              <span className={styles.AdvantagesFImage}>
                <BsCreditCard2Front />
              </span>
              <h3 className={styles.AdvantagesFText}>
                Super flexible cancellation policy
              </h3>
              <p className={styles.AdvantagesFTextSecond}>
                No cancellation fees, just full cash refunds
              </p>
            </li>
            <li className={styles.AdvantagesItem}>
              <span className={styles.AdvantagesFImageP}>
                <FiMapPin />
              </span>
              <h3 className={styles.AdvantagesFText}>Closer to you</h3>
              <p className={styles.AdvantagesFTextSecond}>1,500 locations</p>
            </li>
            <li className={styles.AdvantagesItem}>
              <span className={styles.AdvantagesFImage}>
                <AiOutlineFieldTime />
              </span>
              <h3 className={styles.AdvantagesFText}>Speedy QuickPass</h3>
              <p className={styles.AdvantagesFTextSecond}>
                Time-saving free pre-registration service
              </p>
            </li>
          </ul>

          <ul className={styles.AdvantagesWr}>
            <li className={styles.AdvantagesItem}>
              <img
                src="https://res.cloudinary.com/dyq4kuhir/image/upload/v1694902349/rental-car-home/ymebm0zs4eiyh5n2puzs.jpg"
                className={styles.AdvantagesSImage}
                alt="Electric cars for hire"
              />
              <h3 className={styles.AdvantagesSText}>Electric cars for hire</h3>
              <p className={styles.AdvantagesSTextSecond}>
                Rent an electric car in Ukraine – save on fuel and care for the
                environment
              </p>
            </li>
            <li className={styles.AdvantagesItem}>
              <img
                src="https://res.cloudinary.com/dyq4kuhir/image/upload/v1694902349/rental-car-home/mtt1szxptlqxkjz7hnir.jpg"
                className={styles.AdvantagesSImage}
                alt="Privileges for Mastercard® holders"
              />
              <h3 className={styles.AdvantagesSText}>
                Privileges for Mastercard® holders
              </h3>
              <p className={styles.AdvantagesSTextSecond}>
                Have exclusive terms
              </p>
            </li>
            <li className={styles.AdvantagesItem}>
              <img
                src="https://res.cloudinary.com/dyq4kuhir/image/upload/v1694896222/rental-car-home/ggiielhk3smwcnegyq4v.jpg"
                className={styles.AdvantagesSImage}
                alt="New cars for rent"
              />
              <h3 className={styles.AdvantagesSText}>New cars for rent</h3>
              <p className={styles.AdvantagesSTextSecond}>
                We have added new cars to our fleet: SUVs, pickups and minivans
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Home;
