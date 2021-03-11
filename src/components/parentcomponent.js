
import ChildComponent from './childcomponent'
function ParentComponent(props) {


    return (
        <div>
            <div>Parent Component</div>
        
            <ChildComponent name={props.name} gender={props.gender} age={props.age} email={props.email}/>

        </div>
    )
}

export default ParentComponent;