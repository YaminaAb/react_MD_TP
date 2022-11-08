import Produit from "./Produit";
const Produits = ({produits, onDelete, onUpdate}) => {
    return (
        <div className="d-flex flex-wrap ">
            {produits.map((produit)=>(
                
                <Produit key={produit.id} produit={produit} onDelete={onDelete} onUpdate={onUpdate}/>
            ))}
        </div>
        
    );
  };
  
  export default Produits;
  