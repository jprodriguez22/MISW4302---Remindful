import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useState } from "react";

import { Card, Icon, Switch } from "react-native-paper";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Historial",
      icon: "history",
    },
    {
      id: 2,
      title: "Almacenamiento",
      icon: "file-upload-outline",
    },
    {
      id: 1,
      title: "Grupos",
      icon: "account-group",
    },
  ]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.background}>
        <ScrollView>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}> Perfil </Text>
          </View>

          {cards.map((card, index) => (
            <Card key={card.id} mode="elevated" style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.cardTopRow}>
                  <Icon source={card.icon} size={48}></Icon>
                  <Text style={styles.subtitleText}>{card.title}</Text>
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
    height: 80,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },

  cardContent: {
    minHeight: "100%",
    padding: 10,
  },

  cardTopRow: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  icons: {
    marginRight: 10,
  },

  subtitleText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 40
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
