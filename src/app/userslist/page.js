const usersList = async()=>{
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users;
}

export default async function UsersList() {
    let users = await usersList();
    console.log(users);
  return (
    <div>
        <h1>Users List</h1>
        {
            users.map((item)=>(
                <div key={item.id}>
                    <p>First Name: {item.firstName}</p>
                </div>
            ))
        }
    </div>
  )
}

