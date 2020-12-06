import React, {useState} from 'react';
import {View , Text , StyleSheet,TextInput, TouchableOpacity} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues})=> {

    // console.log(onsubmit, "onsubmit");
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Enter Title :</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.text}>Enter Content :</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

            <TouchableOpacity style={styles.btn}
                onPress={()=> onSubmit(title, content)}
               >
                <Text> Save blog</Text>
            </TouchableOpacity>
        </View>
    )
}
BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content:'' 
    }
}; 


const styles= StyleSheet.create({
    view: {
        flex: 1,
        margin: 10,

    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,

    },
    text: {
        fontSize: 20,
        margin: 5,
    },
    btn: {
        backgroundColor: 'pink',
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 40,
        borderWidth: 2,
    },

});

export default BlogPostForm;