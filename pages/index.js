import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";
const NoSSRComponent = dynamic(() => import("../components/bpmn"), {
  ssr: false,
});
const Home = () => {
 
  return (
    <div className={styles.container}>
    {typeof window !== "undefined" && (
            <>
                {typeof window !== 'undefined' && <NoSSRComponent />}
            </>
          )}
    </div>
  )
}

export default Home
