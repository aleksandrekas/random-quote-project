var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];


export const randomColor = ()=>{
    let randomPosition = Math.floor(Math.random() * colors.length)
    return colors[randomPosition]
}



export async function getQuotes() {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

    const data = await response.json();

    data.quotes[Math.floor(Math.random() * data.quotes.length)];

    const randomQuote = await  data.quotes[Math.floor(Math.random() * data.quotes.length)];

    return randomQuote
}





