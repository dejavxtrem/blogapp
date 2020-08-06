//import React, {useReducer} from 'react';
import createDataContext from './createDataContext'
import { call } from 'react-native-reanimated'

// const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': 
            return [...state, {id: Math.floor(Math.random() * 99999) , title: action.payload.title, content: action.payload.content}]
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                    return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        default:
         return state;
    }
}

//adding two arguements to the function so we can use the function for adding new blog post
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title: title, content: content}})
        if (callback) {
         callback()
        }
        
    }
    
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback ) => {
        dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}})
        if (callback) {
            callback()
        }
        
    }
}




// export const BlogProvider = ({children}) => {

//     const [blogPosts, dispatch] = useReducer(blogReducer, [])

      

// //     const blogPosts = [
// //         {title: 'Blog Post #1'},
// //         {title: 'Blog Post #2'},
// //         {title: 'Blog Post #3'}
// //  ]

   


//     return (<BlogContext.Provider value={{
//                 data: blogPosts,
//                 addBlogPost: addBlogPost
//     }}>
//                 {children}
//             </BlogContext.Provider>)
// }

// export default BlogContext

export const { Context, Provider} = createDataContext(blogReducer, { addBlogPost, 
    deleteBlogPost, editBlogPost}, 
    [{ title: 'Test post', content: 'Content for test', id: 1}])

 
