import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Components from '../../components';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import image from '../../assets';
const Location = ({add , remove, currentLocationsReducer, previousLocationsReducer}) => {

    const [showModal, setShowModal] = useState(true)
    const [selected, setSelected] = useState({
      summary:'',
      discription:'',
      dueDate:new Date().toLocaleTimeString(),
      isChecked:false,
    })

    useEffect(()=>{
      setSelected({
        summary:'',
        discription:'',
        dueDate:new Date().toLocaleTimeString(),
        isChecked:false,
      })
      setShowModal(false)
    },[currentLocationsReducer, previousLocationsReducer])

    const handleUpdate = (type, index, actionType) =>{
      if(type == "add"){
        let temp = [...currentLocationsReducer].map(res=>{return {...res}})
        temp.push(selected)
        add(actionType,temp)
      }
      else{
       if(actionType == "UPDATE_CURRENTLOCATION"){
        let temp = [...previousLocationsReducer].map(res=>{return {...res}})
        temp.splice(index, 1)
        remove(actionType,temp)
       }else{
        let temp = [...currentLocationsReducer].map(res=>{return {...res}})
        temp.splice(index, 1)
        remove(actionType,temp)
       }
      }
      setShowModal(false)
    }
    return (
      <SafeAreaView style={styles.container}>
           <Components.Modal
            type="task"
            title="TASK"
            onButtonPress={()=>{
              handleUpdate("add", null, "UPDATE_PREVIOUSLOCATION")
            }}
            buttonTitle="save"
            setValues={(x)=>setSelected(x)}
            values={selected} 
            onHide={()=>setShowModal(false)} 
            show={showModal}/>
          <Components.StyleText title="Task"/>
          <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
            <Components.StyleText textStyle={styles.heading} title="+ Current location"/>
            {currentLocationsReducer > 0 && <Components.StyleText textStyle={styles.heading} title="Incomplete"/>}
            {
              currentLocationsReducer.map((res, i) =>{
                const buttonOptions = [
                  {
                    text: 'Delete',
                    backgroundColor:'red',
                    onPress:()=>{
                      handleUpdate("delete", i, "UPDATE_PREVIOUSLOCATION")
                    }
                  },
                  {
                    text: 'Edit',
                    backgroundColor:'blue'
                  },
                ];
                return(
                  <Swipeout 
                    style={{borderRadius:5,backgroundColor:'#fff',}} 
                    right={buttonOptions}>
                    <View style={{padding:10, marginBottom:5, flexDirection:'row'}}>
                      <Image source={image.pin}/>
                      <View>
                        <Text style={styles.taskSummary}>{res.summary}</Text>
                        <Text style={styles.tasktime}>{`⏰  ${res.dueDate}`}</Text>
                      </View>
                    </View>
                  </Swipeout>
                )
              })
            }
            {previousLocationsReducer.length > 0 && <Components.StyleText textStyle={styles.heading} title="Previous location"/>}
            {
              previousLocationsReducer.map((res, i) =>{
                const buttonOptions = [
                  {
                    text: 'Delete',
                    backgroundColor:'red',
                    onPress:()=>{
                      handleUpdate("delete", i, "UPDATE_CURRENTLOCATION")
                    }
                  },
                  {
                    text: 'Edit',
                    backgroundColor:'blue'
                  },
                ];
                return(
                  <Swipeout 
                    style={{borderRadius:5,backgroundColor:'#fff',}}
                    right={buttonOptions}>
                    <View style={{padding:10, marginBottom:5, flexDirection:'row'}}>
                      <Image source={image.pin}/>
                      <View>
                        <Text style={[styles.taskSummary, {color:'#B9B9BE'}]}>{res.summary}</Text>
                        <Text style={styles.tasktime}>{res.dueDate}</Text>
                      </View>
                    </View>
                  </Swipeout>
                )
              })
            }
        </ScrollView>
      </SafeAreaView>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (t,x) => dispatch({ type: t, payload: x}),
    remove: (t,x) => dispatch({ type: t, payload: x }),
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)