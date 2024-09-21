import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Card, Icon, Switch } from "react-native-paper";

export default function Index() {
  return (
    <View style={styles.background}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}> Alarmas </Text>
      </View>

      <Card mode="elevated" style={styles.card}>
        <Card.Content style={styles.cardContent}>
            <View style={styles.cardLeftCol}>
              <Text style={styles.subtitleText}>Gimnasio</Text>
              <Text style={styles.bodyText}>18:30</Text>
              <View style={styles.cardBottomBox}>
                <Icon source="dumbbell" size={40}></Icon>
                <Text style={styles.categoryText}>Entrenamiento</Text>
              </View>
            </View>
            <View style={styles.cardRightCol}>
              <Text style={styles.bodyText}>jue, 22 ago</Text>
              <Switch value={true} style={styles.switch} color="#773CFF"></Switch>
            </View>
        </Card.Content>
      </Card>

      <Card mode="elevated" elevation={5} style={styles.card}>
        <Card.Title title="Practicar Noruego" />
        <Card.Content>
          <Text style={styles.bodyText}>18:00</Text>
          <Text style={styles.bodyText}>Estudio</Text>
          <Icon source="library" size={40}></Icon>
        </Card.Content>
      </Card>

      <Card mode="elevated" elevation={5} style={styles.card}>
        <Card.Title title="Hora de dormir" />
        <Card.Content>
          <Text style={styles.bodyText}>22:00</Text>
          <Text style={styles.bodyText}>Despertador</Text>
          <Icon source="power-sleep" size={40}></Icon>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2E3440",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },

  bodyText: {
    color: "#fff",
    fontSize: 16,
  },

  categoryText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },

  card: {
    alignItems: "stretch",
    backgroundColor: "#1B202B",
    elevation: 5,
    height: 140,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  cardContent: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
    minHeight: "100%",
    margin: 0,
    padding: 0
  },

  cardLeftCol: {
    flex: 1,
    flexGrow: 2,
    borderWidth: 1,
    borderColor: "green",
    alignItems: "stretch",
    height: '100%',
    justifyContent: "center"  
  },

  cardRightCol: {
    flex: 1,
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "blue",
    height: '100%',
    justifyContent: "flex-end"
  },

  cardBottomBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },

  icons: {
    marginRight: 10,
  },

  subtitleText: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },

  switch: {
    marginTop: 15,
  },

  titleBox: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 16,
  },

  titleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
