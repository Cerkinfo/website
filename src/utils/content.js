const POST_SOURCE = 'src/assets/posts';

/**
 * @brief Create a website URL for a post, in the form of
 *   "/posts/{hierachy_from_post_source}/{title}".
 */
export function makeUrl(article) {
  return `posts${article.dir.split(POST_SOURCE).join('')}/${article.base.split('.json').join('')}`
}

/**
 * @brief Filter the posts to remove the incorrectly formated and sort them by dates.
 */
export function filterPosts(summaryJson) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    .filter((file) => file.indexOf(POST_SOURCE) === 0)
    .map(file => summaryJson.fileMap[file])
    .map(post => Object.assign({}, post, {href: makeUrl(post)}))
    .sort((a, b) => {
      const aDate = Date.parse(a.date)
      const bDate = Date.parse(b.date)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
}
