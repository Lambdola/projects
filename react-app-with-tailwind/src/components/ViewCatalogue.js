import { NavLink } from 'react-router-dom';

export default function ViewCatalogue() {
    return  (
        <div className=' border-4 border-white xl:mt-64'>
            <NavLink to="/services" className=' block font-bold  xl:text-2xl text-gray-200 p-2 hover:bg-violet-800 md:text-4xl'>View Catalogue </NavLink>
        </div>
    );
}