import "./App.css";
import { ArraysMaps1607 } from "./pages/15-07-Arrays-Maps/ArraysMaps1607";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Blogs } from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <div>
    <Header />
    <Blogs />
    {/* <ArraysMaps1607 /> */}
    <Footer />
   </div>
  );
}

export default App;
