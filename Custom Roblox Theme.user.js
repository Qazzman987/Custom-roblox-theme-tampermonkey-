// ==UserScript==
// @name         Custom Roblox Theme
// @namespace    http://tampermonkey.net/
// @version      2023-12-22
// @description  Custom theme for the roblox home page, avatar and discover screen
// @author       Qazzman
// @match        https://www.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// ==/UserScript==

(function() {

    let imagePath = "url('https://tr.rbxcdn.com/ef8bdc9faccb2e81081b5cf1a80e3cd2/768/432/Image/Png')"; //You have to use a link from robloxs servers. I recomend adding the picture to a roblox game in the preview or thumbnail.
    let mainDiv = document.getElementById("container-main").style;
    let contentDiv = document.querySelector(".content").style;
    let navSide = document.getElementById("navigation").style;
    let navTop = document.getElementById("header").style;
    let footerDiv = document.getElementById("footer-container").style;


    mainDiv.backgroundColor = "darkblue"; // if the image would not load you could easily see if it was tampermonkey or the image.
    mainDiv.backgroundImage = imagePath;


    contentDiv.opacity = "0.9"; //opacity of the menu with the content. Remove if you want it at full opacity.
    contentDiv.backgroundColor = "#00161b";
    contentDiv.borderRadius = "8px"; //for rounded corners
    contentDiv.paddingLeft = "1rem";
    contentDiv.marginTop = "1rem";

    //colors for the top-bar sidebar and the bottom-bar(footer)
    navSide.backgroundColor = "#27071e";
    navTop.backgroundColor = "#27071e";
    footerDiv.backgroundColor = "#27071e";



    let currentURL = window.location.href; //the url of that user is currently at.


    let indexOfQuestionMark = currentURL.indexOf('?'); //catalogs have a questionmark after /catalog so removing everything will let us filter the path easier.
    let indexOfHashtag = currentURL.indexOf('#'); // same goes for the discover page.


    let firstUrl = indexOfQuestionMark !== -1 ? currentURL.substring(0, indexOfQuestionMark) : currentURL; //gives us a url that has removed everything after /catlog
    let secondUrl = indexOfHashtag !== -1 ? currentURL.substring(0, indexOfHashtag) : currentURL; // gives us a url that has removed everything after /discover


    if (firstUrl === "https://www.roblox.com/catalog" || secondUrl === "https://www.roblox.com/discover" || firstUrl === "https://www.roblox.com/discover/") { // checks if the user is in catlog or discover to apply the right css.

        navSide.color = "black";
    } else {


        contentDiv.display = "flex";
        contentDiv.justifyContent = "center";
        contentDiv.maxWidth = "1100px";
    }


})();
