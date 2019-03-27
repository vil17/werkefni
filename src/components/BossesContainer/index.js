import React from 'react';
import { connect } from 'react-redux';
import { getBosses } from '../../actions'
import bossService from '../../services'
//import PropTypes from 'prop-types'

const mapDispatchToProps = (dispatch) => {
    return {
        getBosses: () => dispatch(bossService.getBosses()) 
    };
}


class BossContainer extends React.Component {
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            bosses: [],
        }
    }
    
    componentWillMount() {
        const { getBosses } = this.state;
        fetch("http://localhost:4500/api/bosses").then(resp => { return resp.json() }).then(bossList => this.setState({ bosses: bossList }))
    }
    //herna kemur on update i guess
    
    
    render() {
        const { bosses } = this.state.bosses.map(boss => ( <div>boss.name</div>));
        console.log(this.state)
        return (
            <div>hi ask</div>
            )
        }
    }
    
//export default BossContainer

var thisstuff = connect(null, mapDispatchToProps)(BossContainer);
export default thisstuff;
