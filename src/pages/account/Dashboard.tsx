import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GlobalLoader from '../../components/GlobalLoader';
import store from '../../store';
import { actions } from '../../store/account/Dashboard/actions';
import { removeLocalItem } from '../../utils/index';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.globalReducer,
  );
  const { posts } = useSelector(
    (state: ReturnType<typeof store.getState>) => state.dashboardReducer,
  );

  const handleLogout = () => {
    removeLocalItem('access-token');
    navigate('/auth/login');
  };

  const handleDeletePost = (id: string) => {
    dispatch(actions.deletePost(id));
  };

  useEffect(() => {
    dispatch(actions.getAllPostsDetails());
  }, []);

  return loading ? (
    <GlobalLoader />
  ) : (
    <>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <hr />
      {posts.map((post) => (
        <div>
          <b>
            <h1>{post.title}</h1>
          </b>
          <i>
            <h3>{post.body}</h3>
          </i>
          <button onClick={() => handleDeletePost(post.id.toString())}>Delete</button>
          <hr />
          <br />
        </div>
      ))}
    </>
  );
};

export default Dashboard;
