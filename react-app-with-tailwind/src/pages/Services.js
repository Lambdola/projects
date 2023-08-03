import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Filter from '../components/Filter'
import car1 from '../car1.jpg'
import LuggageIcon from '@mui/icons-material/Luggage'
import NoLuggageIcon from '@mui/icons-material/NoLuggage'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import RentalItem from '../components/RentalItem'
import SalesItem from '../components/SalesItem'
import SalesItemInfo from '../components/SalesItemInfo'

const {car_database} = require('./Car_Database.js')

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

function Repairs() {
	return (
		<div className='p-2'>
			<div className='border border-black p-2 mb-5'>
				<div className='float-right'>
					<div className='h-12 w-12 bg-red-500'></div>
				</div>
				<h3 className='font-bold text-black text-xl'>Belts & Hoses</h3>
				<p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive </p>
				<div className='p-1'>
					<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a> <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a>
					<p><a className='bg-blue-900 text-white font-bold text-center py-2 block mt-3'>Schedule Service</a></p>
				</div>
			</div>
			<div className='border border-black p-2'>
				<div className='float-right'>
					<div className='h-12 w-12 bg-red-500'></div>
				</div>
				<h3 className='font-bold text-black text-xl'>Belts & Hoses</h3>
				<p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive </p>
				<div className='p-1'>
					<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a> <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a>
					<p><a className='bg-blue-900 text-white font-bold text-center py-2 block mt-3'>Schedule Service</a></p>
				</div>
			</div>
			<div className='border border-black p-2'>
				<div className='float-right'>
					<div className='h-12 w-12 bg-red-500'></div>
				</div>
				<h3 className='font-bold text-black text-xl'>Belts & Hoses</h3>
				<p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive </p>
				<div className='p-1'>
					<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a> <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a>
					<p><a className='bg-blue-900 text-white font-bold text-center py-2 block mt-3'>Schedule Service</a></p>
				</div>
			</div>
			<div className='border border-black p-2'>
				<div className='float-right'>
					<div className='h-12 w-12 bg-red-500'></div>
				</div>
				<h3 className='font-bold text-black text-xl'>Belts & Hoses</h3>
				<p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive </p>
				<div className='p-1'>
					<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a> <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a>
					<p><a className='bg-blue-900 text-white font-bold text-center py-2 block mt-3'>Schedule Service</a></p>
				</div>
			</div>
			<div className='border border-black p-2'>
				<div className='float-right'>
					<div className='h-12 w-12 bg-red-500'></div>
				</div>
				<h3 className='font-bold text-black text-xl'>Belts & Hoses</h3>
				<p>I am a student of the University of Nigeria, located in Nigeria, Africa. I major in Engineering; Agricultural and Environmental Enginnering A.K.A. Agric Engineering/AEE, which is under the Faculty of Technology that has a total of eight (8) departments under it; AEE inclusive </p>
				<div className='p-1'>
					<a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>Request Quote</a> <a className='bg-stone-800 text-white font-bold px-5 py-1 m-1'>View Services</a>
					<p><a className='bg-blue-900 text-white font-bold text-center py-2 block mt-3'>Schedule Service</a></p>
				</div>
			</div>
		</div>
	)
}

function Content({stat, data, filter, handleFilterChange, handleSubmit, salesInfo, setSalesInfo, setCartItems, cartItems}) {
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
		return <Repairs />
	}

}
export default function Services({isSignIn, setIsSignIn, setCartItems, cartItems}) {
	const [stat, setStat] = useState("sales");
	const [filter, setFilter] = useState({});
	const [data, setData] = useState(car_database);
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
		setChange(n=> setChange("no"))
		setStat("sales")
	}
	if (url.includes("rentals") && change === "yes") {
		setChange(n=> setChange("no"))
		setStat("rentals")
	}
	if (url.includes("repairs") && change === "yes") {
		setChange(n=> setChange("no"))
		setStat("repairs")
	}

	let style = "border-4 border-purple-400 bg-gradient-to-tr from-red-300 to-white text-violet-900 hover:bg-purple-500 hover:border-purple-900"
	let secStyle = "bg-violet-900"
	let sales, rentals, repairs;
	if (stat === "sales") {
		sales =  style
		rentals = secStyle
		repairs = secStyle
	}else if (stat === "rentals") {
		rentals =  style
		sales = secStyle
		repairs = secStyle
	}else {
		repairs = style
		sales = secStyle
		rentals = secStyle
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
		
		// let details = {
		// 	"Year": filter.Year,
		// 	"Make": filter.Make,
		// 	"Model": filter.Model,
		// 	"Category": filter.Category,
		// 	"Mileage": filter.Mileage,
		// 	"Color": filter.Color,
		// 	"Price": filter.Price
		// }
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
				<Content stat={stat} data={data} filter={filter} handleFilterChange={handleFilterChange} handleSubmit={handleSubmit} salesInfo={salesInfo} setSalesInfo={setSalesInfo} setCartItems={setCartItems} cartItems={cartItems} />
			</div>
		</div>
	</>
	)
}
