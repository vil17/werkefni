import React from 'react';
import { connect } from 'react-redux';
import { getBossDetail } from '../../actions'
import PropTypes from 'prop-types'
//import { NavLink } from 'react-router-dom';

class BossDetail extends React.Component {
    componentDidMount() {
        this.props.getBossDetail(this.props.match.params.bossId);
        console.log(this.props, 'myprops')
    }


    render() {
        console.log('hello from here', this.props)
        const boss = this.props.boss
        return (
            <div>
            <div class="col-sm-5">
                <img className='card-img-top' src={boss.img} alt={boss.name} />
            </div >
                <div class="card-body">
                    <h4 class="card-title">{ boss.name }</h4>
                    <p class="card-text">{boss.description}</p>
                </div>
                </div>
        );
    }
}

BossDetail.propTypes = {
    getBossDetail: PropTypes.func.isRequired,
    newBoss: PropTypes.object
}

const mapStateToProps = state => ({
    boss: state.bosses.boss,
})
//export default BossContainer

export default connect(mapStateToProps, { getBossDetail })(BossDetail);


/* <div key={boss.id} className='card'>
                <div className='card-body'>
                    <img className='card-img-top'src={boss.img} alt={boss.name} />
                    <NavLink to={ `/bosses/${boss.id}` } className="breadcrumb-item"><h5 className='card-title'>{boss.name}</h5></NavLink>

                </div>
            </div> */