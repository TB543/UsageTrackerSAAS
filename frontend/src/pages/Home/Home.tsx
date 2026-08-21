import Navbar from "../../components/Navbar/Navbar";
import UnderDevelopment from "../UnderDevelopment/UnderDevelopment";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Homepage content */}
        <UnderDevelopment />
      </main>
    </>
  );
}

export default Home;