import { productCollectionList_api } from "../Components/ProductCollectionComp/ProductGrid";

// const globalSearchHook = (search_querry) => {
   
//     try {
//         if(search_querry){
//             const searchQuerry = search_querry;
//             const filteredProducts = productCollectionList_api.filter((product) => {
//                 console.log("product : ", product.title.toLowerCase().includes(searchQuerry));
                
//                 return product.title.toLowerCase().split("").forEach((product_char)=>{
//                     return product_char.includes(searchQuerry);
//                 })
//             })
//             console.log("filteredProducts", filteredProducts);

//         }else{
//             throw new Error("searching querry not found")
//         }
//     } catch (error) {
//         if(error){
//             console.error("Getting Error while searching", error.message)
//         }
//     }

// }
const globalSearchHook = (query) => {
  if(!query) return;
  if(query === "") return;

  try {
    const results = productCollectionList_api.filter(product => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
    return results;

  } catch (error) {
    console.error('Search error', error);
    return [];
  }
}


export {globalSearchHook};