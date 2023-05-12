import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.titleOne, styles.pinkDiv]}>Hello from Oleg!</Text>
      <View style={styles.pageElementsContainer}>
        <Text style={styles.pageElementTextTitle}>One</Text>
        <Text style={styles.pageElementTextTitle}>Two</Text>
        <Text style={styles.pageElementTextTitle}>Three</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleOne: {
    fontSize: 24,
    fontWeight: "bold",
    color: "teal",
  },
  pinkDiv: {
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pageElementsContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-around",
  },
  pageElementTextTitle: {
    backgroundColor: "fuchsia",
    fontSize: 24,
    minWidth: 250,
    minHeight: 150,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderRadius: 10,
  },
});
