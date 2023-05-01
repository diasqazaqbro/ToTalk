import React from "react";
import {
    FacebookFilled,
    ChromeFilled,
    BehanceSquareFilled,
    TwitterSquareFilled,
    InstagramFilled,
    YoutubeFilled,
    GithubFilled,
    ScheduleFilled,
  } from "@ant-design/icons";
import { Col } from "antd";

const ProfileLink = (props) => {
  return (
    <Col span={8}>
      <div className="profile__link">
        <FacebookFilled style={{ fontSize: "25px" }} />
        <span> Facebook:</span>
        <span>{props.contacts.facebook} </span>
      </div>
      <div className="profile__link">
        <ChromeFilled style={{ fontSize: "25px" }} />
        <span> Chrome:</span>
        <span>{props.contacts.website} </span>
      </div>
      <div className="profile__link">
        <BehanceSquareFilled style={{ fontSize: "25px" }} />
        <span> VK:</span>
        <span>{props.contacts.vk} </span>
      </div>
      <div className="profile__link">
        <TwitterSquareFilled style={{ fontSize: "25px" }} />
        <span> Twitter:</span>
        <span>{props.contacts.twitter} </span>
      </div>
      <div className="profile__link">
        <InstagramFilled style={{ fontSize: "25px" }} />
        <span> Instagram:</span>
        <span>{props.contacts.instagram} </span>
      </div>
      <div className="profile__link">
        <YoutubeFilled style={{ fontSize: "25px" }} />
        <span> Youtube:</span>
        <span>{props.contacts.youtube} </span>
      </div>
      <div className="profile__link">
        <GithubFilled style={{ fontSize: "25px" }} />
        <span> Github:</span>
        <span>{props.contacts.github} </span>
      </div>
      <div className="profile__link">
        <ScheduleFilled style={{ fontSize: "25px" }} />
        <span> ScheduleFilled</span>
        <span>{props.contacts.mainLink} </span>
      </div>
    </Col>
  );
};

export default ProfileLink