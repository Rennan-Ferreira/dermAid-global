"use client";
import { useState } from 'react';
import styles from '../../../styles/perguntas.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Perguntas() {
  const navigate = useRouter();
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);

  const [perguntas, setPerguntas] = useState({
    1: { id: 1, texto: 'Você tem sentido uma fadiga nas últimas semanas?', resposta: '' },
    2: { id: 2, texto: 'Sentiu dor nas articulações ou músculos?', resposta: '' },
    3: { id: 3, texto: 'Observou erupções cutâneas na sua pele ultimamente?', resposta: '' },
    4: { id: 4, texto: 'Você teve episódios de febre sem causa?', resposta: '' },
    5: { id: 5, texto: 'A sua pele fica sensível à luz solar?', resposta: '' },
    6: { id: 6, texto: 'Notou algum inchaço em suas articulações ou outras partes do corpo?', resposta: '' },
    7: { id: 7, texto: 'Você enfrentou problemas renais recentemente?', resposta: '' },
    8: { id: 8, texto: 'Teve dificuldades respiratórias ou outros problemas pulmonares?', resposta: '' },
    9: { id: 9, texto: 'Houve complicações cardíacas recentes em sua saúde?', resposta: '' },
    10: { id: 10, texto: 'Você teve algum distúrbio sanguíneo diagnosticado?', resposta: '' },
    11: { id: 11, texto: 'Você tem notado vermelhidão persistente em sua pele?', resposta: '' },
    12: { id: 12, texto: 'Há vasos sanguíneos visíveis em áreas específicas do rosto?', resposta: '' },
    13: { id: 13, texto: 'Desenvolveu pápulas ou pústulas na pele do rosto recentemente?', resposta: '' },
    14: { id: 14, texto: 'Sente uma sensação de queimação ou ardência na pele do rosto?', resposta: '' },
    15: { id: 15, texto: 'Seus olhos têm estado secos e irritados?', resposta: '' },
    16: { id: 16, texto: 'Notou inchaço na sua pele, especialmente no rosto?', resposta: '' },
    17: { id: 17, texto: 'Houve espessamento da pele em algumas áreas do rosto?', resposta: '' },
    18: { id: 18, texto: 'Consegue identificar alguns gatilhos que agravam esses sintomas?', resposta: '' },
    19: { id: 19, texto: 'A vermelhidão piora com a exposição ao sol ou temperaturas elevadas?', resposta: '' },
    20: { id: 20, texto: 'Os sintomas da pele aumentam após o consumo de certos alimentos ou bebidas?', resposta: '' },
  });

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleRespostaChange = (perguntaId, resposta) => {
    setPerguntas((prevPerguntas) => ({
      ...prevPerguntas,
      [perguntaId]: {
        ...prevPerguntas[perguntaId],
        resposta,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      const cpfValue = parseInt(cpf, 10);
  
      const respostas = Object.values(perguntas).map((pergunta) => ({
        cpf: cpfValue,
        textoPergunta: pergunta.texto,
        resposta: pergunta.resposta,
      }));
  
      const formData1 = {
        cpf: cpfValue,
        textoPergunta: perguntas[1].texto,
        resposta: perguntas[1].resposta,
      };
  
      const formData2 = {
        cpf: cpfValue,
        textoPergunta: perguntas[2].texto,
        resposta: perguntas[2].resposta,
      };

      const formData3 = {
        cpf: cpfValue,
        textoPergunta: perguntas[3].texto,
        resposta: perguntas[3].resposta,
      };

      const formData4 = {
        cpf: cpfValue,
        textoPergunta: perguntas[4].texto,
        resposta: perguntas[4].resposta,
      };

      const formData5 = {
        cpf: cpfValue,
        textoPergunta: perguntas[5].texto,
        resposta: perguntas[5].resposta,
      };

      const formData6 = {
        cpf: cpfValue,
        textoPergunta: perguntas[6].texto,
        resposta: perguntas[6].resposta,
      };

      const formData7 = {
        cpf: cpfValue,
        textoPergunta: perguntas[7].texto,
        resposta: perguntas[7].resposta,
      };

      const formData8 = {
        cpf: cpfValue,
        textoPergunta: perguntas[8].texto,
        resposta: perguntas[8].resposta,
      };

      const formData9 = {
        cpf: cpfValue,
        textoPergunta: perguntas[9].texto,
        resposta: perguntas[9].resposta,
      };

      const formData10 = {
        cpf: cpfValue,
        textoPergunta: perguntas[10].texto,
        resposta: perguntas[10].resposta,
      };

      const formData11 = {
        cpf: cpfValue,
        textoPergunta: perguntas[11].texto,
        resposta: perguntas[11].resposta,
      };

      const formData12 = {
        cpf: cpfValue,
        textoPergunta: perguntas[12].texto,
        resposta: perguntas[12].resposta,
      };

      const formData13 = {
        cpf: cpfValue,
        textoPergunta: perguntas[13].texto,
        resposta: perguntas[13].resposta,
      };

      const formData14 = {
        cpf: cpfValue,
        textoPergunta: perguntas[14].texto,
        resposta: perguntas[14].resposta,
      };

      const formData15 = {
        cpf: cpfValue,
        textoPergunta: perguntas[15].texto,
        resposta: perguntas[15].resposta,
      };

      const formData16 = {
        cpf: cpfValue,
        textoPergunta: perguntas[16].texto,
        resposta: perguntas[16].resposta,
      };

      const formData17 = {
        cpf: cpfValue,
        textoPergunta: perguntas[17].texto,
        resposta: perguntas[17].resposta,
      };

      const formData18 = {
        cpf: cpfValue,
        textoPergunta: perguntas[18].texto,
        resposta: perguntas[18].resposta,
      };

      const formData19 = {
        cpf: cpfValue,
        textoPergunta: perguntas[19].texto,
        resposta: perguntas[19].resposta,
      };

      const formData20 = {
        cpf: cpfValue,
        textoPergunta: perguntas[20].texto,
        resposta: perguntas[20].resposta,
      };
  
      const apiResponse1 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData1),
      });
  
      const apiResponse2 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData2),
      });

      const apiResponse3 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData3),
      });

      const apiResponse4 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData4),
      });
  
      const apiResponse5 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData5),
      });

      const apiResponse6 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData6),
      });

      const apiResponse7 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData7),
      });

      const apiResponse8 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData8),
      });

      const apiResponse9 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData9),
      });

      const apiResponse10 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData10),
      });

      const apiResponse11 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData11),
      });

      const apiResponse12 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData12),
      });

      const apiResponse13 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData13),
      });

      const apiResponse14 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData14),
      });

      const apiResponse15 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData15),
      });

      const apiResponse16 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData16),
      });

      const apiResponse17 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData17),
      });

      const apiResponse18 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData18),
      });

      const apiResponse19 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData19),
      });

      const apiResponse20 = await fetch('http://localhost:8080/ProjetoDermAId/rest/Perguntas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData20),
      });


      if (apiResponse1.ok) {
        console.log('Requisição 1 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 1:', apiResponse1.statusText);
        console.log('Corpo da resposta 1:', await apiResponse1.text());
  
        try {
          const errorDetails = await apiResponse1.json();
          console.error('Detalhes do erro 1:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 1:', jsonError.message);
        }
      }
  
      if (apiResponse2.ok) {
        console.log('Requisição 2 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 2:', apiResponse2.statusText);
        console.log('Corpo da resposta 2:', await apiResponse2.text());
  
        try {
          const errorDetails = await apiResponse2.json();
          console.error('Detalhes do erro 2:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 2:', jsonError.message);
        }
      }

      if (apiResponse3.ok) {
        console.log('Requisição 3 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 3:', apiResponse3.statusText);
        console.log('Corpo da resposta 3:', await apiResponse3.text());
  
        try {
          const errorDetails = await apiResponse3.json();
          console.error('Detalhes do erro 3:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 3:', jsonError.message);
        }
      }

      if (apiResponse4.ok) {
        console.log('Requisição 4 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 4:', apiResponse4.statusText);
        console.log('Corpo da resposta 4:', await apiResponse4.text());
  
        try {
          const errorDetails = await apiResponse4.json();
          console.error('Detalhes do erro 4:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 4:', jsonError.message);
        }
      }

      if (apiResponse5.ok) {
        console.log('Requisição 5 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 5:', apiResponse5.statusText);
        console.log('Corpo da resposta 5:', await apiResponse5.text());
  
        try {
          const errorDetails = await apiResponse5.json();
          console.error('Detalhes do erro 5:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 5:', jsonError.message);
        }
      }
  
      if (apiResponse6.ok) {
        console.log('Requisição 6 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 6:', apiResponse6.statusText);
        console.log('Corpo da resposta 6:', await apiResponse6.text());
  
        try {
          const errorDetails = await apiResponse6.json();
          console.error('Detalhes do erro 6:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 6:', jsonError.message);
        }
      }

      if (apiResponse7.ok) {
        console.log('Requisição 7 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 7:', apiResponse7.statusText);
        console.log('Corpo da resposta 7:', await apiResponse7.text());
  
        try {
          const errorDetails = await apiResponse7.json();
          console.error('Detalhes do erro 7:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 7:', jsonError.message);
        }
      }

      if (apiResponse8.ok) {
        console.log('Requisição 8 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 8:', apiResponse8.statusText);
        console.log('Corpo da resposta 8:', await apiResponse8.text());
  
        try {
          const errorDetails = await apiResponse8.json();
          console.error('Detalhes do erro 8:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 8:', jsonError.message);
        }
      }

      if (apiResponse9.ok) {
        console.log('Requisição 9 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 9:', apiResponse9.statusText);
        console.log('Corpo da resposta 9:', await apiResponse9.text());
  
        try {
          const errorDetails = await apiResponse9.json();
          console.error('Detalhes do erro 9:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 9:', jsonError.message);
        }
      }

      if (apiResponse10.ok) {
        console.log('Requisição 10 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 10:', apiResponse10.statusText);
        console.log('Corpo da resposta 10:', await apiResponse10.text());
        try {
          const errorDetails = await apiResponse10.json();
          console.error('Detalhes do erro 10:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 10:', jsonError.message);
        }
      }

      if (apiResponse11.ok) {
        console.log('Requisição 11 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 11:', apiResponse11.statusText);
        console.log('Corpo da resposta 11:', await apiResponse11.text());
        try {
          const errorDetails = await apiResponse11.json();
          console.error('Detalhes do erro 11:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 11:', jsonError.message);
        }
      }

      if (apiResponse12.ok) {
        console.log('Requisição 12 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 12:', apiResponse12.statusText);
        console.log('Corpo da resposta 12:', await apiResponse12.text());
        try {
          const errorDetails = await apiResponse12.json();
          console.error('Detalhes do erro 12:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 12:', jsonError.message);
        }
      }

      if (apiResponse13.ok) {
        console.log('Requisição 13 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 13:', apiResponse13.statusText);
        console.log('Corpo da resposta 13:', await apiResponse13.text());
        try {
          const errorDetails = await apiResponse13.json();
          console.error('Detalhes do erro 13:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 13:', jsonError.message);
        }
      }
      
      if (apiResponse14.ok) {
        console.log('Requisição 14 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 14:', apiResponse14.statusText);
        console.log('Corpo da resposta 14:', await apiResponse14.text());
        try {
          const errorDetails = await apiResponse14.json();
          console.error('Detalhes do erro 14:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 14:', jsonError.message);
        }
      }

      if (apiResponse15.ok) {
        console.log('Requisição 15 enviada com sucesso!');
        navigate.push('/');
      } else {
        console.error('Erro na chamada da API Java 15:', apiResponse15.statusText);
        console.log('Corpo da resposta 15:', await apiResponse15.text());
        try {
          const errorDetails = await apiResponse15.json();
          console.error('Detalhes do erro 15:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 15:', jsonError.message);
        }
      }

      if (apiResponse16.ok) {
        console.log('Requisição 16 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 16:', apiResponse16.statusText);
        console.log('Corpo da resposta 16:', await apiResponse16.text());
        try {
          const errorDetails = await apiResponse16.json();
          console.error('Detalhes do erro 16:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 16:', jsonError.message);
        }
      }

      if (apiResponse17.ok) {
        console.log('Requisição 17 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 17:', apiResponse17.statusText);
        console.log('Corpo da resposta 17:', await apiResponse17.text());
        try {
          const errorDetails = await apiResponse17.json();
          console.error('Detalhes do erro 17:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 17:', jsonError.message);
        }
      }

      if (apiResponse18.ok) {
        console.log('Requisição 18 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 18:', apiResponse18.statusText);
        console.log('Corpo da resposta 18:', await apiResponse18.text());
        try {
          const errorDetails = await apiResponse18.json();
          console.error('Detalhes do erro 18:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 18:', jsonError.message);
        }
      }

      if (apiResponse19.ok) {
        console.log('Requisição 19 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 19:', apiResponse19.statusText);
        console.log('Corpo da resposta 19:', await apiResponse19.text());
        try {
          const errorDetails = await apiResponse19.json();
          console.error('Detalhes do erro 19:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 19:', jsonError.message);
        }
      }

      if (apiResponse20.ok) {
        console.log('Requisição 20 enviada com sucesso!');
      } else {
        console.error('Erro na chamada da API Java 20:', apiResponse20.statusText);
        console.log('Corpo da resposta 20:', await apiResponse20.text());
        try {
          const errorDetails = await apiResponse20.json();
          console.error('Detalhes do erro 20:', errorDetails);
        } catch (jsonError) {
          console.error('Erro ao ler detalhes do erro 20:', jsonError.message);
        }
      }

    } catch (error) {
      console.error('Erro ao conectar com a API Java:', error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <div>
        <div>
        <div className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.backButton}>
              <Link href="/" className={styles.backButton}>&#8592;</Link>
            </div>
            </div>
            </div>
          <div className={styles.cabecalho}>
          <h2>Formulário</h2>
          </div>
          <form onSubmit={handleSubmit} action="" className={styles.formulario}>
            {/* Campo de CPF */}
            <div>
              <label htmlFor="cpf">Primeiro, confirme o seu CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={handleCpfChange}
                required
              />
            </div>

            {/* Perguntas */}
            {Object.values(perguntas).map((pergunta) => (
              <div key={pergunta.id} className={styles.pergunta}>
                <input type="text" id={`pergunta${pergunta.id}`} name={`pergunta${pergunta.id}`} value={pergunta.texto} readOnly />
                <div>
                  <label htmlFor={`resposta${pergunta.id}`}> </label>
                  <select
                    id={`resposta${pergunta.id}`}
                    name={`resposta${pergunta.id}`}
                    value={pergunta.resposta}
                    onChange={(e) => handleRespostaChange(pergunta.id, e.target.value)}
                    className={styles.opcoes}
                    required
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              </div>
            ))}
          <div className={styles.botao}>
            <button type="submit" disabled={loading} className={styles.enviar}>
              {loading ? 'Aguarde...' : 'Enviar respostas'}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}