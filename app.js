const books=[{
    id:1,
    category : '3-1',
    title : 'cryptography',
    img:'crpto.jpeg',
    price : '$5',
    desc : 'This practical guide to modern encryption breaks down the fundamental mathematical concepts at the heart of cryptography without shying away from meaty discussions of how they work. ',
},
{
    id:2,
    category : '3-2',
    title : 'block chain technolgies',
    img:'bct.jpeg',
    price : '$3',
    desc : 'Blockchain still is a vast and evolving technology. Despite the ambiguity surrounding this topic, blockchain has been gaining a steady influence on financial markets.',
},{
    id:3,
    category : '4-1',
    title : 'cyberforensics',
    img:'cyber.jpeg',
    price : '$3',
    desc : 'Learn Computer Forensics from a veteran investigator and technical trainer and explore how to properly document digital evidence collected. Key Features:. Investigate the core methods of computer forensics to procure.',
},{
    id:4,
    category : '3-1',
    title : 'intusion detection systems',
    img:'ids.jpeg',
    price : '$3',
    desc : 'The goal of an Intrusion Detection System (IDS) is to monitor network assets in order to detect misuse or anomalous behavior. Several types of IDS have been proposed in the literature, and they can be divided into two broad classes',
},{
    id:5,
    category : '3-2',
    title : 'embedded systems',
    img:'es.jpeg',
    price : '$3',
    desc : 'an embedded system is an exceptional device or a set of devices integrated into the primary system to perform a precise function.',
},{
    id:6,
    category : '4-1',
    title : 'privacy and security in iot',
    img:'ps.jpeg',
    price : '$3',
    desc : 'Provides the authoritative and up-to-date information required for securing IoT architecture and applications.',
},{
    id:7,
    category : '3-1',
    title : 'machine learning',
    img:'ml.jpeg',
    price : '$3',
    desc : 'Machine learning has become more and more integrated into our lives. It is the branch of artificial intelligence (AI) that powers chatbots, customizes the shows that Netflix recommends for you, and determines your TikTok feed.',
},
{
    id:8,
    category : '3-2',
    title : 'management science',
    img:'ms.jpeg',
    price : '$3',
    desc : 'Management Science book provide a comprehensive understanding of the principles and tools used in the field of management. These books cover a wide range of topics such as operations research, decision analysis.',
},
{
    id:9,
    category : '4-1',
    title : 'operating systems',
    img:'os.jpeg',
    price : '$3',
    desc : "An operating system serves as a link between the user and the device's hardware. It is responsible for all functions of the system. It's also responsible for managing both software and hardware components.",
},
];
const sectioncenter=document.querySelector('.section-center');
// const item=document.querySelector('.item');
const btncontain=document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded',()=>{
    displaybooks(books);
    displaybtns();
})
function displaybooks(items){
    let displayitems=items.map(function(book){
        return `<article class="item">
                    <img class="photo" src=${book.img} alt="3-2">
                    <div class="item-info">
                        <header>
                        <h3>${book.title}</h3>
                        <h3 class="price">${book.price}</h3>
                    </header>
                        <p>${book.desc}</p>
                    </div>
                </article>` 
    })
    displayitems=displayitems.join("");
    sectioncenter.innerHTML=displayitems;
 }
 function displaybtns(){
const categories=books.reduce(function(values,items){
    if(!values.includes(items.category)){
        values.push(items.category);
    }
    return values;
},['all']);
const catbtn=categories.map(function(category){
    return `<button class="btn" type="button" data-id=${category}>${category}</button>`
}).join("");
btncontain.innerHTML=catbtn;
const filterbtns=document.querySelectorAll('.btn');
filterbtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const cat=e.currentTarget.dataset.id;
        const bookcat=books.filter((bookitems)=>{
            if(bookitems.category===cat){
                return bookitems;
            }
        })
        if(cat==='all'){
            displaybooks(books);
        }
        else{
            displaybooks(bookcat);
        }
    })
})
 }