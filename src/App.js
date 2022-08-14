import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
const generateUsers = () => {
	return [
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
};

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		setUsers(generateUsers());
	}, []);
	const onClickHandler = () => {
		setUsers((prevState) => {
			const ind = Math.floor(Math.random() * users.length);
			const newArray = prevState.filter((user, index) => index !== ind);
			return newArray;
		});
	};
	useEffect(() => {
		document.title = `${users.length}`;
	});
	return (
		<div>
			{users.map((user) => {
				const { name, age, id } = user;
				return (
					<div key={id}>
						{name}
						{age}
					</div>
				);
			})}
			<button onClick={onClickHandler}>Delete User</button>
		</div>
	);
}

export default App;
 const someFunction = () =>{

 }