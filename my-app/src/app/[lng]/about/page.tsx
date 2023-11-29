"use client";
import "../globals.css";
import React, { FC, Fragment } from "react";
import Link from "next/link";

const AboutPage: FC = () => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-lg">關於我們</h1>
        <p className="my-5">
          我們是一群熱愛魔物獵人的玩家，因為喜愛所以熱於分享
          <br />
          透過開發這個小服務希望可以讓更多玩家可以熱於其中
        </p>
        <p className="my-5">
          如果有合作需求，歡迎寄信到 :{" "}
          <Link href="mailto:josh@mhnow.cc">josh@mhnow.cc</Link>
        </p>
        <p className="my-5">
          <Link
            href={"https://lin.ee/g3FujGH"}
            target="_blank"
            className={`monster-tab-mobile flex items-center gap-2 text-lg`}
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="加入好友"
              height="24"
            ></img>
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default AboutPage;