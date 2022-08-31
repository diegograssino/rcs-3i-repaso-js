import { useEffect } from "react";
import { useState } from "react";

function App() {

	const [data, setData] = useState({});

	useEffect(() => {

		fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setData(json))

	}, [])

	
  return (
    <div>
			<h2>Titulo: </h2><span>{data.title}</span>
			<h2>Precio: </h2><span>{data.price}</span>
			<h2>Description: </h2><span>{data.description}</span>
			{console.log("render")}
    </div>
  );
}

export default App;
