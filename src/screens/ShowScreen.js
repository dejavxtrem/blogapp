import React , {useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import  { Context } from '../context/useReducerContext'

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
        </View>
    )
}



const styles = StyleSheet.create({

})








export default ShowScreen
