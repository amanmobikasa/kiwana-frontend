import React from 'react'
import arrivalimg1 from '../../Assest/images/arrival1.png';
import arrivalimg2 from '../../Assest/images/arrival2.png';
import arrivalimg3 from '../../Assest/images/arrival3.png';
import arrivalimg4 from '../../Assest/images/arrival4.png';
import { CarouselCards } from '../customCarousel';
import pddPopUpImg from '../../Assest/images/pdppopupimg1.png';

const ProductGrid = () => {
    return <>
    <section id='' className='w-full lg:w-full mt-[1.7rem] relative '>
        <div className='content-container'>
            <div className='grid grid-cols-2 lg:grid-cols-4  grid-rows-5 lg:grid-rows-3 gap-3 lg:gap-0 justify-between '>
            {
                productCollectionList_api.map((items, i)=>{
                    {/* console.log(items.pdpPopup[0].product_image); */}
                    return <>
                    <div key={i} className='w-full h-full object-contain'>
                        <CarouselCards cardData={items}  />
                    </div>
                    </>
                })
            }
                
            </div>
        </div>
    </section>       
    </>
}

const productCollectionList_api = [
    {
        id : 1,
        imgLink : arrivalimg1,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 2,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 3,
        imgLink : arrivalimg3,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 4,
        imgLink : arrivalimg4,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 5,
        imgLink : arrivalimg1,
        title : "hair conditioner",
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 6,
        imgLink : arrivalimg4,
        title : "hair conditioner",
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 7,
        imgLink : arrivalimg3,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 8,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 9,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 10,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 11,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 12,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 13,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 14,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 15,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
    {
        id : 16,
        imgLink : arrivalimg2,
        title : "hair conditioner",
        price : 600,
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
                pdp_link : '/login'

            }
        ]
    },
]
export default ProductGrid;