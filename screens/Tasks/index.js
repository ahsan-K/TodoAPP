import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Components from '../../components';
import Swipeout from 'react-native-swipeout';
import CheckBox from '@react-native-community/checkbox';
import { connect } from 'react-redux';
const Tasks = ({add , remove, incompleteReducer, completedReducer}) => {

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
    },[incompleteReducer, completedReducer])

    const handleUpdate = (type, index, actionType) =>{
      if(type == "add"){
        let temp = [...incompleteReducer].map(res=>{return {...res}})
        temp.push(selected)
        add(actionType,temp)
      }
      else{
       if(actionType == "UPDATE_COMPLETED"){
        let temp = [...completedReducer].map(res=>{return {...res}})
        temp.splice(index, 1)
        remove(actionType,temp)
       }else{
        let temp = [...incompleteReducer].map(res=>{return {...res}})
        temp.splice(index, 1)
        remove(actionType,temp)
       }
      }
      setShowModal(false)
    }
    return (
      <SafeAreaView style={styles.container}>
          {/* <Components.Modal
            type="task"
            title="Reminder"
            onButtonPress={()=>{}}
            buttonTitle="Reminder"
            setValues={(x)=>setSelected(x)}
            values={selected} 
            onHide={()=>setShowModal(false)} 
            show={showModal}/> */}
           <Components.Modal
            type="task"
            title="TASK"
            onButtonPress={()=>{
              handleUpdate("add", null, "UPDATE_INCOMPLETE")
            }}
            buttonTitle="save"
            setValues={(x)=>setSelected(x)}
            values={selected} 
            onHide={()=>setShowModal(false)} 
            show={showModal}/>
          <Components.StyleText title="Task"/>
          <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
            <TouchableOpacity onPress={()=>setShowModal(true)}>
              <Components.StyleText textStyle={styles.heading} title="+ Add new task"/>
            </TouchableOpacity>
            {incompleteReducer > 0 && <Components.StyleText textStyle={styles.heading} title="Incomplete"/>}
            {
              incompleteReducer.map((res, i) =>{
                const buttonOptions = [
                  {
                    text: 'Delete',
                    backgroundColor:'red',
                    onPress:()=>{
                      handleUpdate("delete", i, "UPDATE_INCOMPLETE")
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
                      <CheckBox
                        onTintColor={'#F6F6F6'}
                        tintColor={'#F6F6F6'}
                        onFillColor={'#F6F6F6'}
                        onCheckColor={'#F6F6F6'}
                        style={{width:20, height:20, marginHorizontal:10}}
                        boxType="square"
                        disabled={true}
                        value={res.isChecked}
                      />
                      <View>
                        <Text style={styles.taskSummary}>{res.summary}</Text>
                        <Text style={styles.tasktime}>{`⏰  ${res.dueDate}`}</Text>
                      </View>
                    </View>
                  </Swipeout>
                )
              })
            }
            {completedReducer.length > 0 && <Components.StyleText textStyle={styles.heading} title="Completed"/>}
            {
              completedReducer.map((res, i) =>{
                const buttonOptions = [
                  {
                    text: 'Delete',
                    backgroundColor:'red',
                    onPress:()=>{
                      handleUpdate("delete", i, "UPDATE_COMPLETED")
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
                      <CheckBox
                         onTintColor={'#000'}
                         tintColor={'#000'}
                         onFillColor={'#F6F6F6'}
                         onCheckColor={'#000'}
                         style={{width:20, height:20, marginHorizontal:10}}
                         boxType="square"
                         disabled={true}
                         value={res.isChecked}
                      />
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
export default connect(mapStateToProps, mapDispatchToProps)(Tasks)