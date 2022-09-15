import React from "react";
import "../components/header.css";
import pic from '../img/head2.png'


const Headerr = () => {
  return (
    <>
      <div class="header">
        <img
          src="http://net0562600.net//afiles/p945/pic/t2/2021/03/14/13/35425944349473593.png"
          style={{ width: "160px", cursor: "pointer" }}
          class="logo"
        />

        <div class="header-right ">
          <button>登录</button>
          <button>免费开户</button>
        </div>
        <div className="img" style={{textAlign:'center' , alignItems:'center', display:'flex' ,height:'25px', width:'10px' ,flexDirection:'row'}}>
          <img src={pic}/>
        </div>
        


      </div>
      <div class="header2">
        <span className="activee">首页</span>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
      </div>
    </>
  );
};

export default Headerr;
