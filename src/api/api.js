import Axios from "axios";

export async function getItemList() {
    let result = await Axios.get("/itemList/getItemList").then((d) => d.data);
    return result;
}