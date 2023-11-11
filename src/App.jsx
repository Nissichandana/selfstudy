import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  console.log(products)

  // add state in here
  const [productList, setProductList] = useState(products);
  const [value, setValue] = useState("");

  const [form, setForm] = useState({ itemName: "", price: 0, description: "Describe this item", })


    // handleChange function
    const handleChange = event =>{
      setForm({ ...form, [event.target.name]: event.target.value })
    }
   




  // handleSubmit
  handleSubmit = event => {
    event.preventDefault()
     // do what you want with the form data
     console.log('form in submit')
     console.log(form);
     const newProduct =  form;
     setProductList([newProduct, ...productList])
 
 
   }
 




  // return
  return (
    <div> <h1> Big Time Shopping </h1>
      <form onSubmit={handleSubmit}>
      < input
  type = "text"
  value = { form.itemName }
  onChange = { handleChange }
  name = "itemName"
  placeholder = "write name here"
    />
    <input
  type="number"
  value={form.price}
  onChange={handleChange}
  name="price"
  placeholder="write price here"
/>
<input
  type="description"
  value={form.description}
  onChange={handleChange}
  name="description"
  placeholder="describe the product"
/>
      </form>
      <ul> {productList.map(item => <li>{item.itemName} {item.price}</li>)}
      </ul>
    </div>)
}








export default App;
