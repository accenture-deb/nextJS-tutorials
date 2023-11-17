import Link from "next/link";
import GetUsers from "../services/getusers"

export default async function UsersList() {
    const userInfo = await GetUsers();
    console.log('=======================', userInfo);
  return (
    <div>
        <h1>Uses List</h1>
        <ul>
            {
                userInfo.map((user)=>(
                    <li key={user.id}>
                        <Link href={`/userslist/users/${user.id}`}>{user.firstName}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
