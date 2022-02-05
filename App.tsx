import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {
  const [img, setImg] = useState(require("./src/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");

  let frases = [
    "A vida trará coisas boas se tiver paciência.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Siga os bons e aprenda com eles.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "O riso é a menor distância entre duas pessoas.",
    "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.",
    "O nosso primeiro e último amor é… o amor-próprio.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("./src/biscoitoAberto.png"));
  }

  function reiniciarBiscoito() {

     setImg(require('./src/biscoito.png'))
     setTextoFrase('')

  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#DD7B22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },

  botao: {
    width: 230,
    height: 50,
    borderColor: "#DD7B22",
    borderWidth: 2,
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#DD7B22",
  },
});

export default App;
