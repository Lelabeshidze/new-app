import React, { useState } from "react";

const NewComponent = () => {
	const user= useState(GenerateUsers());
	const onClickHandler = () => {
		for (let i = user.length - 1; i >= 0; i--) {
			user.splice(Math.floor(Math.random() * user.length), 1);
			console.log(user);
		}
	};
	return (
        <div>
            <p>{user}</p>
            <button onClick={onClickHandler}>click me</button>
        </div>
    )
};

export default NewComponent;
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
	return (
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
	);
};

// კომპონენტის გარეთ შექმენით ფუნქცია generateUsers,რომელიც დააბრუნებს ათ იუზერს.

// კომპონენტის mount-ისას დასეტეთ users სტეიტი იმ მნიშვნელობით რომელსაც აბრუნებს generateUsers. setState(generateUsers())C:\Users\vakhokech\Desktop\davaleba3\src\App.js

// დაარენდერეთ ეს ლისტი აპლიკაციაში.

// ასევე ლისტის ქვემოთ დაამატეთ ღილაკი,რომელსაც დაუმატებთ დაჭერის ივენთს (პრეზენტაციაში შეგხვდებათ სინტაქსი). ღილაკის თითოეულმა დაჭერამ უნდა წაშალოს შემთხვევითი წევრი user მასივიდან.

// ასევე ყოველ ჯერზე როცა user-ების მასივი შეიცვლება უნდა განახლდეს საიტის title შემდეგნაირად: დარჩა x იუზერი (დარჩა 10 იუზერი)
// l
