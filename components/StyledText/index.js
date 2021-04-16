import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './styles';
export default ({title, textStyle}) => {
    return (
        <Text style={[styles.text, {...textStyle}]}>{title}</Text>
    );
};