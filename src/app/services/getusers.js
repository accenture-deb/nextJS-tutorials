import getConfig from "next/config"

export default async function GetUsers() {
    const {serverRuntimeConfig} = getConfig();
    const userList = await fetch(serverRuntimeConfig.usersListEndPoint);
    const userData = await userList.json();
    return userData.users;
}
