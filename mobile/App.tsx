import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>testeando</Text>
      <Button title="testeeee" />
      <Button title="testeeee" />
      <Button title="testeeee" />
      <Button title="testeeee" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#545454",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    fontSize: 50,
    fontWeight: "bold",
    padding: "10px",
  },
});
