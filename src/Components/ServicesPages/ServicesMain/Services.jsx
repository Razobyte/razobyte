
import SEM from "../SEM/SEM";
import { Helmet } from "react-helmet";




export default function ServicesMain(){

    return(
        <>
        <Helmet>
        <title>Services Page</title>
        <meta
        name="Service page"
        content="This is my services page"
         />

        </Helmet>
    <SEM/>
        
        </>
    )
}