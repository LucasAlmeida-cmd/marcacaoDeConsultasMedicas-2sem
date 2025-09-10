import React from 'react';
import styled from 'styled-components/native';
import { Button, ListItem } from 'react-native-elements';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';
import Header from '../components/Header';
import ProfileImagePicker from '../components/ProfileImagePicker';
import { ViewStyle } from 'react-native';
import { styles } from './styles';
import { ProfileScreenProps } from './types/ProfileScreenProps';
import { ProfileCard } from './components/ProfileScreenCard';
import { useProfile } from './hooks/useProfile';

const ProfileScreen: React.FC = () => {
  const { user, signOut, navigation } = useProfile();
  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'doctor':
        return 'Médico';
      case 'patient':
        return 'Paciente';
      default:
        return role;
    }
  };

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Meu Perfil</Title>

        <ProfileCard user={user} getRoleText={getRoleText}/>

        <Button
          title="Editar Perfil"
          onPress={() => navigation.navigate('EditProfile' as any)}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.editButton}
        />

        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.buttonStyle}
        />

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={styles.button as ViewStyle}
          buttonStyle={styles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};



export default ProfileScreen;