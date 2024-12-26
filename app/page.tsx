import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Efficient from "./components/Efficient";
import { Manrope } from "next/font/google";
import Globe from "@/components/ui/globe";
import Benefit from "./components/Benefit";
import { Fade } from "react-awesome-reveal";
import Team from "./components/Team";
import WorkWithUs from "./components/WorkWithUs";
import Beam from "./components/Beam";
import Orbiting from "./components/Orbiting";
import Idea from "./components/Idea";
import Footer from "./components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={` bg-gray-50 ${manrope.className}`}>
      <NavBar />

      <Hero />
      <Efficient />
      <Fade duration={2000}>
        <div className="flex items-center justify-center flex-wrap pb-10">
          <Globe className="" />
          <Benefit />
        </div>
      </Fade>
      <Team />

      <Beam />
      <Idea />
      <Footer />
    </div>
  );
}
