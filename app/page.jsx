import Header from "./components/header/Header";
import Section1 from "./components/section_one/Section";
import Section2 from "./components/section_two/Section";
import Section3 from "./components/section_three/Section";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
