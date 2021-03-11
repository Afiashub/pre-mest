function ProfileComponent(props) {


    return ( <div>
        {/* <div>Profile Component</div> */}
        <h1>Firstname: {props.firstname}</h1>
        <h2>Lastname: {props.lastname} </h2>
        <h2>Email: {props.email}</h2>
        <h2>Date of birth: {props.dob}</h2>
        <h2>Mobile: {props.mobile}
            
        </h2>



    </div>
    )
}

export default ProfileComponent;