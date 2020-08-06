import React, {useState} from  'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

//customize blogpost component to handle both edit and creat functionality
const BlogPostForm = ({onSubmit, initialValues}) => {

   const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput value={title} onChangeText={(text) => {setTitle(text)}}  style={styles.input}/>
            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput value={content} onChangeText={(contentText) => setContent(contentText)}  style={styles.input}/>
            <Button title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

//used to fill in default value props
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin:5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 7
    }
})

export default BlogPostForm