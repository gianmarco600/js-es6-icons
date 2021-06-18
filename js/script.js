const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

const type = [];
getOptions();



document.getElementById('icon-select').addEventListener('change', set);

function getOptions(){
    icons.forEach((element) =>{
        let typeElem = element.type;
        if (!type.includes(typeElem)){
            type.push(typeElem);
        }
    });
    for (let i = 0; i < type.length; i++){
        document.getElementById('icon-select').innerHTML+=`<option value="${type[i]}">${type[i]}</option>`;
    }
}
// console.log(type);

function set(){
    send(filtra());
}

// funzione per filtrare l'array
// ritorna l'array su cuoi poi dobbiamo lavorare



document.getElementById('print').innerHTML = '';


function filtra(){
    let iconsFiltered = [];
    let ordine = document.getElementById('icon-select').value;
    console.log(ordine);
    if (ordine == 'all'){
       
        return icons;
    }
    for (let i = 0; i < icons.length; i++){
        if (icons[i].type == ordine){
            iconsFiltered.push(icons[i])
        }
    }
   
    return iconsFiltered;
    
}

send(filtra()); 






// funzione per stampare gli elementi
function send(array){
    document.getElementById('print').innerHTML = '';
    array.forEach((element) =>{
        let color = colorType(element);
        assemble(element , color);
    });
}

// funzione per cambiare il colore delle icone a seconda del tipo
function colorType(elem){
    let colore = '#AF621D';
    
    
    if (elem.type == 'user'){
        colore = '#022787'
        
    }
    else if (elem.type == 'vegetable'){
        colore = '#00BC1C'
        
    }
    return colore;
}


// funzione per costruire l'output che poi verra passato al html
function assemble(elem , colore){
    let nome = elem.name.toUpperCase();
    document.getElementById('print').innerHTML += `<div id="output" class="col ico">
    <div class="box py-4">
        <i class="${elem.family} ${elem.prefix}${elem.name}" style="color:${colore} "></i>
        <div class="text-center name">${nome}</div>
    </div>
</div>`;
}