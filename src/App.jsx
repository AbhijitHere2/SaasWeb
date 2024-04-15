import { useState } from "react";

import "./App.css";
import Framer from "./component/Framer/Framer";
import Top from "./component/Top/Top";
import Hero from "./component/Hero/Hero";
import Brand from "./component/Brand/Brand";
import Progress from "./component/Progress/Progress";
import Managment from "./component/Management/Management";
import Price from "./component/Price/price";
import Testimonial from "./component/Testimonial/Testimonial";
import SignUp from "./component/SignUp/SignUp";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Top />
      <Framer />
      <Hero />
      <Brand />
      <Progress />
      <Managment />
      <Price />
      <Testimonial/>
      <SignUp/>
      <Footer/>
    </>
  );
}

export default App;
