import axios from 'axios';
import React, { useContext } from 'react';
import CommentForm from './CommentForm';
import CommentsHolder from './CommentsHolder';
import { RefreshContext } from '../contexs/RefreshProvider';
import cookies from 'react-cookies';

function Post({ postData }) { //postData = {id='', title = '',content='',userId='',comments=[]}

  const { refreshMain, setRefreshMain } = useContext(RefreshContext);

  function deletePost() {
    const url = `${process.env.REACT_APP_SERVER}/post/${postData.id}`;
    const token = cookies.load("token");
    const bearer = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.delete(url, bearer)
      .then(resolved => setRefreshMain(pre => pre + 1))
      .catch(reject => alert(reject.response.data));

  }

  return (
    <div className='pos'>
      <button onClick={deletePost} >delete</button>
      <h4>{postData.title}</h4>
      <hr></hr>
      <p>{postData.content}</p>
      {postData.comments.length?<CommentsHolder comments={postData.comments} />:<p >Add the first comment...</p>}
      <CommentForm postID={postData.id} />
    </div>
  )
}

export default Post