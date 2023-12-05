import Link from "next/link";
import GETALLUSERS from "../services/getallusers"

export const metadata = {
    title: 'Use list',
    description: 'This is user list page'
}

export default async function USERLIST() {
    const userInfo = await GETALLUSERS();
    // console.log('====================', userInfo);
  return (
    <div>
        <h1>Users List</h1>
            <ul>
                {
                    userInfo.map((user)=>(
                        <li key={user.id}>
                            <Link href={`/userslist/user${user.id}`}>{user.name}</Link>
                            <hr />
                        </li>
                    ))
                }
            </ul>        
    </div>
  )
}
