import axios from "axios";

export default async function axiosGetAll(
    url,
    setLoading,
    setError,
    error,
    setProductsItems,
) {
    try {
        setLoading(true);
        const response = await axios.get(url);
        setProductsItems(response.data);
        console.log(response);
    } catch (err) {
        setError(err);
        console.log("An error occurred:", error.response.data.error.message);
    } finally {
        setLoading(false);
    }
}
