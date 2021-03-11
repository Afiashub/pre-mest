
import ProfileComponent from './ProfileComponent'
function NotificationComponent(props) {


    return (
        <div>
            {/* <div>Notification Component</div> */}
        
            <ProfileComponent firstname={props.dashname} lastname={props.surname} email={props.email} dob={props.dob} mobile={props.mobile}/>

        </div>
    )
}

export default NotificationComponent;