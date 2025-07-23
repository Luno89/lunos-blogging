export const getPostBySlug = async (slug: string) => {
  const res = await fetch(`/api/posts/${slug}`);
  const post = await res.json();
  return post;
};
    
