import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding:20

  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'100%',
  },
  text: {
    textAlign:'center',
    marginBottom:10
  },
  datePicker:{
    width:'100%',
    height:50,
    borderRadius:10,
    backgroundColor:'#F6F6F6',
    overflow:'hidden',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:5,
    marginBottom:20,
  }
});