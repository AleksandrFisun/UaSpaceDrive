import styles from 'styles/index.module.scss';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.shContainer}>
      <div className={styles.footerWr}>
        <div className={styles.footerContact}>
          <h3 className={styles.footerContactTitle}>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:+380952233445" className={styles.footerContactLink}>
                +380952233445
              </a>
            </li>
            <li>
              <a
                href="mailto:aleksandr.fisun.work@gmail.com"
                className={styles.footerContactLink}
              >
                aleksandr.fisun.work@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerContactTitle}>Social Media</h3>
          <ul className={styles.footerContactSocial}>
            <li className={styles.footerContactSocialItem}>
              <Link
                to={'https://www.instagram.com/_aleks_vall_/'}
                target="_blank"
                className={styles.footerContactSocialLinkI}
              >
                <AiFillInstagram />
              </Link>
            </li>
            <li className={styles.footerContactSocialItem}>
              <Link
                to={'https://www.linkedin.com/in/aleksandr-fisun'}
                target="_blank"
                className={styles.footerContactSocialLinkL}
              >
                <BsLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
