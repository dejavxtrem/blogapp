import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
//import BlogContext from '../context/BlogContext'
import {Context} from '../context/useReducerContext'
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

const  {state, addBlogPost, deleteBlogPost } = useContext(Context)
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
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.row}>
                    <Text style={styles.title}>{item.title} -{item.id}</Text>
                    <TouchableOpacity>
                    <Feather name='trash' style={styles.icon} onPress={() => deleteBlogPost(item.id)}/>
                    </TouchableOpacity>
                    
                    </View>

                </TouchableOpacity>

            )
            }}
            />

        </View>
    )
}

//function to add to the header values of a screen component
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create') }> 
                    <Feather name="plus" size={30} color="black" />
                    </TouchableOpacity>
    }
}



const styles = StyleSheet.create ({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
})




export default IndexScreen