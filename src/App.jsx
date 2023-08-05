/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react"

function App() {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ])
  const handleChanges = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value
    setInputFields(values)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("InputFields", inputFields);
    axios.post("https://jsonplaceholder.typicode.com/posts", inputFields[0]).then((res) => {
      if (res.status === 201) {
        alert(res.status)
      }
    })
  }

  return (
    <>
      <h1>Hello Dynamic Form Page</h1>
      <form>
        {inputFields?.map((inputFields, index) => (
          <div key={index}>
            <input
              type="text"
              onChange={(e) => handleChanges(index, e)}
              name="firstName"
              value={inputFields?.firstName} />
            <input
              type="text"
              onChange={(e) => handleChanges(index, e)}
              name="lastName"
              value={inputFields?.lastName} />
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
