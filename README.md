# wanted-pre-onboarding-challenge-fe-1

## 🎥 설치 및 실행방법
클론을 받은 후 서버와 클라이언트 모두 실행시켜줍니다.

    1. server => https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api.git
       yarn install
       yarn start
    2. client => repository clone
       yarn install
       yarn start

## 📺 화면 미리보기
### 🛎️ 회원가입
https://user-images.githubusercontent.com/73281190/213955424-c2d4a66a-9486-4651-917d-f254f4184b72.mov
- 이메일 조건 : 최소 @, . 포함
- 비밀번호 조건 : 8자 이상 입력 (안전도 낮음, 보통, 높음, 매우높음 구현 - 숫자, 영문 소문자, 영문 대문자, 특수문자 포함 여부)
- 이름 : 숫자, 특수문자 입력 불가

### 🔑 로그인
https://user-images.githubusercontent.com/73281190/213955429-07b7f489-e887-4e86-8f66-3f445b39339d.mov
- 이메일, 비밀번호 유효성 확인
- 이메밀, 비밀번호가 맞지 않을 경우 로그인 실패

### 📌 TodoList
https://user-images.githubusercontent.com/73281190/213955433-f773c248-e3e7-4c63-ac22-ad5a22dedbad.mov
- TodoList 추가, 수정, 제거 구현
- 클릭 시 상세 내용 확인 가능

### 📴 로그아웃
https://user-images.githubusercontent.com/73281190/213955444-a2b719b2-dfd1-4a6b-8b5d-deb0a6795179.mov


## 📚 구현 요구 사항 목록
### 🔐 Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발한다. 이메일, 비밀번호 input, 제출 button을 갖도록 구성한다.
  - [X] 이메일과 비밀번호의 유효성을 확인한다.
  - [X] 이메일 조건 : 최소 @, . 포함
  - [X] 비밀번호 조건 : 8자 이상 입력
  - [X] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 한다.
  - [X] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시킨다.
  - [X] 응답으로 받은 토큰은 로컬 스토리지에 저장한다.
  - [X] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시킨다.
  - [X] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시킨다.

### 🧾 Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현한다.
  - [X] 목록 / 상세 영역으로 나누어 구현한다.
  - [X] Todo 목록을 볼 수 있다.
  - [X] Todo 추가 버튼을 클릭하면 할 일이 추가된다.
  - [X] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있다.
  - [X] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있다.
  - [X] 새로고침을 했을 때 현재 상태가 유지되어야 한다.
  - [X] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현한다.
  - [X] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야한다.

### ☑️ 과제 참고 사항

  1. 로컬 서버를 실행했을 때 생성되는 db/db.json이 DB 역할을 한다. 해당 파일을 삭제하면 DB는 초기화 된다.
  2. 로그인 / 회원 가입 기능은 유저를 DB에 추가하고 JWT 토큰을 응답으로 돌려줄 뿐, 실제 유저별로 Todo 목록을 관계 지어 관리하지는 않는다. (모든 유저가 하나의 Todo를 가진다)
  3. 로그아웃은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 간단히 구현한다.


## 🛠️사용 기술
### React
    1. 컴포넌트 기반으로 재사용성을 고려하여 코드를 개발할 수 있다.
    2. 선언형 구조를 나타내기 쉽다.
### TypeScript
    1. 컴파일 단계에서 오류 확인이 가능하다.
    2. 타입 추론을 통해 코드 생산성, 가독성을 높일 수 있다.
### React Query
    1. 'SWR(Stale-While-Revalidate)' 전략을 통해 응답속도를 최적화 한다.
    2. 서버 상태와 프론트 상태를 분리해서 관리할 수 있기 때문에 관심사 분리에 유리하다.
### Styled-Component
    1. 'CSS IN JS' 방식으로 원하는 스타일을 적재적소에 추가할 수 있다.
### Axios, Recoil
    1. Axios: API요청 및 응답을 간결하고 쉽게 사용할 수 있다.
    2. Recoil: atom이라는 상태를 store 없이 전역으로 관리할 수 있다. atom은 구독, 옵저버와 같은 개념을 생각할 필요없이 hook을 사용하듯이 사용할 수 있다.
    
## 🗂️ 폴더 구조
<img width="881" alt="스크린샷 2023-01-23 오전 8 46 33" src="https://user-images.githubusercontent.com/73281190/213950382-c9814438-0460-4b65-8e82-cd9f27100421.png">

|폴더명|설명|
|---|---|
|components|route 페이지를 구성하는 컴포넌트. route별, 공통 컴포넌트로 구성|
|api|백엔드 서버와 RestAPI통신을 위한 Axios 코드로 구성|
|hooks|커스텀 hook으로 구성|
|pages|route 페이지로 구성. 페이지 내부 컴포넌트는 components폴더에 위치|
|style|전역에서 사용하는 css구성|
|utils|api, 상태관리 등 전역적으로 사용하는 함수 구성|





