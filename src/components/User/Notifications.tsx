import React, { useEffect, useState } from 'react'
import { clearAllNotifications } from '../../api/notificationClient';
import PostList from '../Post/PostList';

interface Props {
    
}

const Notifications = (props: Props) => {
    const [reload, setReload] = useState<boolean>(false);
    const clearNotifications = (e: React.SyntheticEvent) => {
      clearAllNotifications();
      setReload(true);
    };
  
    useEffect(() => {
      setReload(false);
    }, [reload]);
  
    return (
      <>
        <div className="flex justify-between items-end mb-5">
          <h3 className="text-primary-100 my-auto">Your Feed</h3>
          <button
            onClick={clearNotifications}
            className="py-2 px-6 my-auto rounded-lg text-button bg-accent outline-none focus:outline-none hover:bg-accent-hover"
          >
            Clear Notifications
          </button>
        </div>
        <PostList maxPosts={15} />;
      </>
    );
}

export default Notifications
