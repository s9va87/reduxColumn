import  React from 'react';
import  {connect} from 'react-redux'

function Card(props){
    console.log(props)
    return(
        <div>
            <h4>function Card(props){
                </h4>
        </div>
    )
}


const mapStateToProps =(state)=> {
   globalState: state,
                userName: state.userName
}
const mapDispatchToProps = (dispatch)=>({
    deleteName: ()=> dispatch(),
})
export default  connect(mapStateToProps, mapDispatchToProps)(Card);