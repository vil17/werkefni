import React from 'react';
import { connect } from 'react-redux';
import { getBosses } from '../../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        getBosses: () => dispatch(getBosses()) 
    };
}


class BossContainer extends React.Component {
    componentDidMount() {
        const { getBosses } = this.state;
        var bosses = getBosses;
        console.log(bosses, 'bosses')
    }
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            bosses: []
        }
    }
    render() {
        const { bosses } = this.state;
        console.log(this.state)
        return (
            <div>hi ask</div>
            )
        }
    }
    

export default connect(null, mapDispatchToProps )(BossContainer);
