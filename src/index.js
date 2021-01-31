
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (checkArray(matrix)) {
    return matrix.reduce((acc, curr, index) => {
      if ((index + 1) % 2) {
        return acc.concat(curr)
      } else {
        return acc.concat(curr.reverse())
      }
    }, [])
  } else {
    return []
  }
}

function checkArray(array) {
  if (!Array.isArray(array)) {
    return false
  }
  if (array.length === 0) {
    return false
  }
  return true
}