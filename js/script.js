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


document.getElementById('print').innerHTML = '';

icons.forEach((element) =>{
    let color = colorType(element);
    print(element , color);
});

const ordine = document.getElementById('print').value;

function colorType(elem){
    let colore = '';
    
    if (elem.type == 'animali'){
        colore = '#AF621D'
        return colore;
    }
    else if (elem.type == 'user'){
        colore = '#022787'
        return colore;
    }
    else if (elem.type == 'vegetable'){
        colore = '#00BC1C'
        return colore;
    }
}

function print(elem , colore){
    let nome = elem.name.toUpperCase();
    document.getElementById('print').innerHTML += `<div id="output" class="col ico">
    <div class="box py-4">
        <i class="${elem.family} ${elem.prefix}${elem.name}" style="color:${colore} "></i>
        <div class="text-center name">${nome}</div>
    </div>
</div>`
}