import { Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { images } from "../../resources/images";
import styles from "./styles";

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

export default Home;
