import React, { FC } from "react";
import style from "./pageContainer.module.css";
import { Outlet, ScrollRestoration } from "react-router-dom";

const PageContainer: FC = () => {
  return (
    <div className={style.Container}>
      <div className={style.ContentContainer}>
        <div className={style.Title}>
          <span>Т.Моисеев тестовое задание</span>
        </div>
        <div className={style.ChildrenContainer}>
          <Outlet />
        </div>
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </div>
  );
};

export default PageContainer;
