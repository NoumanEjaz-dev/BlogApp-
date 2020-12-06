import React, { useContext, useState } from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

    const EditScreen =(props)=> {

        const id  =     props.route.params.id;
        const {state , editblogpost} = useContext(Context);


        const blogPost = state.find((blogPost) => blogPost.id === props.route.params.id) 

        const [title, setTitle ] = useState(blogPost.title);
        const [content, setContent] = useState(blogPost.content);

        console.log(props);
        return <BlogPostForm 
        initialValues={{title: blogPost.title , content:blogPost.content}}
        onSubmit={(title, content)=>{
            editblogpost(id, title, content, ()=> props.navigation.pop())
        }}/>

    
}

const  styles = StyleSheet.create({
    
});
export default EditScreen;