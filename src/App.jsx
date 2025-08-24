import "./App.css";
import { ArraysMaps1607 } from "./pages/15-07-Arrays-Maps/ArraysMaps1607";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Blogs } from "./pages/Blogs/Blogs";
import AboutUs from "./pages/About Us/AboutUs";
import Enquiry from "./pages/Enquiry/Enquiry";
import EnquiryUncontrolled from "./pages/Enquiry/EnquiryUncontrolled";
import EnquiryControlled from "./pages/Enquiry/EnquiryControlled";
import EnquiryControlledOptimized from "./pages/Enquiry/EnquiryControlledOptimized";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Blogs /> */}
      {/* <ArraysMaps1607 /> */}
      {/* <AboutUs /> */}
      {/* <Enquiry />
      <EnquiryUncontrolled /> */}
      {/* <EnquiryControlled /> */}
      <EnquiryControlledOptimized />
      <Footer />
    </div>
  );
};

export default App;
