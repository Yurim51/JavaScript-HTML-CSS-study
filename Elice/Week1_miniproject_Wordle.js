let answer = 'hello';
let answerArray = [...answer];

let count = 0;
let rightcount = 0;

let $button = document.querySelector('button')
$button.addEventListener('click', function() {

    let $input = document.querySelectorAll('.input')
    let inputelements = [...$input].map((e) => e.value)
    // $input은 Nodelist로 값을 가져옴 -> 유사배열객체이기에 [...$input]와 같이 구조분해할당 처리

    inputelements.reduce((_, val, ind) => {
        wordCheck(val, ind, $input, inputelements)
    }, 0) // val: 알파벳, ind: 인덱스
    count++;

    if (count !== 6 && rightcount!== 5) {
        rightcount = 0;
        let boxtemplate = 
        `<div>
            <input class="input">
            <input class="input">
            <input class="input">
            <input class="input">
            <input class="input">
        </div>`;
        document.querySelector('body').insertAdjacentHTML('beforeend', boxtemplate);
        // beforeend: 요소 이전에 위치. 요소가 DOM 트리에 있고 부모 요소를 가지고 있을 때만 유효
    } else {
        alert(`정답은 ${answer}입니다`);
    }
})
    
function wordCheck(word, ind, $input, inputelements) {
    if (answerArray.includes(word)) {
        if (answerArray[ind] === inputelements[ind]) {
            $input[ind].style.background = 'green'
            rightcount++; // 정답 개수 count
        } else {
            $input[ind].style.background = 'yellow'
        }
    } else {
        $input[ind].style.background = 'lightgrey'
    }
    $input[ind].classList.remove('input'); // 기존 입력값 reset
    return rightcount;
}


// teopi
// leluf
// helly
// hello