import { FaTimes } from 'react-icons/fa'

const Produit =({produit, onDelete, onUpdate})=>{
    return(        
            <div className="container w-25 mt-3 mb-5">
                <div className="card " >
                    <img src={`./img/${produit.image}`} className="card-img-top " height="450" />
                   
                    <div className="card-body">
                        <h5 className="card-title">{produit.nom}</h5>
                        <p className="card-text">{produit.description}</p>
                        <p className="card-text">{produit.catégorie}</p>
                        <p class="card-text"><small class="text-muted">{produit.prix}</small></p>
                    <div className='d-flex justify-content-end'>
                        <FaTimes style={{ color:'black', cursor:'pointer'}}
                        onClick={() => onDelete(produit.id)} />
                        
                    </div>
                        
                    </div>
                </div>
            </div>
    )
}
export default Produit
