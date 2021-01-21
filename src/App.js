import React, { useState } from "react";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./components/profile/Profile";
import HeaderedPage from "./pages/headeredPage";
import Cart from "./components/cart/ShoppingCart";
import ProductList from "./components/products/ProductList";

function App() {
  const [user, setUser] = useState({ name: "" });
  const [products, setProducts] = useState(getStaticProducts());
  const [cartItems, setCartItems] = useState(getStaticCartItems());
  const [nCartItems, setNCartItems] = useState(cartItems.length);
  const [visible, setVisible] = useState(products);
  const [orders, setOrders] = useState(getStaticOrders());
  const [showingPage, setShowingPage] = useState("Shop");
  const isLoggedIn = () => {
    return user.name !== "";
  };
  const filterProductsBySearch = (search) => {
    setVisible(
      products.filter((p) =>
        p.title
          .toLowerCase()
          .includes(
            search.toLowerCase() ||
              p.description.toLowerCase().includes(search.toLowerCase())
          )
      )
    );
    setShowingPage("Shop");
  };
  const addToCart = (product) => {
    let auxList = cartItems;
    let filtered = auxList.filter((i) => i.product.id === product.id)[0];
    if (filtered && filtered.number > 0) filtered.number = filtered.number + 1;
    else auxList.push({ product: product, number: 1 });
    setCartItems(auxList);
    setNCartItems(nCartItems + 1);
  };

  let page;
  let childPage;
  console.log(isLoggedIn());
  if (isLoggedIn()) {
    if (showingPage === "Profile")
      childPage = <Profile user={user} orders={orders} />;
    else if (showingPage === "Cart")
      childPage = <Cart cartItems={cartItems} setCartItems={setCartItems} />;
    else
      childPage = (
        <ProductList
          addToCart={addToCart}
          products={visible}
          onLoginChanged={setUser}
          setCartItems={setCartItems}
        />
      );
    page = (
      <HeaderedPage
        setShowingPage={setShowingPage}
        filterProductsBySearch={filterProductsBySearch}
        head={showingPage}
        nCartItems={nCartItems}
      >
        {childPage}
      </HeaderedPage>
    );
  } else {
    page = <LoginPage onLoginChanged={setUser} />;
  }

  return <div style={{ height: "100%" }}>{page}</div>;
}

export default App;

const getStaticOrders = () => {
  return [
    { id: 1, date: new Date("11/01/2021"), state: "Entregado" },
    { id: 2, date: new Date("16/01/2021"), state: "En espera" },
    { id: 3, date: new Date("18/01/2021"), state: "En espera" },
  ];
};

const getStaticCartItems = () => {
  return [
    {
      product: {
        id: 1,
        title: "AMD Ryzen 9",
        imgURL:
          "https://www.pctechreviews.com.au/wp-content/gallery/ryzen_5900x_main/cache/AMD-Ryzen-5000-Series-Ryzen-9.png-nggid048361-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.png",
        description:
          "Procesador AMD ryzen 9, lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit ... ",
        stars: 5,
        price: 133.5,
        stock: 34,
      },
      number: 1,
    },
  ];
};
const getStaticProducts = () => {
  return [
    {
      id: 1,
      title: "AMD Ryzen 9",
      imgURL:
        "https://www.pctechreviews.com.au/wp-content/gallery/ryzen_5900x_main/cache/AMD-Ryzen-5000-Series-Ryzen-9.png-nggid048361-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.png",
      description:
        "Procesador AMD ryzen 9, lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit ... ",
      stars: 5,
      price: 133.5,
      stock: 34,
    },
    {
      id: 2,
      title: "Nvidia GTX3080",
      imgURL:
        "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png",
      description:
        "Tarjeta gráfica Nvidia 3080X, lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit ... ",
      stars: 5,
      price: 133.5,
      stock: 34,
    },
    {
      id: 3,
      title: "Nvidia 3090",
      imgURL:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-300-t.png",
      description:
        "Tarjeta Nvidia 3090, lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit ... ",
      stars: 5,
      price: 133.5,
      stock: 34,
    },
    {
      id: 4,
      title: "AMD Ryzen 9",
      imgURL: "../../img/amdRyzen.png",
      description:
        "Procesador AMD ryzen 9, lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit ... ",
      stars: 5,
      price: 133.5,
      stock: 34,
    },
  ];
};
