import Item from './Item';

const List = ({ list, completedHandler, deleteHandler }) => {
  return (
    <ul className="list">
      {list.length === 0 && 'Nothing to do'}
      {list.map((item) => {
        return <Item {...item} key={item.id} toggle={completedHandler} deleteItem={deleteHandler} />;
      })}
    </ul>
  );
};

export default List;
