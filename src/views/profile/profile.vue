<template>
  <div id="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <div class="login">
      <div class="icon-pic"></div>
      <div class="logInfo">
        登录/注册
        <div class="icon-phonecall"> 暂无绑定手机号</div>
      </div>
    </div>
    <div class="userInfo">
      <div class="cont">
        <span>0.00</span>
        <span>元</br>我的余额</span>
      </div>
      <div class="count">
        <span>0</span>
        <span>个</br>我的优惠</span>
      </div>
      <div class="counter">
        <span>0</span>
        <span>分</br>我的积分</span>
      </div>
    </div>
    <div class="center-part">
    <div><span class="icon-mail"></span> 我的消息</div>
    <div><span class="icon-shopping"></span> 积分商城</div>
    <div><span class="icon-idcard"></span> 会员卡</div>
    </div>
    <div class="middle-part">
    <div><span class="icon-cart"></span> 我的购物车</div>
    <div><span class="icon-store"></span> 下载购物APP</div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "profile",
  components: {
    NavBar,
  },
};
</script>

<style>
#profile {
  font-size: 16px;
}

.profile-navbar {
  background-color: var(--color-tint);
  color: #fff;
}

.login {
  padding: 20px;
  height: 120px;
  background-color: var(--color-tint);
  color: #fff;
}
.login .icon-pic {
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #ccc;
  color: #fff;
  line-height: 70px;
  text-align: center;
  font-size: 70px;
}

.login .logInfo {
  display: inline-block;
  margin-left: 5px;
  font-size: 20px;
  vertical-align: top;
  margin-top: 15px;
}

.login .logInfo .icon-phonecall {
  font-size: 16px;
  line-height: 25px;
}
.userInfo {
  display: flex;
  height: 100px;
  width: 100%;
}
.userInfo div {
  flex: 1;
  padding-top: 30px;
  border: 1px solid #eee;
  text-align: center;
  margin: 0 -1px 0 0;
}

.userInfo div span {
  /* display: block; */
  font-size: 16px;
  text-align: center;
  line-height: 22px;
}
.userInfo div span:first-child {
  font-size: 25px;
  color: var(--color-tint);
  font-weight: 700;
}

.center-part,
.middle-part {
  padding: 0 10px;
  border-top: 15px solid #eee;
  line-height: 50px;
  font-size: 16px;
}

.center-part div,
.middle-part div {
  height: 50px;
  border-bottom: 1px solid #eee;
}
</style>