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
        this.setState({
            bosses: [1,2,3]
        });
    }
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            bosses: []
        }
    }
    render() {
        const { bosses } = this.state;
        return (
            <div>hi ask</div>
            )
        }
    }
    
    const mapStateToProps = state => {
        // const { bosses } = state.bosses;
        // return {
        //     bosses: { ...bosses }
        // }
        return { hello: 'hi '}
     }

export default connect(mapStateToProps, mapDispatchToProps )(BossContainer);
