//import React, {useReducer} from 'react';
import createDataContext from './createDataContext'
import { call } from 'react-native-reanimated'
import jsonServer from '../API/jsonServer'

// const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                    return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'get_blogposts':
            return action.payload
        default:
         return state;
    }
}


//get blogpost from api action function
const getBlogPost = dispatch => {
    return async () => {
       const response =  await jsonServer.get('/blogposts')
       //response.data
       dispatch({type: 'get_blogposts',  payload: response.data})
    }
}



//adding two arguements to the function so we can use the function for adding new blog post
const addBlogPost = (dispatch) => {
    return  async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title: title, content: content})
        // dispatch({ type: 'add_blogpost', payload: {title: title, content: content}})
        if (callback) {
         callback()
        }
        
    }
    
}

const deleteBlogPost = (dispatch) => {

    return  async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return  async (id, title, content, callback ) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content})
        // dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}})
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
    deleteBlogPost, editBlogPost, getBlogPost}, 
    [])

 
