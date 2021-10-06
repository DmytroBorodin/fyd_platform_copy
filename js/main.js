let customSelectBlock = document.querySelectorAll(".custom__select__wrapper");

customSelectBlock.forEach((block) => {
  let customOptionBlocks = block.querySelectorAll(".custom__option__wrap");
  let customSelectTitle = block.querySelector(".custom__select__title");

  customOptionBlocks.forEach((optonBlock) => {
    let option = optonBlock.querySelector(".custom__option");
    changeSelectTitle(option, customSelectTitle);
  });
});

function changeSelectTitle(option, titleEl) {
  option.addEventListener("click", () => {
    let img = titleEl.querySelector(".select__title__icon");
    let title = titleEl.querySelector("span");
    let dataValue = title.getAttribute("data-value");
    let dataSrc = title.getAttribute("data-src");
    let titleInnerText = title.innerText;

    let optionImageSrc = option.querySelector("img").getAttribute("src");
    let optionValue = option.getAttribute("value");
    let optionTitle = option.querySelector("span").innerText;

    option.querySelector("img").setAttribute("src", dataSrc);
    option.setAttribute("value", titleInnerText);
    option.querySelector("span").innerText = dataValue;

    title.setAttribute("data-value", optionTitle);
    title.setAttribute("data-src", optionImageSrc);
    title.innerText = optionValue;
    if (img) {
      img.setAttribute("src", optionImageSrc);
    }
  });
}

// mobile menu

const burgerBtn = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile__menu__sidebar");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// tabs

const tabsArr = [...document.querySelectorAll(".tab__btn")];
const infoContainers = [...document.querySelectorAll(".info__container")];

const formOpenBtn = document.querySelector(".open__btn");
const formWrapper = document.querySelector(".right__wrapper");

tabsArr.forEach((tab) => {
  tab.addEventListener("click", () => {
    let index = tabsArr.indexOf(tab);
    tabsArr.forEach((elem) => {
      elem.classList.remove("active");
    });
    tab.classList.add("active");
    if (formWrapper.classList.contains("active")) {
      formWrapper.classList.remove("active");
    }
    makeBlockActive(infoContainers, index);
  });
});

function makeBlockActive(arr, index) {
  arr.forEach((block) => {
    block.classList.remove("active");
  });
  arr[index].classList.add("active");
}

formOpenBtn.addEventListener("click", () => {
  formWrapper.classList.add("active");
  tabsArr.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });
});

const mainWrap = document.querySelector(".main__wrap");
const inpuBlocks = [...mainWrap.querySelectorAll(".email__sign__up")];

inpuBlocks[0].addEventListener("click", () => {
  inpuBlocks[1].classList.add("active");
  mainWrap.style.height = "70.4rem";
});

/* modal window logic */

const modal = document.querySelector(".modal__window__wrapper");
const forms = [...document.querySelectorAll(".modal__form__wrapper")];
const fpBtn = document.querySelector(".main__btn.fp");

fpBtn.addEventListener("click", () => {
  modal.classList.add("active");
  forms.forEach((block) => {
    block.classList.contains("reset__psw")
      ? block.classList.add("active")
      : block.classList.remove("active");

    const fields = [...block.querySelectorAll("input")];
    fields.forEach((field) => {
      field.value = "";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__window__wrapper")) {
    modal.classList.remove("active");
    forms.forEach((form) => {
      const mainBtn = form.querySelector(".main__btn");
      if (mainBtn) {
        mainBtn.setAttribute("disabled", true);
      }
    });
  }
});

forms.forEach((form) => {
  const fields = [...form.querySelectorAll("input")];
  const mainBtn = form.querySelector(".main__btn");

  fields.forEach((field) => {
    field.addEventListener("input", (e) => {
      e.target.value !== ""
        ? mainBtn.removeAttribute("disabled")
        : mainBtn.removeAttribute("disabled", true);
    });
  });

  form.addEventListener("click", (e) => {
    if (e.target.classList.contains("main__btn")) {
      form.classList.remove("active");
      forms[forms.length - 1].classList.add("active");
    }
  });
});

/* sign in/up forms rendering logic */

const formsToggler = document.querySelector(".main__btn.sign_in");
const btnSpansArr = [...formsToggler.querySelectorAll("span")];
const formsArray = [...document.querySelectorAll(".form__container")];

const toggleClass = (elemsArr) => {
  elemsArr.forEach((elem) => {
    elem.classList.contains("active")
      ? elem.classList.remove("active")
      : elem.classList.add("active");
  });
};

formsToggler.addEventListener("click", () => {
  toggleClass(btnSpansArr);
  toggleClass(formsArray);
});
