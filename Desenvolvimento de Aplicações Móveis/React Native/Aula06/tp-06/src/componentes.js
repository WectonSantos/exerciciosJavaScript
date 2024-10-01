import React from  'react'
import { Text } from 'react-native'
import styles from './estilos'

const Comp1 = () => 
  <Text style = {styles.texto1}>TEXTO 1</Text>

const Comp2 = () => 
  <Text style = {styles.texto2}>TEXTO 2</Text>

const Comp3 = () => 
  <Text style = {styles.texto3}>TEXTO 3</Text>


const Comp4 = () =>
  <Text style = {styles.texto4}>TEXTO 4</Text>



const Comp5 = () => 
  <Text style = {styles.texto1,styles.texto2,styles.texto3,styles.texto4}>TEXTO 5</Text>


export {Comp1, Comp2, Comp3, Comp4, Comp5}