import { useParams } from "react-router";

export default function ProductDetail(){

    const params = useParams();

    return(
        <>
            <h1>Product Detail {params.id} {params.name}</h1>
            <p>Product Detail Data</p>
        </>
    )
}