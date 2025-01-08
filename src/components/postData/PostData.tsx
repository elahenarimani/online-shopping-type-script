import { useContext } from "react";
import { ProductListContext } from "../siteSetting/SiteSetting";
function PostData() {
  const productListX = useContext(ProductListContext);
  function newPost() {
    const newProduct = {
      headcategory: "کفش",
      category: "نیم بوت",
      name: "نیم بوت مشکی تخت",
      price: 3000000,
      instock: 3,
      image: [
        "https://cdn.dsmcdn.com/mnresize/600/-/ty593/product/media/images/20221107/12/209232166/593075860/2/2_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/600/-/ty581/product/media/images/20221026/13/202724655/593075857/4/4_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/600/-/ty581/product/media/images/20221026/13/202724655/593075857/3/3_org_zoom.jpg",
      ],
    };
    fetch("https://662b7b1dde35f91de15869ec.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <button onClick={newPost}>newPost</button>
    </div>
  );
}
export default PostData;
