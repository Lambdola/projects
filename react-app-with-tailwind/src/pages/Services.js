import React, { useEffect, useState } from 'react';
import { car_database, repairs_database } from '../components/Car_Database';
import Header from '../components/Header'
import Filter from '../components/Filter'
import car1 from '../car1.jpg';

import LuggageIcon from '@mui/icons-material/Luggage'
import NoLuggageIcon from '@mui/icons-material/NoLuggage'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import Search from '@mui/icons-material/Search';
import RentalItem from '../components/RentalItem'
import SalesItem from '../components/SalesItem';
import SalesItemInfo from '../components/SalesItemInfo'
import { purple } from '@mui/material/colors';

// const {car_database} = require('./Car_Database.js')

function Sales({data, filter, handleFilterChange, handleSubmit, salesInfo, setSalesInfo, setCartItems, cartItems}) {
	
	return (
		<> 
		{/* <p>{JSON.stringify(cartItems)}</p> */}
			{
				!salesInfo ? 
					<>
						<div className='p-1'>
							<Filter filter={filter} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} />
						</div>
						<div className='flex flex-wrap text-center justify-center space-y-5 mt-10'>
							<ul>
								{ data === "No Results Found" ? <h2 className='font-bold text-3xl'>No Results Found</h2> : (data.map((item) => {
									return (
										<SalesItem key={item.objectId} item={item} image={car1} setSalesInfo={setSalesInfo} />
									)
								}))
								}
							</ul>
						</div>
					</> : <SalesItemInfo key={salesInfo.objectId} salesInfo={salesInfo} car1={car1} setCartItems={setCartItems} cartItems={cartItems} />	
			}
		</>
	)
}

function Rentals({data, filter, handleFilterChange, handleSubmit}) {
	return (
		<>
			<div className='p-1'>
				<Filter filter={filter} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} />
			</div>
			<div className='flex flex-row flex-wrap w-[21rem] justify-around mx-auto mt-10'>
				<ul>{data.map((item)=>{
					return <li><RentalItem key={item.objectId} item={item} /></li>
				})}</ul>
			</div>
		</>
	)
}

