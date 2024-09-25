// change the background of nav bar

window.addEventListener(`scroll`, () => {
    if (window.scrollY >= 20) {
      document
        .querySelector(`.headerSection`)
        .classList.add(`headerSectionAnimation`);
    } else {
      document
        .querySelector(`.headerSection`)
        .classList.remove(`headerSectionAnimation`);
    }
  });


// hide and show pageButton based on current pathname

const currentPage = window.location.pathname;

if (currentPage.includes('index.html')) {
  document.querySelector('.pageButton[href="./index.html"]').remove()
} else if (currentPage.includes('faq.html')) {
  document.querySelector('.pageButton[href="./faq.html"]').remove()
}

// change tobButton color 

const tabToggler= document.querySelectorAll(`.tabToggler`)
const tabContent= document.querySelectorAll(`.tabContent`)


let hideAndShowTabs=()=>{
  tabToggler.forEach((eachTabToggler,index)=>{
    if(!eachTabToggler.checked){
      tabContent[index].classList.add(`hidden`)

    }else{
      tabContent[index].classList.remove(`hidden`)

    }
  // console.log(eachTabToggler.checked)
})
}

hideAndShowTabs()


// add history

const historyWrapper = document.querySelector('.historyWrapper');

let addNoDonation=()=>{
  if(!historyWrapper.hasChildNodes()){
    const heading = document.createElement('h2');
    heading.textContent = `No donations have been received yet !`;
    heading.className = 'noDonation';
  
    historyWrapper.appendChild(heading);
  }
}

addNoDonation()

let newHistory=(amount,donationTitle)=>{
  const historyWrapper = document.querySelector('.historyWrapper');

// Create a new div element
const newDiv = document.createElement('div');
newDiv.className = 'border border-[rgba(0,0,0,0.3)] rounded-xl p-6 grid grid-cols-1 gap-4';

// Create and append h6 element
const heading = document.createElement('h6');
heading.textContent = `${amount} Taka is Donated for ${donationTitle}`;
newDiv.appendChild(heading);

// Create and append p element
const paragraph = document.createElement('p');
const currentDate = new Date();
paragraph.textContent = `Date: ${currentDate.toLocaleDateString()}, Time: ${currentDate.toLocaleTimeString()}`;
newDiv.appendChild(paragraph);

// Append the new div to the historyWrapper
historyWrapper.appendChild(newDiv);
}


// show alerts and modals after clicking "Donate Now" button

let availableAmount=document.querySelector(`.availableAmount`)
let totalDonation=document.querySelectorAll(`.totalDonation`)
let amountDonating=document.querySelectorAll(`.amountDonating`)
let confirmDonation=document.querySelectorAll(`.confirmDonation`)
let donationTitle=document.querySelectorAll(`.donationTitle`)


confirmDonation.forEach((eachConfirmDonation,index)=>{
  eachConfirmDonation.addEventListener(`click`,(e)=>{
    e.preventDefault();
    if(amountDonating[index].value){
      if(typeof Number(amountDonating[index].value) == `number` && Number(amountDonating[index].value) > 0){
        if(Number(availableAmount.innerText)<Number(amountDonating[index].value)){
          alert(`You don't have sufficient balance. your current balance is less then ${amountDonating[index].value} BDT`)
        }else{
          document.querySelector(`.confirmatiionModal`).open=true
          document.querySelector(`.donationMadalInfo`).innerText=`You have donated ${amountDonating[index].value} BDT for humanity`
          // alert(`You have donated ${amountDonating[index].value} take for humanity`)
          totalDonation[index].innerText=Number(totalDonation[index].innerText) + Number(amountDonating[index].value)
          availableAmount.innerText=Number(availableAmount.innerText) - Number(amountDonating[index].value)
          document.querySelector(`.noDonation`).innerText=`Donation History!`
          newHistory(amountDonating[index].value,donationTitle[index].innerText)

          amountDonating[index].value=""
        }
      }else{
      alert(`Invalid donation amount`)
    }}else{
      alert(`Please input the amount you want donate`)
    }
      
    

  
  })
})





