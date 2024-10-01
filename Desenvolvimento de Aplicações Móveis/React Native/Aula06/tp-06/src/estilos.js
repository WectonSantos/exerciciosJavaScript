import React from  'react'
import {Text, View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  texto1: {
    fontSize: 50,
    fontFamily: 'fantasy',
    color: 'rgb(65, 105, 225)',
    backgroundColor: 'rgb(255,255, 255)',
    textAlign: 'center'
  },

  texto2: {
    fontSize: 50,
    marginTop: 50,
    fontWeight: 'bold',
    fontFamily: 'lucida grande',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(255,0, 0)',
    textAlign: 'center'
  },

  texto3: {
    fontSize: 50,
    marginLeft: 100,
    marginTop: 50,
    marginBottom: 50,
    fontFamily: 'Roboto-Black',
    color: 'rgb(0, 255, 0)',
    backgroundColor: 'rgb(50,100,0)',
    textAlign: 'center'
  },

  texto4: {
    fontSize: 50,
    fontFamily: 'Helvetica',
    color: 'rgb(124, 97, 105)',
    backgroundColor: 'rgb(0,0,100)',
    textAlign: 'center',
    fontWeight: 'bold'
  
  },

  view:{
    flex: 1, 
    justifyContent: 'center', 
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(150,150,150)',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 5
  }

})

export default styles