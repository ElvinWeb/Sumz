import { Toaster } from "react-hot-toast";
import SummaryContainer from "./components/SummaryContainer";
import HeroContent from "./components/HeroContent";
import HeroNav from "./components/heroNav";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const toastStyle = {
    fontSize: "16px",
    maxWidth: "500px",
    padding: "16px 24px",
    backgroundColor: "#fff",
    color: "#374151",
  };

  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero>
            <HeroNav />
            <HeroContent />
          </Hero>
          <SummaryContainer />
        </div>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          success: {
            duration: 3500,
          },
          error: {
            duration: 3500,
          },
          style: toastStyle,
        }}
      />
    </>
  );
}

export default App;
