import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm  from '../components/BlogPostForm';


 const CreateScreen = ({navigation}) => {
    const {addblogpost}= useContext(Context);
    
    return <BlogPostForm onSubmit={(title , content)=> {
        addblogpost(title ,content , ()=> navigation.navigate('Home'))
    }}/>

 }
 const styles = StyleSheet.create({
    

        
 })

 export default CreateScreen ;