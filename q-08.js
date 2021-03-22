// #8 completed 프로퍼티의 값이 true인 요소의 갯수 구하기

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  let count = todos.filter ( todo => todo.completed === true )
  return count.length;
}

console.log(countCompletedTodos()); // 1 