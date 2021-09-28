import { useEffect, useState } from 'react';
import Post from 'components/Post';
import { IPostData } from './types';

const App = (): JSX.Element => {
  const [isFetchingPosts, setIsFetchingPosts] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPostData[]>([]);
  const [postsFetchingError, setPostsFetchingError] = useState<string>('');

  useEffect(() => {
    const getPosts = async () => {
      setPostsFetchingError('');
      try {
        const response = await fetch(
          'https://www.reddit.com/r/all.json?limit=50'
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

  return (
    <div className="App">
      {isFetchingPosts && <h1>Loading posts</h1>}
      {postsFetchingError && <h1>{postsFetchingError}</h1>}
      {!!posts.length &&
        posts.map(({ data }: IPostData) => (
          <Post
            author={data.author}
            created={data.created}
            preview={data.preview}
            num_comments={data.num_comments}
            thumbnail={data.thumbnail}
            title={data.title}
            visited={data.visited}
          />
        ))}
    </div>
  );
};

export default App;
