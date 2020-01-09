import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/action';
import { VISIBILITY_FILTERS } from "../constants";
import '../App.css';

const VisibilityFilter = ({activeFilter, setFilter}) =>{
    return(
    <div>
        {Object.keys(VISIBILITY_FILTERS).map(key => {
            const currentFilter = VISIBILITY_FILTERS[key];
            return(
                <button onClick={() => {setFilter(currentFilter);}} className="FilterStyle">
                  {" "}  { currentFilter } {" "}
                </button>
            );
        })}
    </div>
    );

};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter};
};

export default connect(mapStateToProps,{setFilter})(VisibilityFilter);