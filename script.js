const root=document.documentElement;
document.querySelectorAll(".theme-toggle").forEach(button=>button.addEventListener("click",()=>{
 const dark=root.dataset.theme!=="dark";root.dataset.theme=dark?"dark":"light";
 button.setAttribute("aria-pressed",String(dark));
 button.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");
 const label=button.querySelector(".theme-label");if(label)label.textContent=dark?"Light mode":"Dark mode";
}));
document.querySelectorAll("[data-current-year]").forEach(el=>el.textContent=String(new Date().getFullYear()));
