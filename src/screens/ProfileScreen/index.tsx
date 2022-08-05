import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styles from "./styles";

import { images } from "../../resources/images";

import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const signOut = async () => {
    await Auth.signOut();
  };

  const userInfo = async () => {
    const user = await Auth.currentUserInfo();
    setUser(user);
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Card style={{ borderRadius: 0 }}>
        <Card.Cover
          style={styles.card}
          source={{
            uri: images.cognito,
          }}
        />
      </Card>
      <View style={styles.profile}>
        <Text style={styles.title}>Welcome to the Profile Screen!</Text>
        <Text style={styles.profileText}>{user?.attributes.name}</Text>
      </View>
      <Button style={styles.button} mode="outlined" onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Button>
    </View>
  );
};

export default Profile;
