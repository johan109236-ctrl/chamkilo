import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero";
import BestSellers from "./sections/BestSellers";

export default function Home() {
  return (
    <main id="id">
      <Hero/>
      <BestSellers/>
    </main>
  );
}
