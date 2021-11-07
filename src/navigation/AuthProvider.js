import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async body => {
          // try {
          //   console.log('test', body);
          //   const res = await doLogin(body);
          //   console.log('resresres.res,', res);
          //   if (res?.token) {
          //     Cookie.set(
          //       'https://magichands.com',
          //       'token',
          //       JSON.stringify(res),
          //     ).then(() => console.log('s'));
          //   } else {
          //     Alert.alert('Invalid Credential');
          //   }
          // } catch (e) {
          //   console.log(e);
          // }
        },
        register: async (email, password) => {
          // try {
          //   await auth().createUserWithEmailAndPassword(email, password);
          // } catch (e) {
          //   console.log(e);
          // }
        },
        logout: async () => {
          // try {
          //   await auth().signOut();
          // } catch (e) {
          //   console.log(e);
          // }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
