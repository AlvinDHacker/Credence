import Navbar from "../_components/Navbar";
import Portfolio from "../_components/Portfolio";
import GenerateQR from "../_components/GenerateQR";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Portfolio />
      <GenerateQR data={"hello"} />
    </>
  );
}
