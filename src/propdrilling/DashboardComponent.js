
import DetailComponent from './DetailComponent'
function DashboardComponent(props) {


    return (
        <div>
            <div>Dashboard Component</div>
        
            <DetailComponent name={props.name} lstname={props.lastname} email={props.email} dob={props.dob} mobile={props.mobile}/>

        </div>
    )
}

export default DashboardComponent;