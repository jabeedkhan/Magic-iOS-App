import React from 'react';
import {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import colors from '../../Common/colors';
import {width} from '../../Common/style';
import {doContactUs} from '../../services/contact';

const ContactUsMain = () => {
  const [name, setName] = useState('');
  const [cName, setCName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const submitContactUs = async () => {
    if (loader) {
      return;
    }
    setLoader(true);
    try {
      const req = {
        name,
        company_name: cName,
        email,
        phone,
        message,
      };
      const res = await doContactUs(req);
      if (res?.message) {
        Alert.alert(res?.message);
      } else {
        alert('Something went wrong');
      }
      setLoader(false);
    } catch (e) {
      Alert.alert(e?.message);
      setLoader(false);
    }
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* <Text style={styles.heading}>CONTACT FORM</Text> */}
          <View style={styles.textBox}>
            <Text style={styles.text}>Name</Text>

            <TextInput
              placeholder="Your Username"
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              onChangeText={name => setName(name)}
              // value={username}
            />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.text}>Company Name</Text>

            <TextInput
              placeholder="Your Company Name"
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              onChangeText={cname => setCName(cname)}
              // value={username}
            />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.text}>Email</Text>

            <TextInput
              placeholder="Your Email"
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              onChangeText={email => setEmail(email)}
              // value={username}
            />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.text}>Phone</Text>

            <TextInput
              placeholder="Your number"
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              onChangeText={phone => setPhone(phone)}
              // value={username}
            />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.text}>Message</Text>
            <TextInput
              placeholder="Your Message"
              textContentType="name"
              autoCapitalize="none"
              style={styles.text_input}
              numberOfLines={10}
              multiline={true}
              onChangeText={msg => setMessage(msg)}
              textAlignVertical={'top'}
              // value={username}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={submitContactUs}
              activeOpacity={loader ? 1 : 0.7}>
              {loader ? (
                <ActivityIndicator size="small" color={colors.white} />
              ) : (
                <Text style={styles.btnTxt}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ContactUsMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backdroundWhite,
    height: '100%',
  },
  heading: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  textBox: {
    paddingHorizontal: width(5),
    marginTop: width(7),
  },

  text: {
    fontSize: width(4),
  },
  text_input: {
    borderWidth: 1,
    paddingHorizontal: width(5),
    paddingVertical: width(2),
    borderRadius: width(2),
    marginTop: 10,
    color: colors.black,
  },
  btn: {
    width: width(90),
    marginLeft: width(5),
    marginTop: width(7),
    backgroundColor: colors.submit,
    padding: width(3),
    borderRadius: 8,
    marginBottom: 100,
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
  },
});
