let addInput=document.querySelector(".controll__addInput"),addBtn=document.querySelector(".controll__addBtn"),checkAll=document.querySelector(".checkAll"),importantAll=document.querySelector(".importantAll"),deleteAll=document.querySelector(".deleteAll"),deleteChecked=document.querySelector(".deleteChecked"),list=document.querySelector(".todoList"),todoList=[];function checkList(){localStorage.getItem("todo")&&(todoList=JSON.parse(localStorage.getItem("todo")),displayList()),checkDoneMsg(),checkImpMsg(),checkEmptyList(),listenersOnListItem()}function checkDoneMsg(t){todoList.forEach((t,e)=>{t.checked?(list.children[e].classList.add("doneMsg"),list.children[e].children[0].setAttribute("checked","")):t.checked||(list.children[e].classList.remove("doneMsg"),list.children[e].children[0].removeAttribute("checked"))})}function checkImpMsg(t){todoList.forEach((t,e)=>{t.important&&list.children[e].classList.add("importantMsg")})}function checkEmptyList(){0==todoList.length&&(list.innerHTML="It`s empty here!")}function listenersOnListItem(){list.addEventListener("change",makeDoneMsg);let t=document.querySelectorAll(".todoList__item"),e=document.querySelectorAll(".todoList__importantBtn"),o=document.querySelectorAll(".todoList__deleteBtn");for(let i=0;i<t.length;i++)e[i].addEventListener("click",makeImportantMsg),o[i].addEventListener("click",deleteMsg)}function addToList(t){if(t.preventDefault(),""==addInput.value||!addInput.value.trim())return void alert("Write something");for(let t=0;t<todoList.length;t++)if(todoList[t].todo=todoList[t].todo.trim(),addInput.value=addInput.value.replace(/\s+/g," ").trim(),todoList[t].todo===addInput.value)return alert("This task is alreadu exist"),void(addInput.value="");let e={todo:addInput.value,checked:!1,important:!1};todoList.push(e),displayList(),listenersOnListItem(),addInput.value="",localStorage.setItem("todo",JSON.stringify(todoList))}function displayList(){let t="";todoList.forEach((e,o)=>{t+=`\n    <li id="todoList_listItem_${o}" class="todoList__item">\n      <input type="checkbox" id="todoList_item_${o}" class="todoList__checkbox" >\n      <label for="todoList_item_${o}" class="todoList__label">${e.todo}</label>\n      <button id="todoList_importantBtn_${o}" class="todoList__importantBtn">Important</button>\n      <button id="todoList_deleteBtn_${o}" class="todoList__deleteBtn">Delete</button>\n    </li>\n    `,list.innerHTML=t})}function makeDoneMsg(t){let e=t.target.getAttribute("id"),o=list.querySelector("[for="+e+"]").innerHTML;t.target.parentNode.classList.toggle("doneMsg"),todoList.forEach(t=>{t.todo===o&&(t.checked=!t.checked),localStorage.setItem("todo",JSON.stringify(todoList))}),checkDoneMsg()}function makeImportantMsg(t){t.target.parentNode.classList.toggle("importantMsg");let e=t.target.getAttribute("id").split("_")[2];todoList.forEach((t,o)=>{o==e&&(t.important=!t.important),localStorage.setItem("todo",JSON.stringify(todoList))})}function deleteMsg(t){let e=t.target.getAttribute("id").split("_")[2],o=t.target.parentNode;todoList.forEach((t,i)=>{i==e&&(todoList.splice(i,1),o.remove(),displayList(),listenersOnListItem()),localStorage.setItem("todo",JSON.stringify(todoList))}),checkEmptyList()}function checkAllFn(t){t.preventDefault(),todoList.forEach(t=>{t.checked||(t.checked=!t.checked),localStorage.setItem("todo",JSON.stringify(todoList))}),checkDoneMsg()}function importantAllFn(t){t.preventDefault(),todoList.forEach(t=>{t.important||(t.important=!t.important),localStorage.setItem("todo",JSON.stringify(todoList))}),checkImpMsg()}function deleteAllFn(t){t.preventDefault(),todoList.length=0,localStorage.setItem("todo",JSON.stringify(todoList)),checkEmptyList()}function deleteCheckedFn(t){t.preventDefault();for(let t=todoList.length-1;t>=0;t--)todoList[t].checked&&(todoList.splice(t,1),localStorage.setItem("todo",JSON.stringify(todoList)));displayList(),checkEmptyList()}window.addEventListener("load",checkList),addBtn.addEventListener("click",addToList),checkAll.addEventListener("click",checkAllFn),importantAll.addEventListener("click",importantAllFn),deleteAll.addEventListener("click",deleteAllFn),deleteChecked.addEventListener("click",deleteCheckedFn);