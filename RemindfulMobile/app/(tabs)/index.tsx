import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";

import { Card, Icon, Switch } from "react-native-paper";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Gimnasio",
      time: "18:30",
      date: "vie, 11 oct",
      icon: "dumbbell",
      category: "Entrenamiento",
      switchState: true,
    },
    {
      id: 2,
      title: "Practicar Noruego",
      time: "18:00",
      date: "L, M, X, J, V",
      icon: "library",
      category: "Estudio",
      switchState: false,
    },
    {
      id: 3,
      title: "Hora de dormir",
      time: "22:00",
      date: "L, M, X, J",
      icon: "power-sleep",
      category: "Despertador",
      switchState: true,
    },
  ]);

  const toggleSwitch = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, switchState: !card.switchState } : card
      )
    );
  };
  
  return (
    <PaperProvider>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}> Alarmas </Text>
          </View>

          {cards.map((card, index) => (
            <Card key={card.id} mode="elevated" style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardTopRow}>
                  <Text style={styles.subtitleText}>{card.title}</Text>
                </View>
                <View style={styles.cardMidRow}>
                  <View style={styles.cardMidRowLC}>
                    <Text style={styles.bodyText}>{card.time}</Text>
                  </View>
                  <View style={styles.cardMidRowRC}>
                    <Text style={styles.bodyText}>{card.date}</Text>
                  </View>
                </View>
                <View style={styles.cardBottomRow}>
                  <View style={styles.cardBotRowLC}>
                    <Icon source={card.icon} size={40}></Icon>
                    <Text style={styles.categoryText}>{card.category}</Text>
                  </View>
                  <View style={styles.cardBotRowRC}>
                    <Switch
                      value={card.switchState}
                      onValueChange={() => toggleSwitch(index)}
                      style={styles.switch}
                      color="#773CFF"
                    />
                  </View>
                </View>
              </View>
            </Card>
          ))}
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
