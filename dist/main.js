(()=>{"use strict";const t=t=>{localStorage.setItem("tasks",JSON.stringify(t))},e=(()=>{let t=[];return{setTask:e=>{t.push(e)},getArray:()=>t,modifyTask:(e,s,a)=>{t[e][s]=a},setArray:e=>{t=[...e]},removeTask:e=>{t.splice(e,1)}}})(),s=(t,e)=>{t.innerHTML="",e.forEach(((e,s)=>{const a=document.createElement("div");a.setAttribute("class","task"),a.setAttribute("id",s);const r=document.createElement("span");r.setAttribute("value",s),"undone"===e.status?r.setAttribute("class","taskTitle"):r.setAttribute("class","taskTitle strikeText"),r.innerText=e.title;const i=document.createElement("span");i.setAttribute("value",s),"undone"===e.status?i.setAttribute("class","taskDescription"):i.setAttribute("class","taskDescription strikeText"),i.innerText=e.description;const n=document.createElement("img");"undone"===e.status?n.setAttribute("src","../src/images/unmarked_checkbox.png"):n.setAttribute("src","../src/images/marked_checkbox.png"),n.setAttribute("value",s),n.setAttribute("class","checkImage");const o=document.createElement("img");o.setAttribute("value",s),o.setAttribute("src","../src/images/edit.png"),o.setAttribute("class","editImage taskImage");const c=document.createElement("img");c.setAttribute("value",s),c.setAttribute("src","../src/images/bin.png"),c.setAttribute("class","deleteImage taskImage"),a.appendChild(n),a.appendChild(r),a.appendChild(o),a.appendChild(i),a.appendChild(c),t.appendChild(a)}))},a=t=>{t.classList.toggle("visibility")};(()=>{const r=document.getElementById("taskContainer"),i=document.getElementById("addTaskButton"),n=document.getElementById("addTaskForm"),o=document.querySelector(".viewBlocker"),c=document.getElementById("addTaskFormTitle"),d=document.getElementById("title"),l=document.getElementById("description");let u="";i.addEventListener("click",(()=>{c.textContent="Add a task",form.reset(),m(),d.focus(),s(r,e.getArray()),A(),y(),g()})),o.addEventListener("click",(()=>{m()})),n.addEventListener("keydown",(t=>{"Escape"!==t.key||o.classList.contains("visibility")||m()})),n.addEventListener("submit",(a=>{if("Add a task"===c.textContent){let i;a.preventDefault(),i=0===e.getArray().length?0:e.getArray().length;const n={title:form.title.value,description:form.description.value,status:"undone",position:i};e.setTask(n),m(),s(r,e.getArray()),A(),y(),g(),form.reset(),t(e.getArray())}else if("Modify the task"===c.textContent){a.preventDefault();const i=e.getArray().find((t=>t.title===u));e.modifyTask(i.position,"title",form.title.value),e.modifyTask(i.position,"description",form.description.value),m(),s(r,e.getArray()),A(),y(),g(),form.reset(),t(e.getArray())}})),document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("library")?e.setArray(JSON.parse(localStorage.getItem("tasks"))):t(e.getArray()),s(r,e.getArray()),A(),y(),g()}));const m=()=>{var t;(t=i).classList.contains("rotate45")?t.classList.replace("rotate45","rotate0"):(t.classList.remove("rotate0"),t.classList.add("rotate45")),a(o),a(n)},g=()=>{[...document.querySelectorAll(".editImage")].forEach((t=>{t.addEventListener("click",(t=>{const s=e.getArray().find((e=>e.position==t.target.attributes[0].value));((t,e,s,a)=>{t.textContent="Modify the task",e.value=a.title,s.value=a.description})(c,d,l,s),u=s.title,m()}))}))},y=()=>{[...document.querySelectorAll(".deleteImage")].forEach((a=>{a.addEventListener("click",(a=>{e.removeTask(a.target.attributes[0].value),e.getArray().forEach(((t,s)=>{e.modifyTask(s,"position",s)})),s(r,e.getArray()),y(),A(),g(),t(e.getArray())}))}))},A=()=>{[...document.querySelectorAll(".checkImage")].forEach((a=>{a.addEventListener("click",(a=>{var i,n,o;i=a.target.attributes[1].value,n=e.getArray(),o=e.modifyTask,"undone"===n.find((t=>t.position==i)).status?o(i,"status","done"):o(i,"status","undone"),s(r,e.getArray()),A(),y(),g(),t(e.getArray())}))}))}})()})();