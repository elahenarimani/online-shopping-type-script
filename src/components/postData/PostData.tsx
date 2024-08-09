import { useContext } from "react";
import { ProductListContext } from "../siteSetting/SiteSetting";

function  PostData(){
const productListX = useContext(ProductListContext);
function newPost(){
    const newProduct = 
{
        "head-category": "بچگانه",
        "category":"نوزادی",
        "name": "بادی نوزادی",
        "price": 5000000,
        "in-stock": 5,
        "image": [
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1464/product/media/images/prod/QC/20240806/15/8b93811a-6e83-3c73-967f-4bf2c09311f3/1_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1464/product/media/images/prod/QC/20240806/15/fd997f61-3d30-3398-b4e1-b8595f5aea95/1_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1464/product/media/images/prod/QC/20240806/15/a9a9ea06-c9ae-398c-9e36-0bdd3e556d31/1_org_zoom.jpg"
        ]}
    
fetch("https://662b7b1dde35f91de15869ec.mockapi.io/products" , {
method : 'POST',
headers : {
    'Content-Type' : 'application/json'
},
body :JSON.stringify(newProduct)
}
)
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
}
    return(
        <div>
            <button onClick={ newPost}>newPost</button>
        </div>
    )
}
export default PostData;