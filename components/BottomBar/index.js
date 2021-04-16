import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Images from '../../assets';

export default ({navigation}) => {
  const [tab, setTab] = useState(1)
   const PlusButton = () =>{
     return(
       <TouchableOpacity style={styles.plusButton}>
        <Image source={Images.plus} />
       </TouchableOpacity>
     )
   }
    return (
     <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Tasks')
          setTab(1)
        }} style={styles.tab}>
          <Image style={styles.tabImage} source={tab == 1 ? Images.task : Images.taskGray} />
          <Text style={[styles.tabText, {color:tab == 1 ? "#000" : "gray"}]}>Task</Text>
        </TouchableOpacity>
        {/* <PlusButton/> */}
        <TouchableOpacity  onPress={()=>{
          navigation.navigate('Location')
          setTab(2)
        }} style={styles.tab}>
          <Image style={styles.tabImage} source={tab == 2 ? Images.location : Images.locationGray} />
          <Text style={[styles.tabText, {color:tab == 2 ? "#000" : "gray"}]}>Location</Text>
        </TouchableOpacity>
     </View>
    );
};