import { useState, useEffect } from "react";
import Navbar from "./components/navBar/Navbar";
import Produits from "./components/body/Produits";
import AddProduit from "./components/body/AddProduit";
import Footer from "./components/footer/Footer";
import Presentation from "./components/body/Presentation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getProduits = async () => {
      const produitFromServer = await fetchProduits();
      setProduits(produitFromServer);
    };
    getProduits();
  }, []);

  const fetchProduits = async () => {
    const res = await fetch("http://localhost:5000/produits");
    const data = await res.json();

    return data;
  };

  //methode de suppresion
  const deleteProduits = async (id) => {
    await fetch(`http://localhost:5000/produits/${id}`, {
      method: "DELETE",
    });

    setProduits(produits.filter((produit) => produit.id !== id));
  };

  //methode d'Ajout
  const addProduit = async (produit) => {
    const res = await fetch("http://localhost:5000/produits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(produit),
    });
    const newProduit = await res.json();

    setProduits([...produits, newProduit]);
  };



  return (
    <BrowserRouter>
      <Navbar logo={"LOGO"} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <AddProduit onAdd={addProduit} />
                <Produits produits={produits} onDelete={deleteProduits} />{" "}
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/presentation" element={<Presentation />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
