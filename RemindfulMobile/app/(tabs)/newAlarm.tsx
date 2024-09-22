import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";

import { Card, Icon, Switch } from "react-native-paper";

import { WheelPicker } from "react-native-infinite-wheel-picker";

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const hourSource = Array.from({ length: 24 }, (_, i) =>
  String(i).padStart(2, "0")
);
const minuteSource = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);

const FreqOptions = [
  { label: "Única vez", value: "off"},
  { label: "Diario", value: "daily" },
  { label: "Entre semana", value: "weekdays" },
  { label: "Fin de semana", value: "weekends" },
  { label: "Mensual", value: "monthly" },
  { label: "Personalizado", value: "custom" },
];

const CategoryOptions = [
  { label: "Despertador", value: "wakeup" },
  { label: "Estudio", value: "study" },
  { label: "Finanzas", value: "money" },
  { label: "Gimnasio", value: "gym"},
  { label: "Medicina", value: "medicine" },
];

export default function NewAlarm() {
  // Clock configuration
  const [selectedHour, setSelectedHour] = React.useState<number>(hour);
  const [selectedMinute, setSelectedMinute] = React.useState<number>(minute);

  // Alarm settings
  const [selectedFreq, setSelectedFreq] = React.useState<string>('off');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('wakeup');

  return (
    <PaperProvider>
      <SafeAreaView style={styles.background}>
        <View style={styles.gridRootContainer}>
          <View style={styles.clockContainer}>
            <WheelPicker
              initialSelectedIndex={hour}
              data={hourSource}
              restElements={1}
              onChangeValue={(index, value) => {
                setSelectedHour(index);
              }}
              selectedIndex={selectedHour}
              elementHeight={80}
              containerStyle={styles.containerStyle}
              selectedLayoutStyle={styles.selectedLayout}
              elementTextStyle={styles.selectedElement}
            />
            <Text style={styles.clockText}>:</Text>
            <WheelPicker
              initialSelectedIndex={minute}
              data={minuteSource}
              restElements={1}
              onChangeValue={(index, value) => {
                setSelectedMinute(index);
              }}
              selectedIndex={selectedMinute}
              elementHeight={80}
              containerStyle={styles.containerStyle}
              selectedLayoutStyle={styles.selectedLayout}
              elementTextStyle={styles.selectedElement}
            />
          </View>

          <Card mode={"elevated"} style={styles.cardBody}>
            <View style={styles.cardRow1}>

            </View>
          </Card>

        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2E3440",
  },
  cardBody: {
    flex: 1,
    backgroundColor: "#1B202B",
  },
  cardRow1: {
    flexDirection: "row",
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  clockText: {
    color: "#fff",
    fontSize: 40,
  },
  containerStyle: {
    height: 193,
  },
  gridRootContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    marginTop: 20,
    padding: 20,
  },
  selectedLayout: {
    backgroundColor: "#2E3440",
  },
  selectedElement: {
    color: "#fff",
    fontSize: 40,
  },
});
