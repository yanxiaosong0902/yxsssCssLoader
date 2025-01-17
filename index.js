module.exports = function loader(source) {
  const reg = /(\@yxsssCss)\s(\w+)\;/g
  source = source.replace(reg, (match, $1, $2) => {
    return `@import "~yxsss-style/${$2}.less";`
  })
  return source
}
