import {Container} from 'react-bootstrap';

import styles from "./index.module.css";

export default function Banner() {
  return (
    <Container className="position-relative">
        <img 
          className={`${styles.banner} img-fluid`} 
          src="/images/banner-home.png"
          title="UI Web Tool" 
          alt="UI Web Tool" 
        />
    </Container>
  );
}
