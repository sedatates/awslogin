import { Text, View } from "react-native";

import { Auth } from "aws-amplify";
import { Button, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { images } from "../../resources/images";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover
          style={styles.card}
          source={{
            uri: images.aws,
          }}
        />
      </Card>

      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>Go to profile</Text>
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
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  button: {
    marginBottom: 100,
    backgroundColor: "orange",
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    borderColor: "orange",
    elevation: 10,
  },
  card: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});

export default Home;
