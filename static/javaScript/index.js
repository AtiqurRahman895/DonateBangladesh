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

// change pageButton color based on current pathname

  const currentPage = window.location.pathname;

  if (currentPage.includes('index.html')) {
    document.querySelector('.pageButton[href="./index.html"]').classList.add(`activePageButton`)
  } else if (currentPage.includes('history.html')) {
    document.querySelector('.pageButton[href="./history.html"]').classList.add(`activePageButton`)
  }



