import axios from 'axios';

export async function getPostsById(userId) {
  const url = `/posts/user/${userId}`;

  try {
    const response = await axios.get(url);
    return response.status === 500 ? [] : response.data;
  }
  catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPosts() {
    const url = `/posts`;
  
    try {
      const response = await axios.get(url);
      return response.status === 500 ? [] : response.data;
    }
    catch (error) {
      console.log(error);
      return [];
    }
  }

export async function likePost(postId, params) {
  const url = `/posts/like/${postId}`;

  try {
    const response = await axios.post(url , params);
    return response.status === 500 ? {} : response.data;
  }
  catch (error) {
    console.log(error);
    return {};
  }
}

export async function createPost(params) {
  const url = `/posts`;

  try {
    const response = await axios.post(url , params);
    return response.status === 500 ? {} : response.data;
  }
  catch (error) {
    console.log(error);
    return {};
  }
}