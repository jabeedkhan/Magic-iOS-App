import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import EditProfileMain from './EditProfileMain';

const EditProfile = () => {
  return (
    <>
      <CommonHeader headText={'Edit Profile'} backPage="Profile" />
      <EditProfileMain />
    </>
  );
};

export default EditProfile;