function Repairs({repairs_database, setCartItems, cartItems}) {
	const [repairService, setRepairService] = useState("");
	const [data, setData] = useState({});
	const [checkBox, setCheckBox ] = useState(true);
	const [details, setDetails] = useState({
		"name": "",
		"phone": "",
		"email": "",
		"year": "",
		"make": "",
		"model": "",
		"category": "",
		"date": "",
		"time": "",
		"address": "",
		"tag": "Repairs",
		"location": ""
	});
	const [search, setSearch] = useState("");
	const [copyRepairsDatabase, setCopyRepairsDatabase] = useState([...repairs_database])

	function handleShowService(param){
		setData(param);
		setSearch("");
		setRepairService("showService");
	}

	function handleCheckBoxToggle(param) {
		if (param === "home") {
			setCheckBox(true)
		} else {
			setCheckBox(false)
		}
	}


	let user = localStorage.getItem("user");
    user = JSON.parse(user);
	function handleFormSubmit(e){
		e.preventDefault();
		alert(JSON.stringify(details));
		let newCartItems = [...cartItems,{...data, ...details}];
		localStorage.setItem(`${user.email}`, JSON.stringify(newCartItems))
		setCartItems(newCartItems)
	}

	function handleDetailsChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		setDetails({...details,[name]: value })
	}

	// let copyRepairsDatabase = [...repairs_database];
	function handleSearchSubmit(e) {
		e.preventDefault();
		setCopyRepairsDatabase(repairs_database.filter((items)=> items.title.toLowerCase().includes(search.toLowerCase())));
		
	}

	// let home = document.getElementById("home").target.checked;
	return (
		<div className='max-w-sm'>
			<form onSubmit={handleSearchSubmit} className='flex justify-between'>
				<input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search for a repair service' className='w-72 border border-purple-700 rounded-lg p-2 m-2' />
				<button type="submit" className='pt-1 mr-2 hover:bg-purple-200 hover:rounded-lg active:bg-green-600'>
					<Search sx={{fontSize: 40, color: purple[800]}} />
				</button>
			</form>
		
		{ !(repairService === "showService") ? 
		<div className='p-2'>
			{ copyRepairsDatabase.length > 0 ? 
				copyRepairsDatabase.map(items => {
					return (
						<div className='border border-black p-2 mb-5'>
							<div className='float-right'>
								<div className='h-12 w-12 bg-red-500'></div>
							</div>
							<h3 className='font-bold text-black text-xl'>{items.title}</h3>
							<p>{items.content}</p>
							<div className='p-1'>
								{/* <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a>
								<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a> */}
								{/* <p>{items}</p> */}
								<button onClick={() => handleShowService(items)} className='bg-blue-900 w-full text-white font-bold text-center py-2 block mt-3'>Schedule Service</button>
							</div>
						</div>
					)
				}) : 
				<h2 className='font-medium text-purple-900 text-center p-2 bg-purple-300 rounded-lg'>No Service Available Matching "{search}"</h2>
			}
		</div> : 
		<>
		<div className='w-80 mx-auto text-center text-sm font-medium mb-3 bg-violet-100 p-2 rounded-xl text-purple-950'>
			<p>Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details. </p>
		</div>
		<div className='bg-violet-900 w-80 mx-auto py-5 px-5 space-y-3 rounded-xl'>
			<h2 className='text-white font-bold text-xl text-center pb-1 border-b-4 border-white'>{data.title}</h2>
			<div className='flex justify-center gap-7'>
				<div className='flex flex-wrap align-middle gap-1'>
					<input name="location" value="home" id="home" onChange={() => handleCheckBoxToggle("home")} checked={checkBox} type="checkbox" className='h-5 w-5 mt-1 accent-orange-300' />
					<label htmlFor='location' className={`font-medium text-sm mt-[.2rem] ${checkBox ? "text-orange-300" : "text-white"}`} >Home Service</label>
				</div>
				<div className='flex flex-wrap align-middle gap-1'>
					<input name="location"  value="work" onChange={() => handleCheckBoxToggle("work")} checked={!checkBox} type="checkbox" className='h-5 w-5 mt-1 accent-orange-300 ' />
					<label htmlFor='location' className={`font-medium text-sm mt-[.2rem] ${!checkBox ? "text-orange-300" : "text-white"}`} >Workshop Service</label>
				</div>
				
			</div>
			<form onSubmit={handleFormSubmit} className='space-y-3'>
				<div className=''>
					<label htmlFor='name' className='block text-white'>Name</label>
					<input name="name" value={details.name} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='phone' className='block text-white'>Phone</label>
					<input name="phone" value={details.phone} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='email' className='block text-white'>Email</label>
					<input name="email" value={details.email} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='year' className='block text-white'>Year</label>
					<input name="year" value={details.year} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='make' className='block text-white'>Make</label>
					<input name="make" value={details.make} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='model' className='block text-white'>Model</label>
					<input name="model" value={details.model} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='category' className='block text-white'>Category</label>
					<input name="category" value={details.category} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='date' className='block text-white'>Choose a Date</label>
					<input name="date" value={details.date} onChange={handleDetailsChange} type="date" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				<div className=''>
					<label htmlFor='time' className='block text-white'>Choose a Time</label>
					<input name="time" value={details.time} onChange={handleDetailsChange} type="time" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg' />
				</div>
				{ checkBox &&
				<div className=''>
					<label htmlFor='address' className='block text-white'>Address</label>
					<textarea name="address" value={details.address} onChange={handleDetailsChange} type="text" className='w-full bg-transparent border-2 border-white p-1 px-3 font-semibold text-white text-lg'></textarea>
				</div> }
				<div className='text-center'>
					<button type="submit" className='text-white font-bold bg-purple-700 w-52 p-3 text-lg rounded-xl hover:bg-purple-900 active:bg-green-600'>Book Service</button>
				</div>
			</form>
		</div></>
		
		}</div>
	)
}

