"use client";

import Image from "next/image";
import styles from "./page.module.css";
import picy from "../app/assets/picy.png";
import logo from "../app/assets/ACTCOOL_TEXT.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.page}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <motion.div
            className={styles.logoTitleContainer}
            initial={{ opacity: 1, y: 8, rotate: 0 }}
            animate={{ opacity: 1, y: [8, 0], rotate: [0, -0.5, 0] }}
            transition={{
              duration: 7, // Adjusted for a more subtle floating effect
              ease: "easeInOut",
              repeat: Infinity, // Makes it appear to float continuously
              repeatType: "reverse", // Reverses the animation for a smooth floating effect
            }}
          >
            <Image
              className={styles.logo}
              src={picy}
              alt='Logo'
              width={135}
              height={135}
            />
            <h1 className={styles.brandTitle}>ACTCOOL</h1>
          </motion.div>
          <h3 className={styles.brandSubTitle}>
            Creative content, social media, <br /> and management for
            independent artists.
          </h3>
          <motion.button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "200px", // Slightly rounded corners
              margin: "25px 5px 5px 5px", // Set top margin to 20px and keep other margins as 5px
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            whileHover={{
              backgroundColor: "black", // Darker shade on hover
              scale: 1.03, // Slightly scale up on hover
            }}
            whileTap={{
              scale: 0.95, // Slightly scale down on tap
            }}
            onClick={() => (window.location.href = "mailto:hello@actcool.co")}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </div>
  );
}
