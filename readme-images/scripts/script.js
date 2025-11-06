// JavaScript Document
console.log("hi");

//HAMBURGER MENU
// Met hulp van de huiswerkopdracht
const openMenuBtn = document.querySelector('.openMenu');
const sluitMenuBtn = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

openMenuBtn.onclick = () => menu.hidden = false;
sluitMenuBtn.onclick = () => menu.hidden = true;

//------------