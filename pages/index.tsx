import { Inter } from "@next/font/google";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
