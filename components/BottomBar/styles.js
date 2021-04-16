import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width:'100%',
    height:60,
    paddingHorizontal:20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    borderTopWidth:0.5
  },
  plusButton: {
    height:55,
    width:55,
    borderRadius:40,
    backgroundColor:'#333333',
    justifyContent:'center',
    alignItems:'center'
  },
  plusText: {
    color:'#fff'
  },
  tab: {
    justifyContent:'center',
    alignItems:'center',
    width:'50%'
  },
  tabImage: {
    width:18,
    height:23
  },
  tabText: {
    fontSize:12
  }
});