import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

import Header from "../Layout/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
