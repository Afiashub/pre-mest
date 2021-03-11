
import NotificationComponent from './NotificationComponent'
function DetailComponent(props) {


    return (
        <div>
            {/* <div>Detail Component</div> */}
        
            <NotificationComponent dashname={props.name} surname={props.lstname} email={props.email} dob={props.dob} mobile={props.mobile}/>

        </div>
    )
}

export default DetailComponent;