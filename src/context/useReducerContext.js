//import React, {useReducer} from 'react';
import createDataContext from './createDataContext'

// const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost': 
            return [...state, {title: `Blog Post #${state.length + 1}`}]
        default:
         return state;
    }
}


const addBlogPost = () => {
    dispatch({ type: 'add_blogpost'})
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

export const  {Context, Provider} = createDataContext(blogReducer, { addBlogPost}, [])