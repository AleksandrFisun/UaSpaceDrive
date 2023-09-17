import { NavLink } from 'react-router-dom';
import logo from 'images/logo.png';
import styles from 'styles/index.module.scss';
const Header = () => {
  return (
    <div className={styles.shContainer}>
      <div className={styles.HeaderWr}>
        <NavLink to={'/'} className={styles.HeaderLogoWr}>
          <span className={styles.HeaderLogoImg}>
            <img src={logo} width="40px" height="40px" alt="logotype" />
          </span>
          <span className={styles.HeaderLogoText}>uaspacedrive</span>
        </NavLink>

        <div className={styles.HeaderNavWr}>
          <NavLink to={'/catalog'} className={styles.HeaderNavBtn}>
            <span className={styles.HeaderNavBtnText}>Сar Park</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
