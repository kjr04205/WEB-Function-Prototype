// 전송 이벤트
document.querySelector('#image-form').addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    document.querySelector('#image').src = '';
    // 입력 텍스트
    const text = document.querySelector('#text').value;
    // 입력이 없는 경우
    if(text === '') return;

    generateImageRequest(text);
}

// 이미지 생성 요청 함수
async function generateImageRequest(text){
    const response = await fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: text})
    })
    if(!response.ok) {
        throw new Error('이미지 생성 오류');
    }
    const data = await response.json();
    
    const imageUrl = data.data;
    document.querySelector('#image').src = imageUrl;
}