import getConfig from "next/config"

export default async function GETALLUSERS() {
    const {serverRuntimeConfig} = getConfig();
    const userAPI = await fetch(serverRuntimeConfig.usersListEndPoint);
    const userData = await userAPI.json();
    return userData;
}
