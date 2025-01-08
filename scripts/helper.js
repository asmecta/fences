hexo.extend.helper.register('posts_by_category', function (categoryName, order = 1) {
  if (order === 1) {
    return this.site.posts.filter(post =>
      post.categories.map(cat => cat.name).includes(categoryName)
    );
  } else {
    return this.site.posts.filter(post =>
      post.categories.map(cat => cat.name).includes(categoryName)
    ).reverse();
  }
});