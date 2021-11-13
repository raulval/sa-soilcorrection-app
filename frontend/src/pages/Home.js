import idrLogo from "../assets/images/idr-logo.png";
import Header from "../components/Header";
import "../styles/home.css";

export function Home() {
  return (
    <div id="page-home">
      <Header />

      <img src={idrLogo} alt="IDR Paraná" width="40%" height="40%" />
    </div>
  );
}
