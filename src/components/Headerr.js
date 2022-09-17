import React, { useState } from "react";
import "../components/header.css";
import pic from "../img/head2.png";
import logo from "../img/china.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Headerr = () => {
  
  
  const [sidebar, setsidebar] = useState(false);
  return (
    
    <>
      <div class="header">
        <img
          src={logo}
          style={{ width: "140px", cursor: "pointer" }}
          className="logo"
        />

        <div class="header-right">
          <button>登录</button>
          <button>免费开户</button>
        </div>
        <div
          className="img"
          style={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            height: "25px",
            width: "10px",
            flexDirection: "row",
          }}
        >
          <img src={pic} />
        </div>
      </div>
     
        <div class="header2 d-none d-sm-block d-lg-block d-md-block">
          <span className="activee">首页</span>
          <span>首页</span>
          <span>首页</span>
          <span>首页</span>
          <span>首页</span>
          <span>首页</span>
        </div>
   

      <div className="d-block d-sm-none">
        <IconButton onClick={() => setsidebar(true)}>
          {" "}
          <MenuIcon />
        </IconButton>

        <Drawer open={sidebar} onClose={() => setsidebar(false)}>
          <List  sx={{backgroundColor:'red', color:'white'}}>
            <ListItem button divider >
              <ListItemIcon >
                <ListItemText sx={{ p: "2px 4rem" }}>首页</ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem button divider>
              <ListItemIcon>
                <ListItemText sx={{ p: "2px 4rem" }}>首页</ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem button divider>
              <ListItemIcon>
                <ListItemText sx={{ p: "2px 4rem" }}>首页</ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem button divider>
              <ListItemIcon>
                <ListItemText sx={{ p: "2px 4rem" , }}>首页</ListItemText>
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Headerr;
