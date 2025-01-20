# 🍚 SSAFY 12기 랜덤 밥조 생성기 🍚

## 0. 사용한 기술

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![github-actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## 1. 기능

- 매일 정해진 시간에 밥조를 편성하여, MM 메세지로 전송해주는 기능
  (Webhook, Github Action 사용)

- 매일 생성된 밥조를 log에 저장하고, 전날의 데이터를 기반으로 밥조를 생성해주는 기능
  (Github Action 사용)

## 2. 실행 순서

### 0️⃣ Repository fork

### 1️⃣ Github Secrets에 환경 변수 설정 

Repository settings -> "Secrets and variables" 이동

  - MM_WEBHOOK_URL : (MM에서 발급받은 채널의 WebHook url)
  - USER_EMAIL : git commit을 위한 email 설정
  - USER_NAME : git commit을 위한 user 설정
  - MEMBERS : 반 사람들 명단 (배열 형식으로 저장)

  ```javascript
  // (주의) 해당 문자열을 JSON으로 변환하여 사용하기 때문에 쌍 따옴표로 감싸주어야 함

  ["홍길동", "김철수", "김영희"]
  ```

### 2️⃣ Github Actions 설정
- `.github/workflows` 디렉토리에 있는 `deploy.yml` 파일을 수정하여, 원하는 시간에 스케줄을 설정합니다.

(서버 시간은 기본적으로 UTC로 되어있어서 시차를 생각해야 합니다.)

## 주의 사항
- 랜덤 숫자를 뽑아 배열을 섞어서 사용하므로 때때로 골고루 섞이지 않을 때가 있습니다!
- 로그를 저장하여 사용하는 로직을 추가했었는데, 중간에 수정을 한번 했어서 현재 잘 작동되는지는 모르겠습니다..ㅎ

> PS. 깔끔하게 작성하지 않았으며, 로직에 오류가 있을 수 있어 그대로 사용하기보다 참고하여 새로 작성하시는 것을 추천드립니다! 😊 (fork하여 그대로 사용하셔도 무방합니다.)

