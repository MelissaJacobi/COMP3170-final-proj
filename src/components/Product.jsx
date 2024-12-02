import { useState } from "react";
import styles from "./Product.module.css";
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"; 

export default function Product({ name, price, description, imageUrl, updateCart }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState("8\"");
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleContainerClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.popupOverlay)) {
      handleClosePopup();
    }
  };

  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleAddQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleSubtractQuantity = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const addToCart = () => {
    const cartItem = {
      id: `${name}-${selectedSize}`,
      name,
      price,
      description,
      imageUrl,
      size: selectedSize,
      quantity,
    };

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === cartItem.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      storedCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    updateCart(storedCart); 
    alert(`${name} has been added to your cart!`);
  };

  const addToFavorites = () => {
    const favoriteItem = {
      id: name,
      name,
      price,
      imageUrl,
    };

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = storedFavorites.find((item) => item.id === favoriteItem.id);

    if (isAlreadyFavorite) {
      alert(`${name} is already in your favorites!`);
    } else {
      storedFavorites.push(favoriteItem);
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      alert(`${name} has been added to your favorites!`);
    }

    setIsFavorited(true); 
  };

  return (
    <div>
      <div className={styles.container} onClick={handleContainerClick}>
        <img src={imageUrl || placeholder} className={styles.productImg} alt={name || "Product"} />
        <div
          className={styles.heartIcon}
          onClick={(e) => {
            e.stopPropagation(); 
            addToFavorites();
          }}
        >
          {isFavorited ? (
            <IoHeartSharp size={24} color="darkred" /> 
          ) : (
            <IoHeartOutline size={24} color="black" /> 
          )}
        </div>
        <p className={styles.productName}>{name || "Product Name"}</p>
        <div className={styles.infoAndCart}>
          <p>${price || "0.00"}</p>
          <PiShoppingCart className={styles.icon} />
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={handleOverlayClick}>
          <div className={styles.popup}>
            <p className={styles.popupProductName}>{name || "Product Name"}</p>
            <img src={imageUrl || placeholder} className={styles.popupImg} alt={name || "Product"} />
            <p className={styles.popupDescription}>{description || "Product details and description go here."}</p>
            <div className={styles.menuAndPrice}>
              <select id="sizeSelect" value={selectedSize} onChange={handleSizeChange} className={styles.sizeSelect}>
                <option value="8">8"</option>
                <option value="12">12"</option>
                <option value="16">16"</option>
              </select>
              <p className={styles.popupPrice}>${price || "0.00"}</p>
            </div>
            <div className={styles.quantityAndAddBtn}>
              <div className={styles.quantity}>
                <button className={styles.subtractBtn} onClick={handleSubtractQuantity}>
                  &#8722;
                </button>
                <p>{quantity}</p>
                <button className={styles.addBtn} onClick={handleAddQuantity}>
                  &#43;
                </button>
              </div>
              <button className={styles.addToCart} onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
