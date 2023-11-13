import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import products from "./data";

function App() {
  // console.log(products);

  // add state in here
  const [productList, setProductList] = useState(products);

  const [value, setValue] = useState("");

  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
  });
  
  
  //const isHiring = true;
  const [isHiring, setIsHiring] = useState(true);

  const toggleHiring = () => {
    console.log("1...");
    setIsHiring(!isHiring);
  };
  
  // const !isHiring = true;

  // handleChange function
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
   // do what you want with the form data
    console.log("form in submit");
    console.log(form);
    const newProduct = form;
    setProductList([newProduct, ...productList]);
    setForm({
      itemName: "Type Item name here",
      price: "Type Item Price here",
      description: "Type Item Description here",
    })
  };


  
  // return
  return (
    <div>
      <h1 onClick={toggleHiring}> Big Time Shopping </h1>
      {!isHiring ? (<h2>Yes, we are hiring </h2>) : (<h2>Sorry, try again tomorrow</h2>) }

      <form onSubmit={handleSubmit}>
        <input type="text" value={form.itemName} onChange = {handleChange} name="itemName" placeholder="Type Item name here" />
        <input type="text" value={form.price} onChange = {handleChange} name="price" placeholder="Type Item Price here" />
        <input type="text" value={form.description} onChange = {handleChange} name="description" placeholder="Type Item Description here" />
        <input type="submit" value="Submit Form"/>
      </form>
      {/* <ul>
        {productList.map((item) => (
          <li>
            {item.itemName} {item.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
