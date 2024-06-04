import Layout from '/components/Layout';
import Banner from '/components/Home/Banner';
import Features from '/components/Home/Features';
import Steps from '/components/Home/Steps';
import About from '/components/Home/About';
import Technologies from '/components/Home/Technologies';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Steps />
      <About />
      <Technologies />
    </Layout>
  );
}
