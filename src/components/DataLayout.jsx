import { Link, NavLink, Outlet } from "react-router";
import "../data.css";

export default function DataLayout(){
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
            </div>
        </>
    )
}