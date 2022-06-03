import axios from "axios";

export default async function createUser(user) {
    console.log(JSON.stringify(user) + "user in axios");
    axios
        .post("http://localhost:1337/api/users", {
            username: user.nickname,
            email: user.email,
            password: "NoPassword",
            imageUrl: user.picture,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log("An error occurred:", error.response);
        });
}
