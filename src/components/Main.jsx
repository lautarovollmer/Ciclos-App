import React from "react";
import Constants from "expo-constants";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import imagen1 from "../../assets/imagen1.png";
import imagen2 from "../../assets/imagen2.png";
import imagen3 from "../../assets/imagen3.png";
const Main = () => {
  return (
    <ScrollView
      style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: 390,
          height: 20,
          backgroundColor: "255, 255, 255, 0.79",
        }}
      />
      <Text style={{ fontSize: 45, color: "#232121" }}>
        ¿Cómo{" "}
        <Text
          style={{
            fontFamily: "sans-serif",
            color: "rgb(3, 152, 158)",
            fontSize: 45,
          }}
        >
          trabajamos?
        </Text>
      </Text>
      <View
        style={{
          width: 390,
          height: 20,
          backgroundColor: "255, 255, 255, 0.79",
        }}
      />
      <Text></Text>
      <Text
        style={{
          backgroundColor: "rgba(46, 46, 46, 0.74)",
          color: "#FFFFFF",
          borderRadius: 20,
          fontSize: 20,
        }}
      >
        Nuestra organización cuenta con tres áreas encargadas de planificar,
        gestionar y llevar adelante cada etapa del ciclo organizado. ¡Conocé
        cada una!
      </Text>
      <View>
        <Text></Text>
        <Image style={styles.image} source={imagen1}></Image>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Programa Informa - ODS
        </Text>
      </View>
      <View>
        <Text></Text>
        <Image style={styles.image} source={imagen2}></Image>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Difusión Virtual
        </Text>
      </View>
      <View>
        <Text></Text>
        <Image style={styles.image} source={imagen3}></Image>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Participación Ciudadana
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: { height: 200, width: 368 },
});

export default Main;
