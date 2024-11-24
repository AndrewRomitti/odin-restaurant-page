const createContact = () => {
    let content = document.getElementById('content');
    
    let main = document.createElement('div');
    main.classList.add('main');

    let header = document.createElement('h1');
    header.classList.add('main-header');
    header.innerHTML = "Contact Us";
    main.append(header);
    content.append(main);

    let info = document.createElement('div');
    info.classList.add('Info');
    info.classList.add('box');
    let infoH1 = document.createElement('h1');
    infoH1.innerHTML = "Our Information:";
    info.append(infoH1);
    let infoP = document.createElement('p');
    infoP.innerHTML = "Phone Number: 123-456-7890";
    let emailP = document.createElement('p');
    emailP.innerHTML = "Email: helloworld@abc.com";
    info.append(infoP);
    info.append(emailP);
    main.append(info);
}

export { createContact };