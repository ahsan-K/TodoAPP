import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import styles from './styles';
import StyleText from '../StyledText';
import Button from '../Button';
import Input from '../Input';
import DateTimePicker from '@react-native-community/datetimepicker';

export default ({onHide, show, values, setValues, title, buttonTitle, onButtonPress, type}) => {
    const [showPicker, setShowPicker] = useState(false)
    useEffect(()=>{
        if(showPicker){
            setShowPicker(false)
        }
    },[values])
    if(!show) return (<></>)
    return (
        <View style={styles.centeredView}>
        {showPicker && <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={(x, selectedDate)=>{
            setValues({...values, dueDate:new Date(selectedDate).toLocaleTimeString()})
          }}
        />}
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={onHide}>
          <SafeAreaView style={styles.centeredView}>
            <View style={[styles.modalView,{minHeight:type == "task" ? "100%" : 0}]}>
                <StyleText textStyle={{margin:0, marginBottom:10}} title={title}/>
                {type !== "task" ? <>
                    <Text style={styles.text}>
                        (About this soundlisten) WIK-ee) is a hypertext publication collaboratively edited and managed by its own audience directly using a web browser. A typical wiki contains multiple pages for the subjects or scope of the project and could be either open to the public or limited to use within an organization for maintaining its internal knowledge base.
                    </Text>
                    <Button onPress={onButtonPress} title={buttonTitle}/>
                    <TouchableOpacity onPress={onHide}>
                        <StyleText textStyle={{fontSize:14,margin:0, marginTop:10, }} title="Skip"/>
                    </TouchableOpacity>
                </>:
                <>
                    <Input
                        placeholder="Summary"
                        length={20}
                        value={values.summary}
                        onChange={(x)=>setValues({...values, summary:x})}
                        type={'text'}
                        defaultVal=''
                        keyboardType="default"
                        containerStyle={{marginBottom:20}}
                    />

                    <Input
                        multiline
                        numberOfLines={4}
                        placeholder="Description"
                        length={300}
                        value={values.discription}
                        onChange={(x)=>setValues({...values, discription:x})}
                        type={'text'}
                        defaultVal=''
                        containerStyle={{marginBottom:20, minHeight:150, justifyContent:'flex-start', alignItem:'flex-start'}}
                        keyboardType="default"
                        inputStyles={{textAlignVertical: 'top'}}
                    />

                    {/* <Input
                        placeholder="Due date"
                        length={20}
                        value={values.dueDate}
                        onChange={(x)=>setValues({...values, dueDate:x})}
                        type={'text'}
                        defaultVal=''
                        containerStyle={{marginBottom:50}}
                        keyboardType="default"
                    /> */}
                    <TouchableOpacity style={styles.datePicker} onPress={()=>setShowPicker(true)}>
                        <Text style={{color:'gray'}}>{values.dueDate}</Text>
                    </TouchableOpacity>
                </>}
                <Button onPress={onButtonPress} title={buttonTitle}/>

            </View>
          </SafeAreaView>
        </Modal>
      </View>
    );
};