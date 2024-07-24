import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./utils/ScrollTop";
import { ErrorPage } from "./routes/ErrorPage";
import { Loading } from "./components/Loading";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("Gamelly_Cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch(
            "https://www.cheapshark.com/api/1.0/deals?storeID=2&pageNumber=12"
          ),
          fetch(
            "https://www.cheapshark.com/api/1.0/deals?storeID=2&pageNumber=22"
          ),
        ]);

        const data = await Promise.all(responses.map((res) => res.json()));

        const combinedData = [...data[0], ...data[1]];
        const filteredGames = combinedData.filter(
          (game) =>
            game.thumb &&
            game.thumb.startsWith("https://sttc.gamersgate.com/images")
        );

        const sortedGames = filteredGames.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        setGames(sortedGames);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCart(cartData);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <ScrollToTop />
      <Header cart={cart} />
      <Outlet context={{ games, cart, setCart }} />
      <Footer />
    </>
  );
}

export default App;
