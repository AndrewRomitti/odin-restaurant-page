const createHome = () => {
    let content = document.getElementById('content');
    
    let main = document.createElement('div');
    main.classList.add('main');

    let header = document.createElement('h1');
    header.classList.add('main-header');
    header.innerHTML = "Only the best for the best";
    main.append(header);
    content.append(main);

    let info = document.createElement('div');
    info.classList.add('Info');
    info.classList.add('box');
    let infoH1 = document.createElement('h1');
    infoH1.innerHTML = "What we do";
    info.append(infoH1);
    let infoP = document.createElement('p');
    infoP.innerHTML = "blah blah blah blah...";
    info.append(infoP);
    main.append(info);

    let purpose = document.createElement('div');
    purpose.classList.add('Purpose');
    purpose.classList.add('box');
    let purposeH1 = document.createElement('h1');
    purposeH1.innerHTML = "Our Purpose";
    purpose.append(purposeH1);
    let purposeP = document.createElement('p');
    purposeP.innerHTML = "blah blah blah blah...";
    purpose.append(purposeP);
    main.append(purpose);

    let hours = document.createElement('div');
    hours.classList.add('Hours');
    hours.classList.add('box');
    let hoursH1 = document.createElement('h1');
    hoursH1.innerHTML = "Our Hours";
    hours.append(hoursH1);
    let hoursP = document.createElement('p');
    hoursP.innerHTML = "Monday: 9:00AM - 5:00PM";
    hours.append(hoursP);
    main.append(hours);

    let location = document.createElement('div');
    location.classList.add('Hours');
    location.classList.add('box');
    let locationH1 = document.createElement('h1');
    locationH1.innerHTML = "Our Location";
    location.append(locationH1);
    let locationP = document.createElement('p');
    locationP.innerHTML = "123 West St., New York City";
    location.append(locationP);
    main.append(location);    
}

export { createHome };