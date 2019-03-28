import React from 'react';
import { connect } from 'react-redux';
import { createBoss } from '../../actions'
import PropTypes from 'prop-types'
import toastr from 'toastr'


class AddBossContainer extends React.Component {
    constructor(props) { //tharf props?
        super(props);
        this.state = {
            fields: {
                name: '',
                description: '',
                img: ''
            },
            errors: {
                nameError: '',
                descriptionError: '',
                imgError: ''
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this)
    }

    validateForm() {

        const errors = {};
        console.log(this.state.fields)
        if (this.state.fields.name === '') { errors.nameError = 'need name' }
        if (this.state.fields.description === '') { errors.descriptionError = 'need description' }
        if (this.state.fields.img === '') { errors.imgError = 'need image' }
        console.log(this.state.errors)
        if (Object.keys(errors).length > 0) {
            this.setState({ ...this.state.errors, errors });
            return false;
        }
        return true;
    }

    onChange(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.validateForm()) {
            const boss = {
                id: null, //bara til ad fa object a rett form perfectionist stuff
                name: this.state.fields.name,
                img: this.state.fields.img,
                description: this.state.fields.description,
            }
            this.props.createBoss(boss)
            toastr.success('The form was successfully submitted!', 'Success!');
        } else {
            toastr.error('The form was not successfully submitted!', 'Failed!');
        }


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
                            value={this.state.fields.name}
                        />
                        <br />
                        <label> description:  </label>
                        <br />
                        <textarea
                            name="description"
                            onChange={this.onChange}
                            value={this.state.fields.description}
                        />
                        <br />
                        <label> image:  </label>
                        <br />
                        <input
                            name="img"
                            onChange={this.onChange}
                            value={this.state.fields.img}
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

