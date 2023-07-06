import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  const clubMembers = ['John', 'Sarah', 'Michael']; // Здесь вы можете указать список участников книжного клуба
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the T-Book Club!</Text>
      <Image source={require('/Users/alekseialeinikov/Documents/Scripts/MOBILE/AwesomeProject/images/logo.png')} style={styles.image} />
      <StatusBar style="auto" />
      <Text>Club Members:</Text>
      {clubMembers.map((member) => (
        <Text key={member}>{member}</Text>
      ))}
      <StatusBar style="auto" />
      <Text style={styles.motivationalText}>Join the motivated reader&apos;s community!</Text>
  
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openRegistrationModal}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
  
      {/* Модальное окно регистрации */}
      <Modal visible={isModalOpen} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Форма регистрации */}
            <View style={styles.registrationForm}>
              <TextInput style={styles.input} placeholder="Name" />
              <TextInput style={styles.input} placeholder="Surname" />
              <TextInput style={styles.input} placeholder="Email" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
  
            <TouchableOpacity style={styles.closeButton} onPress={closeRegistrationModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  motivationalText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  modalContent: {
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginTop: 40,
    maxWidth: 400,
  },
  registrationForm: {
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

