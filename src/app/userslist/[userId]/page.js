import GETALLUSERS from "@/app/services/getallusers";


export default async function UserDetails(props) {
  const userInfo = await GETALLUSERS(); 
  const currentId = props.params.userId.slice(4);
  const userDetails = userInfo[currentId - 1];
  // console.log('-----------------------',userDetails)
  
  if (!userDetails) {
    // Handle the case where userDetails is undefined
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userDetails.name}</p>
      <p>Email: {userDetails.email}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const userInfo = await GETALLUSERS();
  return userInfo.map((user) => ({
    userId: user.id.toString(),
  }));
}

export function generateMetadata(props) {
  return {
    title: props.params.userId.toString(),
    description: `This page is about ${props.params.userId.toString()}`
  }
}
