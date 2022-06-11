import axios from "axios";

export default async function getAllProducts(setProducts) {
    axios
        .get("http://localhost:1337/api/products")
        .then((response) => {
            console.log(JSON.stringify(response.data.data));
            setProducts(response.data.data);
        })
        .catch((error) => {
            console.log(
                "An error occurred:",
                error.response.data.error.message,
            );
        });
}
