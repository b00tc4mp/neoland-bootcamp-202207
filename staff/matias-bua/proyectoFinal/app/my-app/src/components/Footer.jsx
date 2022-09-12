
import './Footer.css'
import { useState } from 'react'
import Loggito from '../utils/Loggito';

function Footer({ onLogoutClick, onProfileClick, onHomeClick, onSavedClick, onNewAuctionClick, onMailClick }) {

  const handleLogoutClick = () => onLogoutClick()
  const handleProfileClick = () => onProfileClick()
  const handleHomeClick = () => onHomeClick()
  const handleSavedClick = () => onSavedClick()
  const handleNewAuctionClick = () => onNewAuctionClick()
  const handleMailClick = () => onMailClick()

  const uls = document.querySelectorAll("nav ul");
  const links = [...document.querySelectorAll("nav a")];
  const light = document.querySelector("nav .tubelight");

  let activeIndex = 0;
  let currentIndex = 0;
  let increment = 1;
  links.forEach((link, index) => {
    if (links[index].classList.contains("active")) {
      light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
    }

    link.addEventListener("click", e => {
      activeIndex = index;
      let t = setInterval(() => {
        if (activeIndex > currentIndex) increment = 1;
        else if (activeIndex < currentIndex) increment = -1;
        currentIndex += increment;

        links[currentIndex].classList.add("active");
        if (currentIndex != -1) links[currentIndex - increment].classList.remove("active");

        if (currentIndex == activeIndex) {
          e.target.classList.add("active");
          increment = 0;
          clearInterval(t);
        }
      }, 50);
      light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
    });
  });

  return (
    <nav >
      <ul >
        <li >
          <a href="#" class="active" onClick={handleHomeClick} >
            <span class="material-symbols-outlined">
              home
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" class="active" onClick={handleSavedClick} >
            <span class="material-symbols-outlined">
              bookmark
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" class="active" onClick={handleNewAuctionClick} >
            <span class="material-symbols-outlined">
              add_circle
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" class="active" onClick={handleMailClick} >
            <span class="material-symbols-outlined">
              inbox
            </span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" class="active" onClick={handleProfileClick}>
            <span class="material-symbols-outlined" >
              account_circle
            </span>
          </a>
        </li>
      </ul>

      <div class="tubelight">
        <div class="light-ray"></div>
      </div>
    </nav>
  )
}
export default Footer 