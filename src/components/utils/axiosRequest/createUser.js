import axios from "axios";
//import uuid from "react-uuid";
import uuid from "react-uuid";

export default async function createUser(
    user,
    activeUser,
    setActiveUser,
    setCart,
) {
    console.log(JSON.stringify(user) + "user in axios");
    axios
        .post("http://localhost:1337/api/users", {
            username: user.nickname,
            email: user.email,
            password: "NoPassword",
        })
        .then((response) => {
            console.log(response.data);
            setActiveUser(response.data);

            const newCart = {
                id: uuid(),
                userID: response.data.id,
            };
            setCart(newCart);
        })
        .catch((error) => {
            console.log(
                "An error occurred:",
                error.response.data.error.message,
            );
        });
}
