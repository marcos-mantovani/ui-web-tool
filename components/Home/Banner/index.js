import {Container} from 'react-bootstrap';

import styles from "./index.module.css";

export default function Banner() {
  return (
    <Container className="position-relative">
        <img 
          className={`${styles.banner} img-fluid d-none d-sm-block`} 
          src="/images/banner-home.webp"
          title="UI Web Tool" 
          alt="UI Web Tool" 
        />
        <img 
          className={`${styles.banner} img-fluid d-sm-none`} 
          src="/images/banner-mobile-home.webp"
          title="UI Web Tool" 
          alt="UI Web Tool" 
        />
    </Container>
  );
}
