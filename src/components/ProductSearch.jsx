import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router"

export default function ProductSearch(){


    {/***
        Berguna untuk mendapatkan query parameter dari URL    
    */}
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [search, setSearch] = useState(searchParams.get('search') || '');

    function handleSearch(){

        if(search){
            navigate({
                pathname:'/data/products/search',
                search: `?search=${search}`
            })
        }
    }

    return(
        <>
            <h1>Search Product</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            <p>
                Kamu mencari : {searchParams.get('search')}
            </p>
        </>
    )
}