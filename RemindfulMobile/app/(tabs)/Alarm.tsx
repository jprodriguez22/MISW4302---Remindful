import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Button, PaperProvider, Surface } from "react-native-paper";

import { Card, Icon, Switch } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";

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
  { label: "Única vez", value: "off" },
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
  { label: "Gimnasio", value: "gym" },
  { label: "Medicina", value: "medicine" },
];

export default function NewAlarm() {
  // Clock configuration
  const [selectedHour, setSelectedHour] = React.useState<number>(hour);
  const [selectedMinute, setSelectedMinute] = React.useState<number>(minute);

  const [selectedFreq, setSelectedFreq] = React.useState<string>("off");
  const [freqIsFocus, freqSetIsFocus] = React.useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("wakeup");
  const [catIsFocus, catSetIsFocus] = React.useState<boolean>(false);

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
            <ScrollView>
              <View style={styles.cardRow1}>
                <View>
                  <Text
                    style={[styles.label, freqIsFocus && { color: "#fff" }]}
                  >
                    Frecuencia
                  </Text>
                  <Dropdown
                    style={[styles.dropdown]}
                    data={FreqOptions}
                    labelField="label"
                    valueField="value"
                    onChange={(item) => {
                      setSelectedFreq(item.value);
                      freqSetIsFocus(false);
                    }}
                    onFocus={() => freqSetIsFocus(true)}
                    onBlur={() => freqSetIsFocus(false)}
                    placeholderStyle={styles.selectedTextStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                  />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text style={[styles.label, catIsFocus && { color: "#fff" }]}>
                    Categoría
                  </Text>
                  <Dropdown
                    style={[styles.dropdownCategory]}
                    data={CategoryOptions}
                    labelField="label"
                    valueField="value"
                    onChange={(item) => {
                      setSelectedCategory(item.value);
                      catSetIsFocus(false);
                    }}
                    onFocus={() => catSetIsFocus(true)}
                    onBlur={() => catSetIsFocus(false)}
                    placeholderStyle={styles.selectedTextStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                  />
                </View>
              </View>

              <View style={styles.cardRow2}>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
                <Text style={styles.daySelector}>.</Text>
              </View>

              <View style={styles.cardRow3}>
                <Text style={styles.daySelector}>D</Text>
                <Text style={styles.daySelector}>L</Text>
                <Text style={styles.daySelector}>M</Text>
                <Text style={styles.daySelector}>X</Text>
                <Text style={styles.daySelector}>J</Text>
                <Text style={styles.daySelector}>V</Text>
                <Text style={styles.daySelector}>S</Text>
              </View>

              <View style={styles.cardRow4}>
                <View style={{ width: "100%", marginTop: 15 }}>
                  <Text
                    style={[styles.label, freqIsFocus && { color: "#fff" }]}
                  >
                    Nombre
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Escribir nombre de alarma"
                    placeholderTextColor={"#979797"}
                  />
                </View>
              </View>

              <View style={styles.cardRow5}>
                <Text style={{ color: "white", fontSize: 12 }}>
                  Sonido de alarma
                </Text>
              </View>

              <View style={styles.cardRow6}>
                <Icon
                  source={require("../../assets/icons/spotify.png")}
                  size={30}
                />
                <Icon source="microphone" size={30} />
              </View>

              <View style={styles.cardRow7}>
              </View>

              <View style={styles.cardRow8}>
                <Surface style={styles.multimediaSurface} elevation={5} mode="elevated">
                    <Icon source="format-text" size={30} color="#323232" />
                    <Icon source="image" size={30} color="#323232" />
                    <Icon source="file-upload-outline" size={30} color="#323232" />
                </Surface>
              </View>

              <View style={styles.cardRow9}>
                <Button mode="elevated" style={styles.buttons} buttonColor="#841C35" textColor="white">Cancelar</Button>
                <Button mode="elevated" style={styles.buttons} buttonColor="white" textColor="#212121">Guardar</Button>
              </View>

            </ScrollView>
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
  buttons: {
    borderRadius: 6,
    width: 120
  },
  cardBody: {
    flex: 1,
    backgroundColor: "#1B202B",
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  cardRow1: {
    flexGrow: 1,
    flexDirection: "row",
  },
  cardRow2: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  cardRow3: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  cardRow4: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardRow5: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  cardRow6: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingHorizontal: 55,
  },
  cardRow7: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 16,
    height: 34
  },
  cardRow8: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  cardRow9: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  clockText: {
    color: "#fff",
    fontSize: 40,
  },
  containerStyle: {
    height: 193,
  },
  daySelector: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdown: {
    borderColor: "black",
    borderBottomWidth: 1,
    marginVertical: 4.5,
    height: 28.5,
    width: 150,
  },
  dropdownCategory: {
    borderColor: "black",
    borderBottomWidth: 1,
    marginVertical: 4.5,
    height: 28.5,
    width: 120,
  },
  gridRootContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    marginTop: 10,
    padding: 20,
  },
  label: {
    color: "#979797",
    fontSize: 12,
  },
  multimediaSurface: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: "space-evenly",
    height: 40,
    width: 170
  },
  selectedLayout: {
    backgroundColor: "#2E3440",
  },
  selectedElement: {
    color: "#fff",
    fontSize: 40,
  },
  selectedTextStyle: {
    color: "#fff",
    fontSize: 14,
  },
  textInput: {
    color: "#fff",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
