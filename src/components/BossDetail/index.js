import React from 'react';
import { connect } from 'react-redux';
import { getBossDetail, deleteBoss } from '../../actions'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import toastr from 'toastr'

class BossDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

        this.deleteBossFunction = this.deleteBossFunction.bind(this);
    }

    componentDidMount() {
        this.props.getBossDetail(this.props.match.params.bossId);
    }

    deleteBossFunction() {
        this.props.deleteBoss(this.props.match.params.bossId);
        this.setState({ redirect: true });
        toastr.success(this.props.boss.name + " Deleted", 'Success!');
    }


    render() {
        const boss = this.props.boss
        return (
            <div>
                {this.state.redirect ? <Redirect to="/bosses" /> : null }
                <div className="col-sm-5">
                    <img className='card-img-top' src={boss.img} alt={boss.name} />
                </div >
                <div className="card-body">
                    <h4 className="card-title">{boss.name}</h4>
                    <p className="card-text">{boss.description}</p>
                    <button onClick={this.deleteBossFunction}>delete</button>
                </div>
            </div>
        );
    }
}

BossDetail.propTypes = {
    getBossDetail: PropTypes.func.isRequired,
    deleteBoss: PropTypes.func.isRequired
    //newBoss: PropTypes.object
}

const mapStateToProps = state => ({
    boss: state.bosses.boss,
})
//export default BossContainer

export default connect(mapStateToProps, { getBossDetail, deleteBoss })(BossDetail);


/* <div key={boss.id} className='card'>
                <div className='card-body'>
                    <img className='card-img-top'src={boss.img} alt={boss.name} />
                    <NavLink to={ `/bosses/${boss.id}` } className="breadcrumb-item"><h5 className='card-title'>{boss.name}</h5></NavLink>

                </div>
            </div> */