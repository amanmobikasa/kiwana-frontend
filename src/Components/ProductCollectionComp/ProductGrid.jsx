import React, { memo, useEffect, useRef, useState } from 'react'
import arrivalimg1 from '../../Assest/images/arrival1.png';
import arrivalimg2 from '../../Assest/images/arrival2.png';
import arrivalimg3 from '../../Assest/images/arrival3.png';
import arrivalimg4 from '../../Assest/images/arrival4.png';
import { CarouselCards } from '../customCarousel';
import pddPopUpImg from '../../Assest/images/pdppopupimg1.png';
import { useSelector } from 'react-redux';
import filterProductsByPriceRange from '../../common/priceRangeGlobalFunc';


const ProductGrid = () => {
    const [filterArrayofObject , setFilterArrayofObject] = useState([]);
    const [productListDataApi, setProductListDataApi] = useState(productCollectionList_api);
    const [priceRangeState, setPriceRangeState] = useState({});
    // const prevPriceRange = useRef({ minValue: null, maxValue: null });


    // getting the filter array of object  from the redux store 
    
    const selector = useSelector((state)=> state.filterProducts.filterProductState);
    const price_range = useSelector((state)=>state.priceRangeStore.priceRangeObj);

    useEffect(()=>{
        if(!price_range){
            setPriceRangeState(price_range);
        }
    }, [price_range])

    // function to filter the products based on the price range
    useEffect(()=>{
        if(price_range){
            const { minValue, maxValue } = price_range
            const updatedProducts = filterProductsByPriceRange(productListDataApi, minValue, maxValue);
            setProductListDataApi(updatedProducts);
        }
    },[price_range, productListDataApi])
    // useEffect(() => {
    //     if (price_range) {
    //         const { minValue, maxValue } = price_range;
    //         // Check if the values have changed before updating the state
    //         if (minValue !== prevPriceRange.current.minValue || maxValue !== prevPriceRange.current.maxValue) {
    //             const updatedProducts = filterProductsByPriceRange(productListDataApi, minValue, maxValue);
    //             setProductListDataApi(updatedProducts);
    //             // Update the ref to store the current values
    //             prevPriceRange.current = { minValue, maxValue };
    //         }
    //     }
    // }, [price_range, productListDataApi]);
    

    // render the filtered products based on ifelse condition
    function handleFilteredProducts(productType1, productType2){
        if(productType1 && productType2){
            if (productType1 == productType2){
                return true;
            }
            else{
                return false;
            }
        }
    }

    const handleFilterProducts = (selector) => {
        const filterConditions = {
            'in stock': 'in_stock',
            'out of stock': 'in_stock',
            'hair': 'product_type',
            'skin': 'product_type',
            'face': 'product_type',
            'body': 'product_type',
            // Add more conditions as needed
          };
         
        const filterProductValue =  productCollectionList_api.filter((product, idx) => { 
            let filter_data  = selector?.filterValue?.toLowerCase()

            const conditionProperty = filterConditions[filter_data];
            console.log("conditionProperty : ", conditionProperty);

            if (conditionProperty) {
              return product[conditionProperty]?.toLowerCase() === filter_data;
            }

            return false;
       
            // if(handleFilteredProducts(filter_data, "in stock")){
            //     return product?.in_stock.toLowerCase() == filter_data;
            // }
            // else if(handleFilterProducts(filter_data, "out of stock")){
            //     return product?.in_stock.toLowerCase() == filter_data;
            // }
            // else if(handleFilteredProducts(filter_data, "hair")){
            //     return product?.product_type?.toLowerCase() == filter_data;
            // }
            // else if(handleFilterProducts(filter_data, "skin")){
            //     return product?.product_type?.toLowerCase() == filter_data;
            // }
            // else if(handleFilteredProducts(filter_data, "face")){
            //     return product?.product_type?.toLowerCase() == filter_data;
            // }
            // else if(handleFilteredProducts(filter_data, "body")){
            //     return product?.product_type?.toLowerCase() == filter_data;
            // }
            
            // if (filterValue) {
            //     if (
            //         filterValue === product.product_type?.toLowerCase() ||
            //         filterValue === product.in_stock?.toLowerCase()   ||
            //         filterValue === `${product.weight} ml`.toLowerCase()
            //     ) {
            //         filterProductsTemp.push(product);

            //     }
            // }

        });
        // console.log("filterProductValue : ", filterProductValue);
        
        if(filterProductValue.length > 0){
            setProductListDataApi(filterProductValue); // inserting the filtered products.
        }
    };
   
    useEffect(()=>{
        if(selector.length > 0){
            setFilterArrayofObject(selector)
            selector.map((filterObj, i)=>{
                handleFilterProducts(filterObj);
            })
        }else{
            setProductListDataApi(productCollectionList_api);
        }
    },[selector])


   // create a function that handle the filter functionality
//    const handleFilterProducts = () => {
//     const filterProductsTemp = []
//     productCollectionList_api.filter((products, idx)=>{
//         if (filterArrayofObject[idx] && filterArrayofObject[idx].filterValue) {
//             console.log(idx);
//             if(filterArrayofObject[idx]?.filterValue?.toLowerCase() === products?.product_type?.toLowerCase()){
//                 filterProductsTemp.push(products)
//             }
//             if(filterArrayofObject[idx]?.filterValue?.toLowerCase() === products?.in_stock?.toLowerCase()){
//                 filterProductsTemp.push(products)

//             }
//             if(filterArrayofObject[idx]?.filterValue?.toLowerCase() === `${products?.weight} ml`?.toLowerCase()){
//                 filterProductsTemp.push(products);
//             }
//         }
//         return [];
//     })

//     console.log("filterProductOutput : ",filterProductsTemp);
    
//    }



    // console.log("product : ", productListDataApi)

    return <>
        <section id='' className='w-full lg:w-full mt-[1.7rem] relative '>
            <div className='content-container'>
            { productListDataApi.length > 0 ?
                <div className='grid grid-cols-2 lg:grid-cols-4  grid-rows-5 lg:grid-rows-3 gap-3 lg:gap-0 justify-between '>
                {
                    productListDataApi.map((items, i)=>{
                        {/* console.log(items.pdpPopup[0].product_image); */}
                        return <>
                        <div key={i} className='w-full h-full object-contain'>
                            <CarouselCards cardData={items}  />
                        </div>
                        </>
                    }) 
                }  
                </div> : <div className='flex w-full justify-center items-center'>
                    <h1 className='text-center font-[500] text-4xl'>Product Not Found</h1>
                </div>
            }
            </div>
        </section>       
    </>
}

