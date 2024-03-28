import { useRouteError } from "react-router-dom"

const Error = () =>{

    const errorDetails = useRouteError();
    <div>
        <h2>Oops</h2>
        <h3>Unexpected error occured</h3>
        <h3>{errorDetails.status} - {errorDetails.statusText}</h3>
    </div>
}

export default Error;