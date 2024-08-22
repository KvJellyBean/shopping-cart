const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("Gamelly_Cart", JSON.stringify(cart));
};

export const handleAddToCart = (game, quantity, setCart) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.gameID === game.gameID);
    let newCart;
    if (existingItem) {
      newCart = prevCart.map((item) =>
        item.gameID === game.gameID
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...prevCart, { ...game, quantity }];
    }
    saveCartToLocalStorage(newCart);
    return newCart;
  });
};

export const handleRemoveFromCart = (game, setCart) => {
  setCart((prevCart) => {
    const newCart = prevCart.filter((item) => item.gameID !== game.gameID);
    saveCartToLocalStorage(newCart);
    return newCart;
  });
};

export const handleUpdateQuantity = (game, quantity, setCart) => {
  setCart((prevCart) => {
    let newCart;
    if (isNaN(quantity) || quantity < 1) {
      newCart = prevCart.map((item) =>
        item.gameID === game.gameID ? { ...item, quantity: 1 } : item
      );
    } else {
      newCart = prevCart.map((item) =>
        item.gameID === game.gameID
          ? { ...item, quantity: Number(quantity) }
          : item
      );
    }
    saveCartToLocalStorage(newCart);
    return newCart;
  });
};

export const handleIncrementQuantity = (game, setCart) => {
  setCart((prevCart) => {
    const newCart = prevCart.map((item) =>
      item.gameID === game.gameID
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    saveCartToLocalStorage(newCart);
    return newCart;
  });
};

export const handleDecrementQuantity = (game, setCart) => {
  if (game.quantity > 1) {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.gameID === game.gameID
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  }
};

export const handleCheckout = (setCart) => {
  setCart([]);
  localStorage.removeItem("Gamelly_Cart");
};

export const handleAddButton = (quantity, setQuantity) => {
  setQuantity(quantity + 1);
};

export const handleSubtractButton = (quantity, setQuantity) => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

export const handleInput = (e, setQuantity) => {
  if (isNaN(e.target.value) || e.target.value < 1) {
    setQuantity(1);
  } else {
    setQuantity(Number(e.target.value));
  }
};
