"use client";
import React from "react";
import styles from "./ModernHero.module.css";
import { CheckCircle, BarChart, HardHat } from "lucide-react";
import Link from "next/link"; // Import Link

// Mapping icons to key points
const icons = [
  <BarChart size={24} />,
  <CheckCircle size={24} />,
  <HardHat size={24} />,
];

const ModernHero = ({ content }) => {
  if (!content) {
    return null; // Or a fallback UI
  }
  const { title, slogan, description, keyPoints, cta1, cta2, cta1_link, cta2_link } = content;

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.slogan}>{slogan}</h2>
      <p className={styles.description}>{description}</p>

      <ul className={styles.keyPoints}>
        {keyPoints.map((point, index) => (
          <li key={index} className={styles.keyPoint}>
            {icons[index]}
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className={styles.ctaGroup}>
        <Link href={cta1_link || "#"} passHref>
        <button className={styles.cta}>{cta1}</button>
        </Link>
        <Link href={cta2_link || "#"} passHref>
        <button className={styles.ctaSecondary}>{cta2}</button>
        </Link>
      </div>
    </div>
  );
};

export default ModernHero; 