# 오늘의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="btn-group">
  <button
    class="lg-hidden gnb-icon-btn is-search"
    type=" button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a href="/" aria-label="장바구니 페이지로 이동" class="gnb-icon-btn is-cart">
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="btn-group">
  <button
    class="lg-hidden gnb-icon-btn is-search"
    type=" button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a href="/" class="sm-hidden gnb-icon-btn" aria-label="북마크 페이지로 이동">
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="sm-hidden gnb-icon-btn"
    aria-label=" 내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a href="/" aria-label="장바구니 페이지로 이동" class="gnb-icon-btn is-cart">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="sm-hidden gnb-avatar-btn"
    type="button"
    aria-label="마이 메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="assets/images/img-user-01.jpg" alt="유저 프로필 사진" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="assets/images/img-user-01.jpg" alt="user-profile" />
    </div>

    <strong class="username">사용자</strong>
  </a>
</div>
```

- 로그인을 한 경우

```html
<div class="sidebar-auth">
  <a href="/" class="btn-40 btn-primary btn-outlined">로그인</a>
  <a href="/" class="btn-40 btn-primary">회원가입</a>
</div>
```
