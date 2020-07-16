import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button} from 'react-native';
//import BlogContext from '../context/BlogContext'
import {Context} from '../context/useReducerContext'


const IndexScreen = () => {

const  {state, addBlogPost } = useContext(Context)
    return (
        <View>
            <Text>
                Index screen
            </Text>
            <Button title="Add Post" onPress= {() => addBlogPost()}/>
            <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
            return <Text>{item.title}</Text>
            }}
            />
        </View>
    )
}



const style = StyleSheet.create ({

})




export default IndexScreen