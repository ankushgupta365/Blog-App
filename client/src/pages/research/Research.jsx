import { useEffect, useState } from 'react';
import './research.css';
import { publicRequest } from '../../requestMethods';
import Post from '../../components/post/Post';
import Posts from '../../components/posts/Posts';

const Research = () => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            const res = await publicRequest.get("/posts");
            setPosts(res.data);
        };
        getPosts();
    }, []);

    return (
        <div className="research">
            {/* Filters */}
            <div className='posts-wrapper'>
                {posts?.map(p => {
                    return (
                        <div className='post-wrapper'>
                            <Post post={p} />
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Research