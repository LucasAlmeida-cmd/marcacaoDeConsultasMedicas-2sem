import { styled } from 'styled-components/native';
import theme from "../../styles/theme";

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

const ProfileCard = styled.View`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

// Avatar removido - agora usamos o ProfileImagePicker

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const Email = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const RoleBadge = styled.View<{ role: string }>`
  background-color: ${(props: { role: string }) => {
    switch (props.role) {
      case 'admin':
        return theme.colors.primary + '20';
      case 'doctor':
        return theme.colors.success + '20';
      default:
        return theme.colors.secondary + '20';
    }
  }};
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-top: 8px;
`;

const styles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  editButton: {
    backgroundColor: theme.colors.success,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
};

const Card = styled.View`
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: ${theme.spacing.large}px;
  margin-bottom: ${theme.spacing.large}px;
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  shadow-offset: 0px 3px;
`;

const Name = styled.Text`
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.medium}px;
`;

const Email = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.7;
  margin-top: 4px;
`;

const RoleBadge = styled.View<{ role: string }>`
  background-color: ${({ role }) =>
    role === 'admin'
      ? theme.colors.primary
      : role === 'doctor'
      ? theme.colors.success
      : theme.colors.secondary};
  padding: 6px 12px;
  border-radius: 20px;
  margin-top: ${theme.spacing.medium}px;
`;

const RoleText = styled.Text`
  color: white;
  font-weight: bold;
`;

const SpecialtyText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.small}px;
  opacity: 0.9;
`;