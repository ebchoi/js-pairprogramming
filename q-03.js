/*
3. 프로퍼티 정렬

요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.

단, todos는 변경되지 않도록 하자.

참고: Array.prototype.sort

[CODE EXPLAINED]
원본배열을 변경하지 않기 위해서 todos 배열을 spread 문법을 사용하여 복사해와서 copy라는 변수에 할당.
copy 에 새롭게 만든 배열을 sort 메서드로 정렬를 하였으나, 'id' 프로퍼티 값이 숫자이므로 유니코드 기준으로 되기 때문에 삼항조건 표현식을 추가해줬다.

*/
const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function sortBy(key) {
      const copy = [ ...todos ];
      return copy.sort((a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));
  }
  

/* 중첩 삼항조건 분해하기

(a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0)));

    if (a[key] > b[key] {
        1 
    } else if (a[key] < b[key] {
        -1
    } else {
        0
    }

  console.log(sortBy('id'));
  /*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
  console.log(sortBy('content'));
  /*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
  console.log(sortBy('completed'));
  /*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */