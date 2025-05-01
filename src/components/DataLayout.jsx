import { Link, NavLink, Outlet, useLocation } from "react-router";
import "../data.css";

export default function DataLayout(){

    const location = useLocation();

    return(
        <>
            <div>
                <h1>Header</h1>
            </div>
            <div>
                <ul>
                    {/*** Jika menggunakan NavLink maka dari react akan otomatis menambahkan class a.active ***/}
                    <li>
                        <NavLink to="/data/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data/sellers">Sellers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data/customers">Customers</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={{
                                pathname: "/data/products",
                                search: "?category=shoes",
                                hash: "#top",
                            }}
                        >Products</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <p>Footer</p>
                <p>Location : hash={location.hash} | {location.search} | {location.pathname} | {location.state} | {location.key}</p>
            </div>
        </>
    )
}