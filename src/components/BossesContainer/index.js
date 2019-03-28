import React from 'react';
import { connect } from 'react-redux';
import { getBosses, deleteBoss } from '../../actions'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

class BossContainer extends React.Component {
    componentDidMount() {
        
        this.props.getBosses()
    }


    render() {
        const stuff = this.props.bosses.map(boss =>
        
            <div key={boss.id} className='card'>
                <div className='card-body'>
                    <img className='card-img-top'src={boss.img} alt={boss.name} />
                    <NavLink to={ `/bosses/${boss.id}` } className="breadcrumb-item"><h5 className='card-title'>{boss.name}</h5></NavLink>
                </div>
            </div>
        );
        return (
            <div>
                <hr />
                <div className="card-columns">
                    {stuff}
                </div>
            </div>
        )
    }
}

BossContainer.propTypes = {
    getBosses: PropTypes.func.isRequired,
    deleteBoss: PropTypes.func.isRequired,
    bosses: PropTypes.array.isRequired,
    //newBoss: PropTypes.object
}

const mapStateToProps = state => ({
    bosses: state.bosses.items,
    //newBoss: state.bosses.item
})
//export default BossContainer

export default connect(mapStateToProps, { getBosses, deleteBoss })(BossContainer);
