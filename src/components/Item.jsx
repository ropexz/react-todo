const Item = ({ id, name, completed, toggle, deleteItem}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggle(id, e.target.checked)}
        />
        {name}
      </label>
      <button
        onClick={() => deleteItem(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
