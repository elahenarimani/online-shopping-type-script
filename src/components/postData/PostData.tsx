import { useContext } from "react";
import { ProductListContext } from "../siteSetting/SiteSetting";

function  PostData(){
const productListX = useContext(ProductListContext);
function newPost(){
    const newProduct = 
{
        "head-category": "زنانه",
        "category": "کیف مجلسی",
        "name": "کیف رودوشی زنانه",
        "price": 2500000,
        "in-stock": 2,
        "image": [
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1435/product/media/images/prod/QC/20240722/10/5666c793-e632-3ae1-8469-baced791aace/1_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1436/product/media/images/prod/QC/20240722/10/ebac3944-4f8a-3222-8f24-ff28da01bd96/1_org_zoom.jpg",
          "https://cdn.dsmcdn.com/mnresize/600/-/ty1434/product/media/images/prod/QC/20240722/10/b20e23f6-520f-33bb-94ec-89dff5b3d2d9/1_org_zoom.jpg"
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