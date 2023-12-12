import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div
      className="ItemListContainer"
      style={{
        
        border: `1px solid ${props.borderColor}`,
      }}
    
    >
      <h1>{props.title}</h1>
      <h5>{props.subTitle}</h5>
    </div>

  );
};

export default ItemListContainer;
