import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";

import { Card, Icon, Switch } from "react-native-paper";

const SwitchComponent = () => {
  const [isSwitchOn, setIsSwitchOn ] = useState(false)
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
}


export default function Index() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}> Alarmas </Text>
          </View>

          <Card mode="elevated" style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.cardTopRow}>
                <Text style={styles.subtitleText}>Gimnasio</Text>
              </View>
              <View style={styles.cardMidRow}>
                <View style={styles.cardMidRowLC}>
                  <Text style={styles.bodyText}>18:30</Text>
                </View>
                <View style={styles.cardMidRowRC}>
                  <Text style={styles.bodyText}>jue, 22 ago</Text>
                </View>
              </View>
              <View style={styles.cardBottomRow}>
                <View style={styles.cardBotRowLC}>
                  <Icon source="dumbbell" size={40}></Icon>
                  <Text style={styles.categoryText}>Entrenamiento</Text>
                </View>
                <View style={styles.cardBotRowRC}>
                  <Switch
                    value={true}
                    style={styles.switch}
                    color="#773CFF"
                  ></Switch>
                </View>
              </View>
            </View>
          </Card>

          <Card mode="elevated" style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.cardTopRow}>
                <Text style={styles.subtitleText}>Practicar Noruego</Text>
              </View>
              <View style={styles.cardMidRow}>
                <View style={styles.cardMidRowLC}>
                  <Text style={styles.bodyText}>18:00</Text>
                </View>
                <View style={styles.cardMidRowRC}>
                  <Text style={styles.bodyText}>L, M, X, J, V</Text>
                </View>
              </View>
              <View style={styles.cardBottomRow}>
                <View style={styles.cardBotRowLC}>
                  <Icon source="library" size={40}></Icon>
                  <Text style={styles.categoryText}>Estudio</Text>
                </View>
                <View style={styles.cardBotRowRC}>
                  <Switch
                    value={false}
                    style={styles.switch}
                    color="#773CFF"
                  ></Switch>
                </View>
              </View>
            </View>
          </Card>

          <Card mode="elevated" style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.cardTopRow}>
                <Text style={styles.subtitleText}>Hora de dormir</Text>
              </View>
              <View style={styles.cardMidRow}>
                <View style={styles.cardMidRowLC}>
                  <Text style={styles.bodyText}>22:00</Text>
                </View>
                <View style={styles.cardMidRowRC}>
                  <Text style={styles.bodyText}>L, M, X, J</Text>
                </View>
              </View>
              <View style={styles.cardBottomRow}>
                <View style={styles.cardBotRowLC}>
                  <Icon source="power-sleep" size={40}></Icon>
                  <Text style={styles.categoryText}>Despertador</Text>
                </View>
                <View style={styles.cardBotRowRC}>
                  <Switch
                    value={true}
                    style={styles.switch}
                    color="#773CFF"
                  ></Switch>
                </View>
              </View>
            </View>
          </Card>

        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2E3440",
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
    flexDirection: "column",
    minHeight: "100%",
    padding: 10,
  },

  cardTopRow: {
    flex: 1,
    flexGrow: 1,
  },

  cardMidRow: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  cardMidRowLC: {
    flex: 2,
  },

  cardMidRowRC: {
    flex: 1,
    alignItems: "flex-end",
  },

  cardBottomRow: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  cardBotRowLC: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },

  cardBotRowRC: {
    flex: 1,
    alignContent: "center",
  },

  cardBottomBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  icons: {
    marginRight: 10,
  },

  subtitleText: {
    color: "#fff",
    fontSize: 20,
  },

  switch: {
    marginRight: 6,
  },

  titleBox: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },

  titleText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
