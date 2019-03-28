import React from 'react';
import { connect } from 'react-redux';
import { getBosses } from '../../actions'
import PropTypes from 'prop-types'

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    width: '200px',
};

class BossContainer extends React.Component {
    componentWillMount() {
        this.props.getBosses();
    }

    
  componentWillReceiveProps(nextProps) {
    if (nextProps.newBoss) {
      this.props.bosses.unshift(nextProps.newBoss);
    }
}

    render() {
        const stuff = this.props.bosses.map(boss =>
            <div key={boss.id} className='card' style={divStyle}>
                <div>
                    <img className='img-thumbnail' src={boss.img} alt={boss.name} />
                </div>
                <h3>{boss.name}</h3>
            </div>
        );
        return (
            <div>
                <h3>
                    {stuff}
                </h3>
            </div>
        )
    }
}

BossContainer.propTypes = {
    getBosses: PropTypes.func.isRequired,
    bosses: PropTypes.array.isRequired,
    newBoss: PropTypes.object
}

const mapStateToProps = state => ({
    bosses: state.bosses.items,
    newBoss: state.bosses.item
})
//export default BossContainer

export default connect(mapStateToProps, { getBosses })(BossContainer);
