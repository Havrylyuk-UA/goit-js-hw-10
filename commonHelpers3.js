import{i as l,f as p}from"./assets/vendor-322d52e2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector('input[type="text"]'),c=document.querySelector("[data-start]"),h=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),C=document.querySelector("span[data-minutes]"),v=document.querySelector("span[data-seconds]");let d;const u=()=>{c.disabled=!0};u();const b=()=>{c.disabled=!1,c.style.background="#4e75ff",c.style.color="#fff"},S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){o[0]>new Date?(d=o[0],b(),l.show({iconUrl:"images/svg/bi_check2-circle.svg",backgroundColor:"#82C43C",message:"You can start the countdown",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1})):(l.show({iconUrl:"images/svg/bi_x-octagon.svg",backgroundColor:"#FC5A5A",message:"Please choose a date in the future",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1}),u())}};c.addEventListener("click",o=>{o.preventDefault();const n=setInterval(()=>{u();const r=d-Date.now(),s=F(r);r>0?(h.textContent=i(s.days),y.textContent=i(s.hours),C.textContent=i(s.minutes),v.textContent=i(s.seconds)):(clearInterval(n),l.show({iconUrl:"../img/svg/bi_check2-circle.svg",backgroundColor:"#FC5A5A",message:"The timer has stopped",messageColor:"#FAFAFB",messageSize:"16px",position:"topCenter",close:!1}))},1e3)});function F(o){const t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),f=Math.floor(o%864e5%36e5/6e4),m=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:f,seconds:m}}function i(o){let n=String(o);return n.length<2?n.padStart(2,"0"):n}p(g,S);
//# sourceMappingURL=commonHelpers3.js.map
