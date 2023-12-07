const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: "Hello World!"
        }
    },
    
}).mount("#my_id");

//bonus immagine
createApp({
    data() {
        return {
            immagine: "https://www.nanopress.it/wp-content/uploads/2022/08/gianni-morandi.jpeg"
        }
    }
    
}).mount("#gianni_morandi");