import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import estilo from './components/estilos';

function App() {
  const [valor, setValor] = useState(0);
  const [incremento, setIncremento] = useState(1);

  const retira = () => {
    setValor(valor - 1);
  };

  const zerar = () => {
    setValor(0);
  };

  const incrementarValor = () => {
    setValor(valor + incremento);
  };

  return (
    <View style={estilo.View}>
      <Text style={estilo.Text}>CONTADOR</Text>
      <View style={estilo.estiloVisor}>
        <Text style={estilo.visor1}>{valor}</Text>
        <Text style={estilo.visor2}>{incremento}</Text>
      </View>
      <View style={estilo.estiloBotoes}>
        <Button title="Incrementar" color="#042" onPress={incrementarValor} />
        <Button title="RETIRAR" color="#124" onPress={retira} />
        <Button title="ZERAR" color="#124" onPress={zerar} />
        <Button title="+INC" color="#124" onPress={() => setIncremento(incremento + 1)} />
        <Button title="-INC" color="#124" onPress={() => setIncremento(incremento - 1)} />
      </View>
    </View>
  );
}

export default App;
