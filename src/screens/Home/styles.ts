import { StyleSheet } from "react-native";
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

export default styles;
