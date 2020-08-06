import React , { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  { Context } from '../context/useReducerContext'
import { EvilIcons } from '@expo/vector-icons';

//the id received not provided as a prop
const ShowScreen = ({navigation}) => {
    //console.log(navigation.getParam('id'))
    const { state } = useContext(Context)

    //helper function to find the id of the blodpost in the state is the same with the one past in from the navigation params
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

       
    return (
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}


ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => 
        navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                    <EvilIcons name="pencil" size={40} color="black" />
                    </TouchableOpacity>
    }
}


const styles = StyleSheet.create({

})








export default ShowScreen
