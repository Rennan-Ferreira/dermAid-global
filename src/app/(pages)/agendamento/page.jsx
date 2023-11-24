"use client";
import Link from 'next/link';
import styles from '../../../styles/agendamento.module.css';
import { useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';

export default function Agendamento() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedConsultorio, setSelectedConsultorio] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [disabledDates, setDisabledDates] = useState(['2023-12-03', '2023-12-08', '2023-11-08', '2023-11-25', '2023-12-20']);
  const [isDateSelectable, setIsDateSelectable] = useState(true);
  const [availableTimes, setAvailableTimes] = useState([]);

  const router = useRouter();

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedConsultorio('');
  };

  const handleConsultorioChange = (selectedOption) => {
    setSelectedConsultorio(selectedOption.value);
    setSelectedDate('');
    setAvailableTimes([]);
  };

  const loadConsultorios = (regiao) => {
    switch (regiao) {
      case 'osasco':
        return [
          { value: 'Consultório Saúde Vital', label: 'Dr. Silva - Rua das Acácias, 123' },
          { value: 'Centro Médico Integrado', label: 'Dra. Souza - Avenida das Rosas, 456' },
        ];
      case 'barueri':
        return [
          { value: 'Policlínica Bem-Estar', label: 'Dr. Santos - Rua dos Girassóis, 789' },
          { value: 'Clínica Médica Premium', label: 'Dra. Lima - Avenida das Palmeiras, 101' },
        ];
      case 'guarulhos':
        return [
          { value: 'Centro de Saúde Excelência', label: 'Dr. Oliveira - Rua das Magnólias, 111' },
          { value: 'Policlínica Moderna', label: 'Dra. Pereira - Avenida dos Jacarandás, 222' },
        ];
      default:
        return [];
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const isAvailable = !disabledDates.includes(date.toISOString().split('T')[0]);
    setIsDateSelectable(isAvailable);
    setAvailableTimes(isAvailable ? ['09:00', '14:30', '16:00'] : []);
  };

  const isDayAvailable = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return !disabledDates.includes(formattedDate);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      return disabledDates.includes(formattedDate) ? (
        <div className={styles.unavailableDayContent}></div>
      ) : null;
    }
    return null;
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleScheduleAppointment = () => {
    if (selectedDate && selectedTime && selectedConsultorio) {
        const confirmationMessage = `Você está prestes a agendar uma consulta em ${selectedConsultorio} na região de ${selectedRegion}, no dia ${selectedDate.toISOString().split('T')[0]} às ${selectedTime}. Confirma?`;
        const isConfirmed = window.confirm(confirmationMessage);
    
        if (isConfirmed) {
            router.push('/');
        }
      } else {
        alert('Por favor, selecione uma data, horário e consultório válidos antes de agendar.');
      }
    };

  return (
    <div>
      <div className={styles.header}>
        <Link href="/">&#8592;</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Agende sua consulta com o médico mais próximo de você</h1>
        </div>
        <div className={styles.regionContainer}>
          <label htmlFor="region">Região:</label>
          <select id="region" value={selectedRegion} onChange={handleRegionChange}>
            <option value="">Selecione...</option>
            <option value="osasco">Osasco</option>
            <option value="barueri">Barueri</option>
            <option value="guarulhos">Guarulhos</option>
          </select>
        </div>
        <div className={styles.regionContainer}>
          <label htmlFor="consultorio">Consultório:</label>
          <Select
            id="consultorio"
            options={loadConsultorios(selectedRegion)}
            value={{ value: selectedConsultorio, label: selectedConsultorio }}
            onChange={handleConsultorioChange}
            isDisabled={!selectedRegion}
          />
        </div>
        {selectedConsultorio && (
          <div className={styles.calendarContainer}>
            <h3>Calendário de Disponibilidade</h3>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileClassName={({ date }) =>
                isDayAvailable(date) ? styles.availableDay : styles.unavailableDay
              }
              tileContent={tileContent}
              select={isDateSelectable}
            />
            {isDateSelectable && selectedDate && availableTimes.length > 0 && (
              <div className={styles.timeContainer}>
                <h3>Horários Disponíveis</h3>
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    className={`${styles.timeButton} ${selectedTime === time ? styles.selectedTime : ''}`}
                    onClick={() => handleSelectTime(time)}
                  >
                    {time}
                  </button>
                ))}
                {selectedTime && (
                  <div className={styles.scheduleButtonContainer}>
                    <button className={styles.scheduleButton} onClick={handleScheduleAppointment}>
                      Agendar Consulta
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {!isDateSelectable && (
          <p className={styles.warningMessage}>Selecione uma data válida para visualizar os horários disponíveis.</p>
        )}
       
      </div>
      <footer className={styles.footer}>
          <p>DermAId</p>
        </footer>
    </div>
  );
}
