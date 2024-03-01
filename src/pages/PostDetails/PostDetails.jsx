import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, selectAllPosts } from '../../slice';
import '../styles.css';

const PostDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector(selectAllPosts);
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='post-details'>
      {post ? (
        <div>
          <Link to='/'>Back</Link>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
