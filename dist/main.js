(()=>{"use strict";const t=(()=>{const t=[{title:"hola",description:"que tal",status:"undone",position:"0"},{title:"hola2",description:"que tal2",status:"done",position:"1"},{title:"hola3",description:"que tal3",status:"undone",position:"2"},{title:"hola4",description:"que tal4",status:"done",position:"3"},{title:"hola5",description:"que tal5",status:"undone",position:"4"}];return{setTask:e=>{t.push(e)},getArray:()=>t,modifyTask:(e,s,a)=>{t[e][s]=a}}})(),e=(t,e)=>{t.innerHTML="",e.forEach(((e,s)=>{const a=document.createElement("div");a.setAttribute("class","task");const n=document.createElement("span");n.setAttribute("value",s),"undone"===e.status?n.setAttribute("class","taskTitle"):n.setAttribute("class","taskTitle strikeText"),n.innerText=e.title;const i=document.createElement("span");i.setAttribute("value",s),"undone"===e.status?i.setAttribute("class","taskDescription"):i.setAttribute("class","taskDescription strikeText"),i.innerText=e.description;const r=document.createElement("img");"undone"===e.status?r.setAttribute("src","../src/images/unmarked_checkbox.png"):r.setAttribute("src","../src/images/marked_checkbox.png"),r.setAttribute("value",s),r.setAttribute("class","checkImage");const o=document.createElement("img");o.setAttribute("src","../src/images/edit.png"),o.setAttribute("class","editImage taskImage");const c=document.createElement("img");c.setAttribute("src","../src/images/bin.png"),c.setAttribute("class","deleteImage taskImage"),a.appendChild(r),a.appendChild(n),a.appendChild(o),a.appendChild(i),a.appendChild(c),t.appendChild(a)}))};document.getElementById("taskContainer"),document.getElementById("addTaskButton"),addTaskButton.addEventListener("click",(()=>{var a;(a=addTaskButton).classList.contains("rotate45")?a.classList.replace("rotate45","rotate0"):(a.classList.remove("rotate0"),a.classList.add("rotate45")),e(taskContainer,t.getArray()),s()}));const s=()=>{[...document.querySelectorAll(".checkImage")].forEach((a=>{a.addEventListener("click",(a=>{var n,i,r;n=a.target.attributes[1].value,i=t.getArray(),r=t.modifyTask,"undone"===i.find((t=>t.position===n)).status?r(n,"status","done"):r(n,"status","undone"),e(taskContainer,t.getArray()),s()}))}))}})();