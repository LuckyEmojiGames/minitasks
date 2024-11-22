import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/index";
import AppRouter from "./routers/AppRouter";
import { InfoPages } from "../pages/InfoPage/index";
import { UserProvider } from "./context"; // Import UserProvider

function App() {
  const [showMainScreen, setShowMainScreen] = useState<boolean>(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      console.log("Telegram WebApp API is connected.");
      const tg = window.Telegram.WebApp;
      tg.expand();
      tg.disableVerticalSwipes();

      if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', 'true');
        window.location.reload();
      }
    } else {
      console.error("Telegram WebApp API is not connected.");
    }
  }, []);

  const handleFinish = () => {
    localStorage.setItem("hasSeenInfo", "true");
    setShowMainScreen(true);
  };

  return (
      <UserProvider> {/* Wrap the App with UserProvider */}
        <BrowserRouter>
          {showMainScreen ? (
              <Layout>
                <AppRouter />
              </Layout>
          ) : (
              <InfoPages onFinish={handleFinish} />
          )}
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;