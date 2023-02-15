import React from 'react';
import { useForm } from 'react-hook-form';
import Box from "@mui/material/Box";

function FormContent () {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('data', data)
  };

  const onError = () => {
    console.log('wrong', errors)
  };


  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
    },
    questionContainer: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 16,
      backgroundColor: '#6fbf73',
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 8,
      width: '100%'
    },
    question:{
      width: '90%',
      height: 50,
      borderRadius: 5,
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={styles.formContainer}>
      <Box style={styles.questionContainer}>
        <h3>Soldi sul conto:</h3>
        <select {...register("AmountOnTheAccount", { required: true })} style={styles.question}>
          <option value="0">0</option>
          <option value="Tra 0 e 200 Marchi Tedeschi">Tra 0 e 200 Marchi Tedeschi</option>
          <option value="Più di 200 per almeno un anno">Più di 200 per almeno un anno</option>
          <option value="nessun account">nessun account</option>
        </select>
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Durata in mesi:</h3>
        <input style={styles.question} type="number" placeholder="Immettere la durata.." {...register("MonthTime", {required: true, min: 0})} />
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Passato del credito:</h3>
        <select style={styles.question} {...register("PastCredit", { required: true })}>
          <option value="Nessun credito rimanente/restituiti tutti i crediti">Nessun credito rimanente/restituiti tutti i crediti</option>
          <option value="Crediti rimborsati presso questa banca">Crediti rimborsati presso questa banca</option>
          <option value="Nessun problema con i crediti correnti con questa banca">Nessun problema con i crediti correnti con questa banca</option>
          <option value="Pagamenti con esitazione dei precedenti crediti">Pagamenti con esitazione dei precedenti crediti</option>
          <option value="Crediti correnti problematici/altri crediti esistenti in altre banche">Crediti correnti problematici/altri crediti esistenti in altre banche</option>
        </select>
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Proposito del credito:</h3>
        <select style={styles.question} {...register("CreditPurpose", { required: true })}>
          <option value="Macchina nuova">Macchina nuova</option>
          <option value="Macchina usata">Macchina usata</option>
          <option value="Forniture">Forniture</option>
          <option value="Radio/televisione">Radio/televisione</option>
          <option value="Elettrodomestici">Elettrodomestici</option>
          <option value="Riparazioni">Riparazioni</option>
          <option value="Educazione">Educazione</option>
          <option value="Vacanza">Vacanza</option>
          <option value="Riformazione">Riformazione</option>
          <option value="Affari">Affari</option>
          <option value="Altro">Altro</option>
        </select>
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Ammontare del credito richiesto:</h3>
        <input style={styles.question} type="number" placeholder="Inserire importo.." {...register("CreditRequestAmount", {required: true, min: 0})} />
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Ammontare dei risparmi e/o azioni:</h3>
        <select style={styles.question} {...register("ActionsCreditAmount", { required: true })}>
          <option value="Tra 0 e 100">Tra 0 e 100</option>
          <option value="Tra 100 e 500">Tra 100 e 500</option>
          <option value="Tra 500 e 1000">Tra 500 e 1000</option>
          <option value="Più di 1000">Più di 1000</option>
          <option value="Non disponibile">Non disponibile</option>
        </select>
      </Box>
      <Box style={styles.questionContainer}>
        <h3>Tempo di lavoro al datore corrente</h3>
        <select style={styles.question} {...register("ActualWorkTime")}>
          <option value="Disoccupato">Disoccupato</option>
          <option value="Tra 0 e 1 anno">Tra 0 e 1 anno</option>
          <option value="Tra 1 e 4 anni">Tra 1 e 4 anni</option>
          <option value="Tra 4 e 7 anni">Tra 4 e 7 anni</option>
          <option value="Più di 7 anni">Più di 7 anni</option>
        </select>
      </Box>
      <input type="number" placeholder="RateTax" {...register("RateTax", {required: true, max: 100, min: 0})} />
      <select {...register("FamilyStatus", { required: true })}>
        <option value="Maschio-divorziato">Maschio-divorziato</option>
        <option value="Femmina-divorziata">Femmina-divorziata</option>
        <option value="Maschio-single">Maschio-single</option>
        <option value="Maschio-sposato">Maschio-sposato</option>
        <option value="Donna-single">Donna-single</option>
      </select>
      <select {...register("OthersDebtors", { required: true })}>
        <option value="Nessuno">Nessuno</option>
        <option value="Co-applicante">Co-applicante</option>
        <option value="Garante">Garante</option>
      </select>
      <input type="number" placeholder="DwellingTime" {...register("DwellingTime", {required: true, min: 0})} />
      <select {...register("Property", { required: true })}>
        <option value="Proprietario di casa/terreno">Proprietario di casa/terreno</option>
        <option value="Proprietario di casa">Proprietario di casa</option>
        <option value="Proprietario di risparmi a contratto con società edilizie/assicurazione sulla vita">Proprietario di risparmi a contratto con società edilizie/assicurazione sulla vita</option>
        <option value="Nessuno">Nessuno</option>
      </select>
      <input type="number" placeholder="Years" {...register("Years", {required: true, min: 0})} />
      <select {...register("OthersCreditAccount", { required: true })}>
        <option value="In altre banche">In altre banche</option>
        <option value="In negozi">In negozi</option>
        <option value="Nessuno">Nessuno</option>
      </select>
      <select {...register("DwellingType", { required: true })}>
        <option value="In affitto">In affitto</option>
        <option value="Proprietario occupante">Proprietario occupante</option>
        <option value="Libero">Libero</option>
      </select>
      <input type="number" placeholder="ExistentCreditHere" {...register("ExistentCreditHere", { min: 0})} />
      <select {...register("WorkType", { required: true })}>
        <option value="Disoccupato/non qualificato senza residenza permanente">Disoccupato/non qualificato senza residenza permanente</option>
        <option value="Non qualificato con residenza permanente">Non qualificato con residenza permanente</option>
        <option value="Lavoratore/impiegato qualificato/dipendente pubbblico minore">Lavoratore/impiegato qualificato/dipendente pubbblico minore</option>
        <option value="Esecutivo/dirigente">Esecutivo/dirigente</option>
        <option value="Alto funzionario statale">Alto funzionario statale</option>
      </select>
      <input type="number" placeholder="MaintenanceRightNumber" {...register("MaintenanceRightNumber", {required: true, min: 0})} />
      <select {...register("Cellphone", { required: true })}>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      <select {...register("ForeignerWorker", { required: true })}>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default FormContent;