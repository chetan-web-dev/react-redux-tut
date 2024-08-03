import React from "react";

const Home = ()=>{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1013293.jpg" />
            </div>
            <h1>Home component</h1>
            <div className="card-wapper">
                <div className="img-wrapper item">
                    <img src="http://www.imgmobile.com/upfile/2020080511475354.jpg" />  
                </div>
                <div className="text-wrapper item">
                    <span>I-phone</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;