import React from 'react';

export default function ProductItem(props){
  const  {product}=props;

    return (
        <div>
            <div className="card" style={{width: '13rem;'}}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text mb-0">${product.price}</p>
                    Quantity: 1
                    <br />
                    Total: 100
                    <br />
                    <a href="#" className="btn btn-danger">
                        <i className="fa fa-trash"> </i> Delete
                        </a>
                </div>
            </div> 
        </div>
    
    )
}