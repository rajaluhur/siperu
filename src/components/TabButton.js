import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TabButton = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Scan':
      iconName = 'camera';
      break;
    case 'Profile':
      iconName = 'profile';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

export default TabButton;
