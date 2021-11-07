import React from 'react';
import colors from '../../Common/colors';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Forgot = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Forgot Password?</Text>
          <Text style={styles.text_subheader}>
            we just need your registered Email id to sent you password reset
            instructions.
          </Text>
        </View>
        <Text style={styles.email_text}>Email</Text>
        <TextInput
          placeholder="Your Email"
          autoCapitalize="none"
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.btns}>
          <Text style={styles.btn_txt}> SEND </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  footer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 100,
    marginLeft: 80,
    marginBottom: 20,
  },
  text_subheader: {
    color: colors.primaryBlack,
    margin: 20,
    fontSize: 20,
  },
  email_text: {
    color: colors.primaryBlack,
    marginTop: 30,
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomWidth: 2,
    width: '80%',
    color: colors.primaryBlack,
    fontSize: 15,
    padding: 15,
    marginLeft: 20,
    marginBottom: 40,
  },
  btns: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.primaryBlack,
    marginLeft: 90,
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});
