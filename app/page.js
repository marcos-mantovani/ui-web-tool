import Layout from '/components/Layout';
import Banner from '/components/Home/Banner';
import Features from '/components/Home/Features';
import Steps from '/components/Home/Steps';
import About from '/components/Home/About';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Steps />
      <About />
    </Layout>
  );
}
