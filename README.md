Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Carosello Array di Oggetti

### Milestone 1

- Creo un array di oggeti 
- creo nel DOM gli elementi html necessari alla corretta visualizzazione delle immagini, **ogni oggetto nel carosello corrisponde ad uno dell'array** (create element + append)
- gestisco i click sulle frecce trmite un addEventListener

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


### Milestone 2

- per ottenere il cilo infinito posso usare un setInterval che cambia immagine col passare del tempo e quando raggiunge l'ultima immagine riparte dalla prima 