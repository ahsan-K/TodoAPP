import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  heading: {
    fontSize:18,
    fontWeight:'bold',
    textAlign:'left',
    marginLeft:10,
    marginBottom:5,
  },
  taskSummary: {
    fontSize:15,
    color:'#575767',
    fontWeight:'bold'
  },
  tasktime: {
    fontSize:14,
    color:'#B9B9BE',
  }
});