function Content({stat, data, repairs_database, filter, handleFilterChange, handleSubmit, salesInfo, setSalesInfo, setCartItems, cartItems}) {
	if (stat === "sales") {
		return < Sales 
				 data={data} 
				 filter={filter} 
				 handleFilterChange={handleFilterChange} 
				 handleSubmit={handleSubmit} 
				 salesInfo={salesInfo} 
				 setSalesInfo={setSalesInfo} 
				 setCartItems={setCartItems} 
				 cartItems={cartItems} 
				/>
	}
	else if (stat === "rentals") {
		return <Rentals data={data} filter={filter} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} />
	}
	else if (stat === "repairs") {
		return <Repairs repairs_database={repairs_database} setCartItems={setCartItems} cartItems={cartItems} />
	}

}
export default function Services({isSignIn, setIsSignIn, setCartItems, cartItems}) {
	const [stat, setStat] = useState("sales");
	const [filter, setFilter] = useState({});
	const [data, setData] = useState(car_database);
	const [ repairsData, setRepairsData ] = useState(repairs_database)
	const [change, setChange ] = useState("yes");
	const [salesInfo, setSalesInfo] = useState(null);
	
	useEffect(()=> {
		// alert("Reload")
		let user = localStorage.getItem("user");
		user = JSON.parse(user)
		if(user.loggedIn === "true"){
		  setIsSignIn(true);
		}
	  },[])

	let url = window.location.href;
	if (url.includes("sales") && change === "yes") {
		setChange(n=> setChange("no"));
		setStat("sales");
	}
	if (url.includes("rentals") && change === "yes") {
		setChange(n=> setChange("no"));
		setStat("rentals");
	}
	if (url.includes("repairs") && change === "yes") {
		setChange(n=> setChange("no"));
		setStat("repairs");
	}

	let style = "border-4 border-purple-400 bg-gradient-to-tr from-red-300 to-white text-violet-900 hover:bg-purple-500 hover:border-purple-900";
	let secStyle = "bg-violet-900";
	let sales, rentals, repairs;
	if (stat === "sales") {
		sales =  style;
		rentals = secStyle;
		repairs = secStyle;
	}else if (stat === "rentals") {
		rentals =  style;
		sales = secStyle;
		repairs = secStyle;
	}else {
		repairs = style;
		sales = secStyle;
		rentals = secStyle;
	}

	function handleFilterChange(e) {
		
		let inputName = e.target.name;
		let inputValue = e.target.value;
		let newData;
		
		setFilter({...filter, [inputName] : inputValue})
		// setData(()=>newData);
	}


	function handleSubmit(e) {
		e.preventDefault();
		let filterKey = Object.keys(filter)
		let newData = [...car_database]
		let freshData = []
	
		// alert(filterKey)
		for (let key in filter) {
			if (filter[key].length > 0) {
				for (let item of newData) {
					if ((filter[key].length > 0) && (item[key].toString() === filter[key])) { freshData.push(item) }
				}
				// alert(freshData)
				newData = [...freshData];
				freshData = [];
			}
		}
		if(newData.length === 0) {
			setData("No Results Found")
		} else {
			setData(newData)
		}
		
	}
	return (
	<>
		<Header isSignIn={isSignIn} />
		<h1 className='text-center text-xl font-bold'>SERVICES</h1>
		<div className='border-2 border-black m-2' ></div>
		<div>
			<div className='flex justify-evenly font-bold text-lg p-2 text-white mt-5 mb-5'>
				<p><a onClick={() => { setSalesInfo(n => setSalesInfo(null)); setStat("sales")}} className={`${sales} hover:bg-violet-900 p-2`}>Sales</a></p>
				<p><a onClick={() => {setStat("rentals")}} className={`${rentals} hover:bg-violet-900 p-2`}>Rentals</a></p>
				<p><a onClick={() => {setStat("repairs")}} className={`${repairs} hover:bg-violet-900 p-2`}>Repairs</a></p>
			</div>
			<div>
				<Content stat={stat} data={data} repairs_database={repairs_database} filter={filter} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} salesInfo={salesInfo} setSalesInfo={setSalesInfo} setCartItems={setCartItems} cartItems={cartItems} />
			</div>
		</div>
	</>
	)
}
