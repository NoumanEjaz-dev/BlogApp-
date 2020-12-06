import CreateDataContext from './CreateDataContext';
import JsonServer from '../api/JsonServer';
import { act } from 'react-test-renderer';

const blogReducer = (state, action)=> {

// console.log("mai blogpost ka state",state); //done
     switch(action.type){
          case 'get_blogposts':
               return action.payload;
          case 'edit_blogpost':
               return state.map((blogpost)=>{
               return blogpost.id === action.payload.id ? action.payload : blogpost;
               })
          case 'delete_blogpost':
               return state.filter((blogpost)=> blogpost.id !== action.payload);
          case 'add_blogpost': 
               return [
                    ...state,
                    {
                         id: Math.floor (Math.random()*99999),
                         title: action.payload.title,
                         content: action.payload.content,
                    }
               ];
               default:
               return state;

     }
};

const getblogpost = dispatch => {
     return async () => {
        const response =   await JsonServer.get('/blogposts')

        dispatch({type: 'get_blogposts', payload: response.data})
     }
}

const addblogpost = dispatch => {
     return  (title , content, callback) => {
          dispatch({type:'add_blogpost', payload: {title, content}});
          callback();
          } 
};

const deleteblogpost = dispatch => {
     return id => {
          dispatch({type:'delete_blogpost', payload: id})
     }
}
 const editblogpost = dispatch => {
      return (id, title , content, callback)=> {
          dispatch ({
               type: 'edit_blogpost',
           payload : {id,title ,content}
          });
          callback()
      }
 }

const {Context, Provider} = CreateDataContext(
     blogReducer,
     {addblogpost,deleteblogpost, editblogpost, getblogpost},
     [{title: "Testing post", content:'Testing Content',id : "1"}]
);

// console.log("mai hu blogContxt ", Context );

export { Context, Provider }