import React from 'react';
import { connect } from 'react-redux';
import { createBoss } from '../../actions'
import PropTypes from 'prop-types'

class AddBossContainer extends React.Component {
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            name: '',
            description: '',
            img: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const boss = {
            name: this.state.name,
            img: this.state.img,
            description: this.state.description
        }
        this.props.createBoss(boss)
    }
    //https://celebritystoner.com/wp-content/uploads/2017/11/big-lebowski-the-dude-smiling.jpg

    render() {
        return (
            <div>
                <h2> Add boss</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                        <br />
                        <label> description:  </label>
                        <br />
                        <textarea
                            name="description"
                            onChange={this.onChange}
                            value={this.state.description}
                        />
                        <br />
                        <label> image:  </label>
                        <br />
                        <input
                            name="img"
                            onChange={this.onChange}
                            value={this.state.img}
                        />
                        <br />
                        <button type="submit">Submit!</button>
                    </div>
                </form>
            </div>
        )
    }
}

AddBossContainer.propTypes = {
    createBoss: PropTypes.func.isRequired
};

export default connect(null, { createBoss })(AddBossContainer);