const productCollectionList_api = [
    {
        id : 1,
        product_type : "hair",
        in_stock : "In stock",
        weight : 100,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 10,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : "1"

            }
        ]
    },
    {
        id : 2,
        product_type : "hair",
        in_stock : "In stock",
        weight : 150,
        imgLink : arrivalimg2,
        title : "hair serum",
        price : 12,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 2",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '2'

            }
        ]
    },
    {
        id : 3,
        product_type : "skin",
        weight : 100,
        in_stock : "In Stock",
        imgLink : arrivalimg3,
        title : "skin care",
        price : 12,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 3",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '3'

            }
        ]
    },
    {
        id : 4,
        product_type : "hair",
        weight : 200,
        in_stock : "Out of Stock",
        imgLink : arrivalimg4,
        title : "hair conditionar new",
        price : 20,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 4",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '4'

            }
        ]
    },
    {
        id : 5,
        product_type : "face",
        in_stock : "in stock",
        weight : 250,
        imgLink : arrivalimg1,
        title : "Face mask",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 5",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '5'

            }
        ]
    },
    {
        id : 6,
        product_type : "hair",
        weight : 400,
        in_stock : "out of stock",
        imgLink : arrivalimg4,
        title : "hair oil",
        price : 600,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 6",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '6'

            }
        ]
    },
    {
        id : 7,
        product_type : "hair",
        weight : 450,
        in_stock : "in stock",
        imgLink : arrivalimg3,
        title : "hair shampoo",
        price : 80,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 7",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '7'

            }
        ]
    },
    {
        id : 8,
        product_type : "hair",
        in_stock : "out of stock",
        weight : 250,
        imgLink : arrivalimg2,
        title : "hair new shampo",
        price : 100,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 8",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '8'

            }
        ]
    },
    {
        id : 9,
        product_type : "skin",
        weight : 300,
        in_stock : "out of stock",
        imgLink : arrivalimg2,
        title : "skin care ",
        price : 30,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 9",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '9'

            }
        ]
    },
    {
        id : 10,
        product_type : "face",
        weight : 450,
        in_stock : "in stock",
        imgLink : arrivalimg2,
        title : "face cream",
        price : 36,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 10",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '10'

            }
        ]
    },
    {
        id : 11,
        product_type : "face",
        in_stock : "out of stock",
        weight : 750,
        imgLink : arrivalimg2,
        title : "new face cream",
        price : 40,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 11",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '11'

            }
        ]
    },
    {
        id : 12,
        product_type : "face",
        in_stock : "in stock",
        weight : 300,
        imgLink : arrivalimg2,
        title : "fair and lovely",
        price : 40,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 12",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '12'

            }
        ]
    },
    {
        id : 13,
        product_type : "hair",
        weight : 100,
        in_stock : "in stock",
        imgLink : arrivalimg2,
        title : "hair serum ",
        price : 40,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 13",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '13'

            }
        ]
    },
    {
        id : 14,
        product_type : "hair",
        weight : 300,
        in_stock : "in stock",
        imgLink : arrivalimg2,
        title : "new hair",
        price : 60,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 14",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '14'

            }
        ]
    },
    {
        id : 15,
        product_type : "hair",
        weight : 150,
        in_stock : "out of stock",
        imgLink : arrivalimg2,
        title : "hair conditioner 1",
        price : 60,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 15",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '15'

            }
        ]
    },
    {
        id : 16,
        product_type : "hair",
        weight : 250,
        in_stock : "in stock",
        imgLink : arrivalimg2,
        title : "hair conditioner 2",
        price : 50,
        reviews : "",
        reviewsCount : 2947,
        pdpPopup : [
            {
                product_image: pddPopUpImg,
                product_title : "Hair Conditionar 16",
                product_price : 600,
                product_rating : [
                    {
                        rating : 4,
                    }
                ],
                product_review : 212,
                product_stock : 58,
                product_type : [
                    {
                        name : "saffron",
                        label : "Saffron",
                        selected : false,
                        value : "saffron"
                    },
                    {
                        name : "hyaluronic_acid",
                        label : "Hyaluronic Acid",
                        selected : false,
                        value : "hyaluronic_acid"
                    },
                    {
                        name : "ferulic_acid",
                        label : "Ferulic Acid",
                        selected : false,
                        value : "ferulic_acid"
                    },
                    {
                        name : "vitamin_c",
                        label : "Vitamin C",
                        selected : false,
                        value : "vitamin_c"
                    },
                    {
                        name : "vitamin_e",
                        label : "Vitamin E",
                        selected : false,
                        value : "vitamin_e"
                    },
                ],
                product_weight : [
                    {
                        weight_label : "30ml",
                        selected : true
                    },
                    {
                        weight_label : "50ml",
                        selected : false
                    },
                    {
                        weight_label : "100ml",
                        selected : false
                    },
                ],
                product_quantity : 1,
                pdp_link : '16'

            }
        ]
    },
]
export { productCollectionList_api,  ProductGrid };