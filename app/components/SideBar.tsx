"use client";

import React from "react";
import styles from "../styles/SideBar.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";

const links = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "/settings" },
  { name: "Something", href: "/something" },
];

const SideBar = () => {
  return (
    <Row>
      <Col>
        <h3 className={styles.header}>DiligenceDynamics</h3>
        {links.map((link) => {
          return (
            <div
              key={link.name + "-container"}
              className={styles.sidebaritemcontainer}
            >
              <Link key={link.name} href={link.href}>
                <p className={styles.sidebaritem}>{link.name}</p>
              </Link>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default SideBar;
