import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

const RewardsMain = () => {
  const {user,logout} = useContext(AuthContext);
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => logout()}>
          <Text>logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RewardsMain;
