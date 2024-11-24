const createMenu = () => {
    let content = document.getElementById('content');
    
    let main = document.createElement('div');
    main.classList.add('main');

    let header = document.createElement('h1');
    header.classList.add('main-header');
    header.innerHTML = "Our Menu";
    main.append(header);
    content.append(main);

    let info = document.createElement('div');
    info.classList.add('Info');
    info.classList.add('box');
    let infoH1 = document.createElement('h1');
    infoH1.innerHTML = "Starters";
    info.append(infoH1);
    let infoP = document.createElement('p');
    infoP.innerHTML = "Avacado Toast - $12.00";
    info.append(infoP);
    main.append(info);

    let purpose = document.createElement('div');
    purpose.classList.add('Purpose');
    purpose.classList.add('box');
    let purposeH1 = document.createElement('h1');
    purposeH1.innerHTML = "Entrees";
    purpose.append(purposeH1);
    let purposeP = document.createElement('p');
    purposeP.innerHTML = "Wagyu Steak - $60.00";
    purpose.append(purposeP);
    main.append(purpose);

    let hours = document.createElement('div');
    hours.classList.add('Hours');
    hours.classList.add('box');
    let hoursH1 = document.createElement('h1');
    hoursH1.innerHTML = "Desserts";
    hours.append(hoursH1);
    let hoursP = document.createElement('p');
    hoursP.innerHTML = "Tiramisu - $8.00";
    hours.append(hoursP);
    main.append(hours); 
}

export { createMenu };