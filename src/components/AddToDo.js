import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../redux/action';
import '../App.css';

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = { input: ""};
    };
    
    updateInput = input =>{
        this.setState({ input });
    };
    
    handleAddToDo = () =>{
        this.props.addToDo(this.state.input);
        this.setState({ input:"" });
    };

    

    render(){
        return(
            <div>
                <input type='text' onChange={e => this.updateInput(e.target.value)} value={this.state.input} className="inputstyle"/>
                <button className="add-todo" onClick={this.handleAddToDo} className="FilterStyle">Add Todo</button>
                {/* <h3>{this.props.allIds}: {this.props.content} </h3> */}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        allIds: state.allIds,
        content: state.content
    }
};

// function mapDispatchToProps(dispatch){
//     return{
//         addToDo: () => dispatch(addToDo())
//     }
// };

export default connect(mapStateToProps, {addToDo})(AddToDo);