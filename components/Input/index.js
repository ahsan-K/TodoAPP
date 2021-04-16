import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
export default ({placeholder, value, defaultVal, onChange, type, length, inputStyles, containerStyle, keyboardType, multiline, underlineColorAndroid, numberOfLines}) => {
  const [show, SetShow] = useState(true)
  return (
      <View style={[styles.container, {...containerStyle}]}>
        <TextInput
          multiline={multiline || false}
          numberOfLines={numberOfLines}
          underlineColorAndroid='transparent'
          secureTextEntry={type !== "password" ? false : show}
          style={[styles.input,{...inputStyles}]}
          maxLength={length}
          keyboardType={keyboardType}
          onChangeText={onChange}
          defaultValue={defaultVal}
          value={value}
          placeholder={placeholder}/>
          {type == "password" && 
            <TouchableOpacity onPress={()=>SetShow(!show)}>
              <Text style={{fontSize:15}}>Show</Text>
            </TouchableOpacity>
          }
      </View>
    );
};