import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [user, setUser] = useState(0);

	useEffect(() => {
		setUser(GenerateUsers(usersArray));
		document.title = { user};
	}, [user.length]);
  
	return (
		<>
    
			<p>{user}</p>
			<button onClick={onClickHandler}>click me</button>
		</>
	);
}

export default App;
const usersArray = [
	{
		name: "Lela",
		age: 23,
		id: 1,
	},
	{
		name: "Nino",
		age: 20,
		id: 2,
	},
	{
		name: "Nika",
		age: 43,
		id: 3,
	},
	{
		name: "Sandro",
		age: 33,
		id: 4,
	},
	{
		name: "Elene",
		age: 25,
		id: 5,
	},
	{
		name: "Salome",
		age: 28,
		id: 6,
	},
	{
		name: "Beka",
		age: 29,
		id: 7,
	},
	{
		name: "Gio",
		age: 17,
		id: 8,
	},
	{
		name: "Teo",
		age: 26,
		id: 9,
	},
	{
		name: "Saba",
		age: 24,
		id: 10,
	},
];
const GenerateUsers = () => {
return(
   <div>
			{usersArray.map((user) => {
				const { name, age, id } = user;
				return (
					<div key={id}>
						<p>{name}</p>
						<p>{age}</p>
					</div>
				);
			})}
      </div>
)
};
const onClickHandler = () => {
  for (let i = usersArray.length - 1; i >= 0; i--) {
    usersArray.splice(Math.floor(Math.random() * usersArray.length), 1);
    console.log(usersArray);
  }
};

