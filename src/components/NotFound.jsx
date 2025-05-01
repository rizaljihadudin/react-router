import { useParams } from "react-router";

export default function NotFound(){
    const params = useParams();
    return(
        <> 
            <h1>Not Found</h1>
            <p>Not Found page : {params['*']}</p>
        </>
    )
}