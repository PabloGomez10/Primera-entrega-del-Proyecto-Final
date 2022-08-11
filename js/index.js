const pc = [{
        name: "PC OFICINA",
        mother: "Mother H610MH",
        cpu: "Intel® Core™ i3-12100 4.30 Ghz",
        memory: "Memoria Adata DDR4 8GB 2666MHz",
        disc: "SSD Gigabyte 480GB 550MB/s",
        font: "Fuente Thermaltake 500W",
        display: "Monitor LG LED 19",
        props: "Windows 10 Home 64 bits, gabinete, prerifericos",
        price: "80000",
        date: "computadora"
    },
    {
        name: "PC GamerGtx",
        mother: "Mother B660M-A",
        cpu: "Intel® Core™ i5-12600K",
        memory: "X2 Memoria DDR4 8GB 3000MHZ",
        disc: "SSD Gigabyte 480GB 550MB/s, Disco Rígido WD 1TB BLUE 64MB",
        videoCard: "ASUS GeForce GTX 1660 TI 6GB GDDR6",
        refrigeration: "Cooler CPU ID-Cooling SE-903-XT",
        font: "Fuente Linkworld 650w 80 Plus Bronze",
        display: "Monitor LG 24",
        props: "Windows 10 Home 64 bits, Gabinete Kolink, Mouse Redragon Cobra M711, Auriculares Logitech G432 Gaming 7.1, Teclado Redragon K509",
        price: "300000",
        date: "computadora"
    }, {
        name: "PC GamerRtx",
        mother: "Mother Z690-PLUS",
        cpu: "Intel® Core™i7-12700K 5.0GHz",
        memory: "Memoria Patriot Viper DDR4 32GB (2x16GB) 3200Mhz",
        disc: "SSD M2 WD 1TB 7000MB/s",
        videoCard: "Geforce RTX 3080 10 GB GIGABYTE",
        refrigeration: "Cooler CPU ID-Cooling FROSTFLOW 240 XT Watercooling",
        font: "Fuente Cooler Master G800 800w 80 Plus Gold",
        display: "Monitor Gamer Viewsonic 24 Curvo 165hz",
        props: "Windows 10 Home 64 bits, Gabinete Deepcool MATREXX 50, Mouse Logitech G703, Auriculares Inalambrico Logitech Astro A50, Teclado Mecanico Redragon Draconic K530RGB ",
        price: "520000",
        date: "computadora"
    }

]


const notebook = [{
    name: "Notebook HP I3",
    mother: "Mother H610MH",
    cpu: "Intel® Core™ i3-12100 4.30 Ghz",
    memory: "Memoria Adata DDR4 8GB 2666MHz",
    disc: "SSD Gigabyte 480GB 550MB/s",
    screen: "16 pulgadas, 1920x1080",
    props: "Windows 10 Home 64 bits, cargador",
    price: "120000",
    date: "notebook"
},
{
    name: "Notebook ACER",
    mother: "Mother H610MH",
    cpu: "Intel® Core™ i5-12400 4.40 Ghz",
    memory: "Memoria Adata DDR4 8GB 2666MHz",
    disc: "SSD Gigabyte 480GB 550MB/s",
    screen: "16 pulgadas, 1920x1080",
    props: "Windows 10 Home 64 bits, cargador",
    price: "150000",
    date: "notebook"
},
{
    name: "Notebook HP",
    mother: "Mother H610MH",
    cpu: "Intel® Core™ i7-12700KF 5.0GHz",
    memory: "Memoria Crucial DDR4 16GB 2666MHz",
    disc: "SSD M2 WD 1TB 7000MB/s",
    screen: "16 pulgadas, 1920x1080",
    props: "Windows 10 Home 64 bits, cargador",
    price: "230000",
    date: "notebook"
}

]


const products = [{
        name: "SSD KINGSTON 240GB",
        price: "$5500",
        date: "componente"
    },
    {
        name: "Mother z590m",
        price: "$ 25000",
        date: "componente"
    },
    {
        name: "Intel® Core™ i3-12100 4.30 Ghz",
        price: "$ 34000",
        date: "componente"
    },
    {
        name: "Intel® Core™ i5-12600 4.9 Ghz",
        price: "$ 65000",
        date: "componente"
    },
    {
        name: "Intel® Core™ i7-12700k 5.0GHz",
        price: "$ 96000",
        date: "componente"
    },
    {
        name: "AMD Ryzen 5 4600g 3.7GHz",
        price: "$ 34000",
        date: "componente"
    },
    {
        name: "AMD Ryzen 7 5700x 3.4GHz",
        price: "$ 65000",
        date: "componente"
    },
    {
        name: "RAM hyperx 8gb 2666 Mhz",
        price: "$ 6000",
        date: "componente"
    },
    {
        name: "GeForce® GTX 1660 SUPER™ GAMING OC 6G - Gigabyte",
        price: "$ 75000",
        date: "componente"
    },
    {
        name: "Nvidia GEFORCE RTX 2080 TI Founders Edition 11 GB GDDR6",
        price: " $ 280000",
        date: "componente"
    }
]

function search(array) {
    array = products.concat(notebook, pc)
    let llamado = prompt("Busqueda de producto");
    const productos = array.find(insumos => insumos.name == llamado)

    console.log(productos)
}
search()


function filter(array) {
    array = products.concat(notebook, pc)
    let llamado = prompt("filtrado de producto");
    const productos = array.filter(insumos => insumos.date == llamado)

    console.log(productos)
}
filter()