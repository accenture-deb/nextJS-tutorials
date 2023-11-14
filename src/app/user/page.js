import ButtonClick from "../components/button"

const User = (props) => {
    return (
        <div>
            User name is {props.name}
            <br />
            <ButtonClick />
        </div>
    )
}

export default User