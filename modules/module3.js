const header= (())=>{
    const creatNav= () =>{
        const nav=document.createElement('nav')
        const unorderlist= document.createElement('ul')
        const homelist = document.createElement('li')
        const menulist= document.createElement('li')
        const contactlist=document.createElement('li')

        homelist.setAttribute('class','tab')
        menulist.setAttribute('class','tab')
        contactlist.setAttribute('class','tab')
        menulist.setAttribute('id','tab')

        homelist.textContent='Home'
        menulist.textContent='menu'
        contactlist.textContent='contactus'

        nav.classList='navbar'

        unorderlist.appendChild(homelist)
        unorderlist.appendChild(menulist)
        unorderlist.appendChild(contactlist)

        nav.appendChild(unorderlist);
        return nav;
    };
    return{creatNav};
}

export default header