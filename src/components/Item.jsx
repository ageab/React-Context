import { useAppContext } from "../context/app-context";

const Item = () => {

    // const context = useAppContext();
    const [state] = useAppContext();

    // console.log(context);

    return ( 
        <li>
            <p>ID: {state?.user?.id}</p>
            <p>Name: {state?.user?.name}</p>
            <p>Phone Number: {state?.user?.phoneNumber}</p>
            <p>Address: {state?.user?.address}</p>
        </li>
     );
}
 
export default Item;