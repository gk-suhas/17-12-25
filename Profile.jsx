import userContext from "./UserContext";
import { useContext } from "react";

function Profile(){
    const value=useContext(userContext)
    return(
        <div>hello {value}</div>
    )
}
export default Profile