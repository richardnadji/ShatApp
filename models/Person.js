import t from 'tcomb-form-native';

const Person = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
});

export const formOptions = {
  auto: 'placeholders',
  fields: {
    name: {
      error: 'Insert your name please',
    },
    email: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      error: 'Insert a valid email',
    },
    password: {
      secureTextEntry: true,
      error: 'Insert a valid password'
    },
  }
}

export default Person;
