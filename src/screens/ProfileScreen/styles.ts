import { StyleSheet } from "react-native";

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
    borderColor: "#D6242D",
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    elevation: 10,
  },
  card: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 0,
  },
});
export default styles;
