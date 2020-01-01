# vue_todo

**Vue** 공부를 하자!

<p>뷰 데이터 속성 todoItems와 로컬 스토리지의 데이터 조회, 추가, 삭제를 모두 App.vue에서 관리</p>
<p>하위 컴포넌트들은 그 데이터를 표현하거나 데이터 조작에 대한 요청만 한다.</p>
<p>prop와 이벤트 전달 이용하기</p>
<p>최상위 컴포넌트 App.vue에 데이터 속성 todoItems를 선언하고 addTodo() 메서드 추가</p>

<h3>컴포넌트 간 이벤트 전달은 하위 컴포넌트에서 발생시킨 이벤트를 상위 컴포넌트에서 받아 상위 컴포넌트의 메서드를 동작시키는 것</h3>

<ol>
    <li>main.js에서 App.vue, Vue.js 라이브러리 로딩하여 애플리케이션 동작</li>
    <li>App.vue에서 파일을 불러와 웹페이지를 구성</li>
    <li>웹팩으로 빌드할 때 파일간의 관계에 따라 build.js 파일을 생성</li>
    <li>생성된 build.js는 애플리케이션 구조대로 파일(모듈)간의 순서가 알맞게 설정되어 있다.</li>
    <li>결론적으로 index.html파일에서 웹팩으로 빌드한 build.js 파일만 로딩하면 애플리케이션 로직을 구성하는 vue 파일, png 파일, 자바스크립트 라이브러리를 로딩한 것과 동일한 방식으로 동작</li>
</ol>

<hr>

**Vuex**
<p>무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리</p>
<dl>
    <dt>React의 Flux 패턴에서 기인함</dt>
</dl>

<ol>
    <li>MVC 패턴에서 발생하는 구조적 오류</li>
    <li>컴포넌트간 데이터 전달 명시</li>
    <li>여러개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제 </li>
</ol>

<ul>
    <li>state: 여러 컴포넌트에 공유되는 데이터 data()</li>
    <li>getters: 연산된 state 값을 접근하는 속성 computed</li>
    <li>mutations: state 값을 변경하는 로직 / 메서드 methods</li>
    <li>actions: 비동기 처리 로직을 선언하는 메서드 async methods</li>
</ul>

<h3>state는 왜 직접 변경하지 않고 mutation으로 변경하는가?</h3>
<ul>
    <li>여러개의 컴포넌트에서 state 값을 변경하는 경우, 어느 컴포넌트에서 해당 state를 변경했는지 추적하기 어렵다.</li>
    <li>특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한건지 확인이 어렵다.</li>
</ul>