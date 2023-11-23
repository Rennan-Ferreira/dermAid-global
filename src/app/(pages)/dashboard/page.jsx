"use client"
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styles from '../../../styles/dashboard.module.css';
import Link from 'next/link';

export default function Dashboard(){
  const appointmentsData = [
    { region: 'Osasco', office: 'Consultório Saúde Vital', date: '01- 12-2023', time: '16:00' },
    { region: 'Barueri', office: 'Policlínica Bem-Estar', date: '02-12-2023', time: '14:30' },
    { region: 'Osasco', office: 'Centro Médico Integrado', date: '05-12-2023-12-03', time: '09:00' },
    { region: 'Guarulhos', office: 'Centro de Saúde Excelência', date: '16-12-2023', time: '16:00' },
  ];


  const symptomsData = {
    labels: ['Vermelhidão', 'Coceira', 'Pus', 'Fadiga', 'Dor Muscular', 'Olhos Secos', 'Inchaço'],
    datasets: [
      {
        label: 'Intensidade dos Sintomas (23-11-2023)',
        backgroundColor: '#C9184A',
        borderColor: '#C9184A',
        borderWidth: 1,
        hoverBackgroundColor: '#FDEADC',
        hoverBorderColor: '#FDEADC',
        data: [5, 4, 3, 2, 1, 4, 3], 
      },
      {
        label: 'Intensidade dos Sintomas (24-11-2023)',
        backgroundColor: '#FF5733', 
        borderColor: '#FF5733', 
        borderWidth: 1,
        hoverBackgroundColor: '#FFC300',
        hoverBorderColor: '#FFC300', 
        data: [3, 2, 4, 1, 5, 3, 2], 
      },
    ],
  };

  return (
   
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.backButton}>
      <Link href="/" >&#8592;</Link>
      </div>
        <h1>Consultas e Sintomas</h1>
      </header>
      <section className={styles.content}>
        <div className={styles.appointments}>
          <h2>Consultas Agendadas</h2>
          {appointmentsData.map((appointment, index) => (
            <div key={index} className={styles.appointment}>
              <p>Região: {appointment.region}</p>
              <p>Consultório: {appointment.office}</p>
              <p>Data: {appointment.date}</p>
              <p>Hora: {appointment.time}</p>
            </div>
          ))}
        </div>
        <div className={styles.symptoms}>
          <h2>Sintomas</h2>
          <p>23-11-2023</p>
          <Bar
            data={symptomsData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  max: 5, 
                },
              },
            }}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>DermAId</p>
      </footer>
     </div>
   
  );
};
