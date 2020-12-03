import  React from 'react';
import  {connect} from 'react-redux'

function Board(props){
    console.log(props)
    return(
        <div>
            <h2>Board</h2>
        </div>
    )
}


const mapStateToProps =(state)=> {
    cards: state.cards
}
const mapDispatchToProps = (dispatch)=>({
    deleteName: ()=> dispatch(),
})
export default  connect(mapStateToProps, mapDispatchToProps)(Board);