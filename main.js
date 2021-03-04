(function(window, document){
    'use strict'; //이 범위 안에는 자바스크립트 문법으로 작성.

    const $toggles = document.querySelectorAll('.toggle'); //NodeList유사배열
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    //브라우저 크기 조절
    window.addEventListener('resize',function(){
        if(window.innerWidth > 1024){
            offElements();
        }
    });

    function toggleElements(){
        //반복(유사배열 $toggles을 연결)
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');//class선택자를 .on을 통해 토글 기능적용
        });
    }

    function offElements(){
         [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }

})(window, document)
