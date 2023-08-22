import React, { useReducer } from "react";

const itemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const ItemList = () => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  const addItem = () => {
    const newItem = { id: Date.now(), name: `Item ${items.length + 1}` };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const updateItem = (id, newName) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id, name: newName },
    });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div>
      <button onClick={addItem}>Thêm Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateItem(item.id, `Updated ${item.name}`)}>
              Cập nhật
            </button>
            <button onClick={() => deleteItem(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ButtonQuantily = () => {
  return (
    <div>
      <h1>Ví dụ sử dụng useReducer với nhiều đối tượng</h1>
      <ItemList />
    </div>
  );
};

export default ButtonQuantily;
