import AddEmployee from "../_components/AddEmployee";
import Navbar from "../_components/Navbar";

export default async function Home() {

  return (
    <>
      <Navbar/>
      <AddEmployee/>
    </>
  );
}