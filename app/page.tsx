import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Story from "./components/Story";
import Villages from "./components/Villages";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Characters />
      <Story />
      <Villages />
    </div>
  );
}
