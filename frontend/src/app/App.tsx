import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/index";
import AppRouter from "./routers/AppRouter";
import { InfoPages } from "../pages/InfoPage/index";
import { useEffect, useState } from "react";

function App() {
  const [showMainScreen, setShowMainScreen] = useState<boolean>(false);

  useEffect(() => {
    const hasSeenInfo = localStorage.getItem("hasSeenInfo");
    if (hasSeenInfo === "true") {
      setShowMainScreen(true);
    }
  }, []);
  const handleFinish = () => {
    localStorage.setItem("hasSeenInfo", "true");
    setShowMainScreen(true);
  };

  return (
    // <Sentry.ErrorBoundary fallback={<h2>Something went wrong</h2>}>
      <BrowserRouter>
        {showMainScreen ? (
          <Layout>
            <AppRouter />
          </Layout>
        ) : (
          <InfoPages onFinish={handleFinish} />
        )}
      </BrowserRouter>
    // </Sentry.ErrorBoundary>
  );
}

export default App;
