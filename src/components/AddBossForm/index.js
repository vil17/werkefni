import React from 'react';
import { connect } from 'react-redux';
import { getBosses } from '../../actions'
import bossService from '../../services'
//import PropTypes from 'prop-types'
//import AddBossForm from './AddBossForm'

const mapDispatchToProps = (dispatch) => {
    return {
        getBosses: () => dispatch(bossService.getBosses())
    };
}


class BossContainer extends React.Component {
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div>
                <h2> Add boss</h2>
                <form>
                    <div>
                        <label>Name: </label>
                        <br />
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
                        <br />
                        <label> description:  </label>
                        <br />
                        <textarea name="description" onChange={this.onChange} value={this.state.description} />
                        <br />
                        <button type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        )
    }
}

//export default BossContainer

var thisstuff = connect(null, mapDispatchToProps)(BossContainer);
export default thisstuff;
