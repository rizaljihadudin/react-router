import { useNavigate } from "react-router"

export default function Home(){

    {/**
        untuk melakukan navigasi via JavaScript (programatically).
        penggunaanya seperti, untuk melakukan navigasi ke halaman lain setelah sebuah event terjadi. ex: button, form submit, etc.    
    */}
    const navigate = useNavigate();

    function handleClick(){
        navigate({
            pathname:'/data'
        })
    }

    return(
        <>
            <h1>Home</h1>
            <p>Page Home</p>
            <button onClick={handleClick}>Go to data page</button>
        </>
    )
}