import { Text, View, StyleSheet } from 'react-native';
import styles from './src/estilos'
import {Comp1, Comp2, Comp3, Comp4, Comp5} from './src/componentes'

export default function App() {  
  return (
    <View style = {styles.view}>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Comp4></Comp4>
      <Comp5></Comp5>
    </View>
  )
}

