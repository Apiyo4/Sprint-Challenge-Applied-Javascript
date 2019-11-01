// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date, title, temp) {
    const header = document.createElement('div');
    const dateSpan = document.createElement('span');
    const titleH1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    header.append(dateSpan);
    header.append(titleH1);
    header.append(tempSpan);
  
    header.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent= date;
    titleH1.textContent = title;
    tempSpan.textContent = temp;

    return header;
}
const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header('MARCH 28, 2019', 'Lambda Times', '98°'));