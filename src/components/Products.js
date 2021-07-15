import React,{ useState} from 'react'

export default function Products(props) {

    const {product}=props;
    const [isShowBuyButton,setIsShowBuyButton]=useState(true);

    const toggleButton = (product) => {
        console.log(product);
        setIsShowBuyButton(false)
    }
    return (
        <>
        <div id="pro" key={product.id}>
           <img className="small" src={product.src} alt={product.name} id="img" />
            <h3>{product.name}</h3>
            <h4>Rs.{product.price}</h4>
            {isShowBuyButton &&
                <div>
                    <button className="addpro" onClick={(e) => {
                        if (window.confirm("Do you really want to buy this item??")) {
                            toggleButton(product);
                        }
                    }}>
                        Buy Now
                    </button>
                </div>
            }
        </div>
        </>
    )
}
