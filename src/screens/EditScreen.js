import React , {useContext} from 'react';
import {  StyleSheet } from 'react-native';
import  { Context } from '../context/useReducerContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({navigation}) => {

    // saving the navigation param  
    const id = navigation.getParam('id')
    
 // obejct destructuring of state from useReducercontext   
const { state, editBlogPost } = useContext(Context)

//helper function to find the blogpost in state using the id and comparing it to the navigation.params id
const blogPost = state.find((blogPost) => blogPost.id === id)


//seting the component state and passing into it the state from context

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }}
        />
    )
}



const styles = StyleSheet.create({

})

export default EditScreen