"use client"
import Link from 'next/link';
import styles from '../../../styles/monitorSintomas.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Monitorar() {
  const symptoms = [
    'Vermelhidão',
    'Coceira',
    'Pus',
    'Fadiga',
    'Dor Muscular',
    'Olhos Secos',
    'Inchaço',
  ];

  const intensities = ['Nada', 'Leve', 'Mediana', 'Intensa', 'Muito Intensa'];

  const [selectedIntensities, setSelectedIntensities] = useState({});

  const handleIntensitySelection = (symptomIndex, intensityIndex) => {
    setSelectedIntensities((prevSelected) => ({
      ...prevSelected,
      [symptomIndex]: intensityIndex + 1,
    }));
  };

  const areAllIntensitiesSelected = () => {
    for (const symptomIndex in symptoms) {
      if (!selectedIntensities.hasOwnProperty(symptomIndex)) {
        return false;
      }
    }
    return true;
  };

  const handleSaveSymptoms = () => {
    console.log('Sintomas salvos:', selectedIntensities);
  };

  return (
    <div className={styles.monitorContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.backButton}>
              <Link href="/" className={styles.backButton}>Voltar</Link>
            </div>
            <div className={styles.logo}>
              <Image src="/caminho/do/seu/logo.png" alt="Logo" width={50} height={50} />
            </div>
          </div>
      </div>
      <div className={styles.title}>
        <h1>Anote os Sintomas</h1>
      </div>
      <div className={styles.symptomsContainer}>
        {symptoms.map((symptom, symptomIndex) => (
          <div key={symptomIndex} className={styles.symptom}>
            <h2>{symptom}</h2>
            <div className={styles.intensitiesContainer}>
              {intensities.map((intensity, intensityIndex) => (
                <button
                  key={intensityIndex}
                  className={`${styles.intensityItem} ${selectedIntensities[symptomIndex] === intensityIndex + 1 ? styles.selected : ''
                    }`}
                  onClick={() => handleIntensitySelection(symptomIndex, intensityIndex)}
                >
                  {intensity}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.centeredButtonContainer}>
        <button className={styles.saveButton} onClick={handleSaveSymptoms} disabled={!areAllIntensitiesSelected()}>
          Salvar Sintomas
        </button>
      </div>
    </div>
  );
}
