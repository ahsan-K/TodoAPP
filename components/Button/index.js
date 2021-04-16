import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
export default ({title, onPress, containerStyle}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {...containerStyle}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};