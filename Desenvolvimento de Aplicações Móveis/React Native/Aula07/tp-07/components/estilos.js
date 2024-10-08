import { StyleSheet } from 'react-native';

export default estilo = StyleSheet.create({
  View: {
    height: "100%",
    padding: 25,
    justifyContent: 'center',
    backgroundColor: "yellow"
  },
  Text: {
    fontSize: 60
  },
  estiloBotoes: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  estiloVisor: {
    width: "100%",
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'white', 
    padding: 10, 
    borderRadius: 5,
  },
  visor1: {
    width: "75%",
    color: 'white', 
    backgroundColor: 'black',
    fontSize: 100,
    borderColor: 'white',  // Cor da borda
    borderWidth: 2,        // Espessura da borda
    borderRadius: 5,       // Bordas arredondadas
  },
  visor2: {
    width: "25%",
    color: 'white', 
    backgroundColor: 'black',
    fontSize: 100,
    borderColor: 'white',  // Cor da borda
    borderWidth: 2,        // Espessura da borda
    borderRadius: 5,       // Bordas arredondadas
  },
});
