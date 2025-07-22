import React, { useState } from "react";
import "./App.css";

function App() {
  const [stocks, setStocks] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editPrice, setEditPrice] = useState("");

  // Add Stock
  const addStock = () => {
    if (productName && quantity && price) {
      setStocks([
        ...stocks,
        { productName, quantity: parseInt(quantity), price: parseFloat(price), status: parseInt(quantity) > 0 ? 'In Stock' : 'Out of Stock' },
      ]);
      setProductName("");
      setQuantity("");
      setPrice("");
    }
  };

  // Edit Stock
  const editStock = (index) => {
    setIsEditing(true);
    setCurrentEditIndex(index);
    setEditProductName(stocks[index].productName);
    setEditQuantity(stocks[index].quantity);
    setEditPrice(stocks[index].price);
  };

  // Save Edited Stock
  const saveEdit = () => {
    const updatedStocks = stocks.map((stock, index) =>
      index === currentEditIndex
        ? {
            productName: editProductName,
            quantity: editQuantity,
            price: editPrice,
            status: editQuantity > 0 ? 'In Stock' : 'Out of Stock',
          }
        : stock
    );
    setStocks(updatedStocks);
    resetEdit();
  };

  // Reset Editing Fields
  const resetEdit = () => {
    setIsEditing(false);
    setCurrentEditIndex(null);
    setEditProductName("");
    setEditQuantity("");
    setEditPrice("");
  };

  // Delete Stock
  const deleteStock = (index) => {
    const updatedStocks = stocks.filter((_, i) => i !== index);
    setStocks(updatedStocks);
  };

  return (
    <div className="app">
      <h1>Stock Management System</h1>

      {/* Add New Stock */}
      <div className="stock-form">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <button onClick={addStock}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      {/* Stock List */}
      <div className="stock-list">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>{stock.productName}</td>
                <td>{stock.quantity}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={stock.status === 'Out of Stock' ? 'out-of-stock' : ''}>
                  {stock.status}
                </td>
                <td>
                  <button onClick={() => editStock(index)}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={() => deleteStock(index)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Stock Item</h2>
            <div className="stock-form">
              <input
                type="text"
                value={editProductName}
                onChange={(e) => setEditProductName(e.target.value)}
                placeholder="Edit Product Name"
              />
              <input
                type="number"
                value={editQuantity}
                onChange={(e) => setEditQuantity(e.target.value)}
                placeholder="Edit Quantity"
              />
              <input
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="Edit Price"
              />
              <div className="modal-buttons">
                <button onClick={saveEdit}>
                  <i className="fas fa-save"></i> Save Edit
                </button>
                <button className="cancel" onClick={resetEdit}>
                  <i className="fas fa-times"></i> Cancel Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
