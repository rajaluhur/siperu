import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...');
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/siperu.png')}
        style={styles.logo}
      />

      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="white"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="white"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.actionContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={handleRememberMe}>
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Ingat saya</Text>
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.circleButtonLeft}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.circleButtonText}>?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.circleButtonRight}
        onPress={() => navigation.navigate('Register')}>
        <Icon name="multitrack-audio" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  logo: {
    width: '50%',
    marginBottom: 20,
  },
  content: {
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FFD911',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circleButtonLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  circleButtonRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  circleButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
