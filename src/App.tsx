import { useEffect, useState } from 'react';

const App = () => {
  const [isFetchingPosts, setIsFetchingPosts] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postsFetchingError, setPostsFetchingError] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      setPostsFetchingError('');
      try {
        const response = await fetch(
          'https://www.reddit.com/r/redditdev.json?limit=50'
        );
        const posts = await response.json();
        setPosts(posts.data.children);
      } catch (error) {
        setPostsFetchingError('Error while fetching posts');
        console.error(error);
      } finally {
        setIsFetchingPosts(false);
      }
    };

    getPosts();
  }, []);
  console.log('posts', posts);

  if (isFetchingPosts) {
    return <h1>Loading posts</h1>;
  }

  if (postsFetchingError) {
    return <h1>{postsFetchingError}</h1>;
  }

  return <div className="App">{posts.length && <h2>posts</h2>}</div>;
};

export default App;
