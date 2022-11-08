import { useState } from 'react'


const AddProduit = ({ onAdd }) => {
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [catégorie, setCategorie] = useState('')
    const [image, setImage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nom) {
      alert("Veuillez ajouter un produit");
      return;
    }
    onAdd({ nom, description, prix, catégorie,image });
    setNom("");
    setDescription("");
    setPrix("");
    setCategorie("");
    setImage("");
  }


  return (
    <div className=" d-flex mt-3 justify-content-center ">
      <form className="add-form  d-flex" onSubmit={onSubmit}>
        <div className="form-control">
            <input className='border-0'
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="form-control">
          
          <input  className='border-0'
            type="text"
            placeholder="Déscription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
         
          <input className='border-0'
            type="text"
            placeholder="Prix"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
       
          <input className='border-0'
            type="text"
            placeholder="Catégorie"
            value={catégorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
         
          <input className='border-0'
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <input  className="btn bg-primary  bg-opacity-25 ms-2" value="Ajouter" />
      </form>
    </div>
  );
};
export default AddProduit;
