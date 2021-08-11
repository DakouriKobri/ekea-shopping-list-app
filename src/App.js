import ListPage from "./pages/ListPage";
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Shopping List</h1> 
      <ListPage />
      <Footer />

    </div>
  );
}

export default App;
