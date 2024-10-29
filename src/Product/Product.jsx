import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'; 
import { ThreeCircles } from 'react-loader-spinner'

const Product = () => {

    const [productItems, setProductItems] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [error, setError] = useState(null);


    //Function Get Allproducts
    const getAllProducts = async ()=>{
        setIsDataLoading(true);
        await axios.get(`https://fakestoreapi.com/products`)
        .then((response)=>{
            console.log(response.data)
            setProductItems(response.data)
            setIsDataLoading(false);
        } )
        .catch((error) => {
            setError("Network response was not ok");
            setIsDataLoading(false);
        });

       
    }

    //Call Api
    useEffect( ()=>{
        getAllProducts();
    },[])
    

  return (
    <>
    <div className='container'>
        <div className='row'>
            
              {error ? <>
              <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",fontWeight:'bold'}}>{error}</div>
              </> : <>
                { isDataLoading ? <>
                <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
                    <ThreeCircles
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>
               </>:<>
                { productItems.map((prodItem)=> <div key={prodItem.id} className='col-md-4'>
                
                <div className='my-2'>
                        <div className={styles.product_card}>

                            <div className={styles.product_image}>
                                <img  src={prodItem.image}  alt="" />
                            </div>
                            <div className="p-3">
                                <h2 className={styles.product_title}>{prodItem.title.split(" ").slice(0, 2).join(" ")}</h2>
                                <p className={styles.product_description}>{prodItem.description.split(" ").slice(0, 4).join(" ")}</p>
                                <div className={styles.product_rating} >
                                    <span className={styles.product_price}>${prodItem.price}</span>
                                    <span className={styles.product_rate}><i className="fa-regular fa-star"></i> {prodItem.rating.rate}</span>
                                </div>
                            </div>

                        </div>
                </div>

                </div> ) }
               </> }
              
              </> }
            
        </div>
    </div>
    </>
  )
}

export default Product