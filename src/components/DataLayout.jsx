import { Outlet } from "react-router";

export default function DataLayout(){
    return(
        <>
            <div>
                <h1>Header</h1>
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