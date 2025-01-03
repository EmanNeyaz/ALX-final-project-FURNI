import { useContext } from 'react';
import { DataContext } from '../Context/context';


function Products() {
  const context = useContext(DataContext);
  const products = context ? context.products : [];
  console.log(products);
  return (
    <div>
      <h2>Products Component</h2>
      <div className='products d-flex flex-wrap justify-content-center'>
      {
        products.map((item) => (
          <div key={item.id} className='card m-2'>
             <img src={`/images/${item.image}`} alt="" className='card-img' style={ { width:"18rem"} } />
             <div className='card-body'>
               <h3>{item.name}</h3>
               <span>{item.price} $</span>
              
              </div>
              <button className='btn btn-success m-2'>Add to cart</button>
          </div>
        ))}
      </div>
      
       
    </div>
  );
}


export default Products;