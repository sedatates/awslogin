import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

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

  console.log(user);

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    fontStyle: "italic",
  },
  profileText: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  button: {
    marginBottom: 100,
    backgroundColor: "#D6242D",
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 10,
  },
});

export default Profile;
