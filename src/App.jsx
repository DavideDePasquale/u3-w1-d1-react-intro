// area degli import, possiamo importare file resenti nella cartella src o altri componenti
// import di foto che genera una variabile chiamata "logo"

//import di css, questo viene solamente caricato come css globale
import "./App.css";
import ButtonCom from "./components/ButtonCom";
import ImageComponent from "./components/ImageComponent";
import Main from "./components/Main";

// questo file contiene il nostro primo React Component, il principale: App.jsx
// Qui dentro creeremo i nostri componenti personali. Tutto quello che verrà creato qua dentro verrà poi renderizzato per l'utente

// Cos'è un componente React? Nella sua forma più basilare non è altro che... una semplice funzione!
// E' una funzione con l'unico vincolo di dover ritornare SEMPRE del codice JSX valido!

// JSX è una sintassi simil-HTML che permette l'inserimento di codice dinamico (JavaScript) direttamente in quello che sembra essere normale HTML
// Ci permette di combinare struttura e logica insieme!

// principali differenze con HTML:
// - class - diventa className (per evitare conflitti con la keyword class dei costruttori in js)
// - i tag img, br, hr, input sono autoconclusivi e hanno bisogno della chiusura immediata con lo slash finale: <img />, <br />, ecc..
// - l'attributo per le label "for" diventa "htmlFor" <label htmlFor="nome_id"></label>

// tutto quello che non è un valore di stringa, in JSX, dovrà essere delimitato da graffe src={logo} xs={2}
// all'interno delle graffe è anche possibile valutare un qualsiasi valore dinamico (variabile o espressione)

function App() {
  return (
    <div className="App">
      {/* utilizzare un componente è semplice come usarlo in forma di tag */}
      {/* i componenti possono anche ricevere dei dati in ingresso in diverse forme: stringhe, numeri, oggetti, variabili ecc */}

      <ImageComponent
        title="Milan-Juventus peggior partita dell'anno?"
        paragraph="Partita noiosa e senza reti quella dell'anticipo del venerdì fra Milan e Juventus."
        immagine="data:image/jpeg;base64,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"
        style={{ borderRadius: "10px", boxShadow: "5px 7px 30px" }}
      />
      <Main
        acca3="Riuscirà la Juventus a combattere per il titolo?"
        paragrafo="Milan-Juve si chiude con uno scialbo 0-0, la miseria di appena 3 tiri in porta (il primo e unico dei padroni di casa al 95') e una bordata di fischi arrivata da un San Siro deluso e infreddolito. Sì, perché se doveva essere la gara della verità per i rossoneri di Fonseca, la prova è stata fallita: considerando la gara da recuperare contro il Bologna, con una vittoria il Milan sarebbe potuto restare agganciato al treno scudetto, ma il pareggio fa scivolare il Diavolo a -9 dall'Inter capolista (aspettando il Napoli e tutte le altre). Di qui i fischi sonori dei 75mila presenti sugli spalti, che si aspettavano di più, considerando anche che la Juve si era presentata a Milano con parecchie defezioni, su tutte Dusan Vlahovic. "
        style={{ color: "white", fontSize: "13px", padding: "1.5rem" }}
      />

      <ButtonCom
        id="nome-input"
        labelText="Vuoi essere sempre aggiornato sulla tua squadra del cuore?"
        type="text"
        placeholder="inserisci il tuo nome"
        style2={{ color: "black", fontWeight: "bold", fontFamily: "italic" }}
        style3={{
          borderRadius: "7px",
          border: "none",
          padding: "4px",
          boxShadow: "2px 2px 11px",
          marginTop: "7px"
        }}
        buttype="Submit"
        buttonText="Iscriviti!"
        style={{
          backgroundColor: "grey",
          color: "black",
          border: "solid 1px gray",
          borderRadius: "7px",
          boxShadow: "2px 2px 11px",
          padding: "4px",
          marginLeft: "10px"
        }}
      />

      {/* uno stesso componente può essere riutilizzato più volte e produrre codice diverso grazie alle prop che dinamicizzano il contenuto */}
    </div>
  );
}

export default App;
