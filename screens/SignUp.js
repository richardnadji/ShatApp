import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableHighlight,
} from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';

import styles from './SignUp.styles';
import Person, { formOptions } from '../models/Person';
import signUp from '../actions/users/sign-up';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      newUser: null,
    };
  }

  componentDidMount() {
    this.refs.form.getComponent('name').refs.input.focus();
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
    this.props.signUp(newUser);
    this.clearForm();
  }

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser: newUser });
  }

  render() {
    const Form = t.form.Form;

    return(
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container} >
            <Text style={styles.title}>Sign Up for ShatApp</Text>

            <Form
              ref="form"
              type={Person}
              options={formOptions}
              value={this.state.newUser}
              onChange={this.onChange}
            />
            <TouchableHighlight style={styles.button}
              onPress={this.onSubmit}
              underlayColor='#99d9f4' >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { signUp })(SignUp);
