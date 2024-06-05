export const GetCategories=async ()=>{
    await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

export const GetAllProducts =async ()=>{
    await fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>console.log(json))
}