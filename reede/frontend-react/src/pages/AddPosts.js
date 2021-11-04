import AddPostsForm from "../components/AddPostsForm"
import {useContext} from 'react';
import {Context} from "../store";


function AddPosts(){
    const [state, dispatch] = useContext(Context)
    console.log(state);

    return(
        <div>
            <br />
            <br />
            <h1>Add new post</h1>
            <AddPostsForm/>
        </div>
    )
}

export default AddPosts