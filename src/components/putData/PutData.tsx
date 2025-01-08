import React from "react";
const PutData = () => {
  function editPost() {
    console.log("Button clicked");
    const newProduct = {
      id: 24,
      headcategory: "عینک",
      category: " مردانه ",
      name: " عینک مردانه طرح پلین ",
      price: 12000000,
      instock: 20,
      image: [
        "https://cdn.dsmcdn.com/mnresize/600/-/ty512/product/media/images/20220819/18/162978401/540679707/4/4_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/200/-/ty510/product/media/images/20220819/18/162978401/540679707/1/1_org_zoom.jpg",
        "https://cdn.dsmcdn.com/mnresize/200/-/ty511/product/media/images/20220819/18/162978401/540679707/3/3_org_zoom.jpg",
      ],
    };
    fetch(`https://66d432795b34bcb9ab3dece3.mockapi.io/products/24`, {
      method: "PUT",
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
      <button onClick={editPost}>editPost</button>
    </div>
  );
};
export default PutData;
