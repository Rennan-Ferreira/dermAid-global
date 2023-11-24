"use client"
import Link from 'next/link';
import styles from '../../../styles/monitorSintomas.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Monitorar() {
  const router = useRouter();
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
    alert('Sintomas salvos-', selectedIntensities);
    router.push('/');
    
  };

  return (
    <div className={styles.container}>
    <div className={styles.monitorContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.backButton}>
              <Link href="/" className={styles.backButton}>&#8592;</Link>
            </div>
            <div className={styles.logo}>
              <Image src="/img/derm-logo.png" alt="Logo" width={80} height={80} />
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
      <footer className={styles.footer}>
      <p>DermAId</p>
    </footer>
  </div>
  );
}
