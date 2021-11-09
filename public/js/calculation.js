let nmap = new Map(JSON.parse(localStorage.myMap));
console.log(nmap);
 
let basis_set = localStorage.getItem("basis-set");
console.log(basis_set);
localStorage.clear();
//clear local storage also after all the calculations
let gp = 0;
let cf = 0;
let p = ["px", "py", "pz"];
let d = ["dxy", "dyz", "dxz", "dx2y2", "dz2"];
let orbitals = [
  "1s",
  "2s",
  "2p",
  "3s",
  "3p",
  "3d",
  "4s",
  "4p",
  "4d",
  "4f",
  "5s",
  "5p",
  "5d",
  "5f",
  "6s",
  "6p",
  "6d",
  "7s",
  "7p",
];
let list = document.getElementById("splits");
solve();
function solve() {
  console.log("in function", nmap);
  for (let [ele, cou] of nmap) {
    console.log(" in loop");
    console.log(config);
 
    for (let i = 0; i < cou; i++) {
      let list_split = document.createElement("ul");
 
      let element = document.createElement("li");
      element.textContent = ele;
      // add line
 
      list.appendChild(element);
      for (let j = 0; j < orbitals.length; j++) {
        if (config[ele][orbitals[j]] != 0) {
          if (orbitals[j][1] == "p") {
            console.log("in p");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}p`;
            list_split.appendChild(outerli);
 
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}p<sub>x</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}p<sub>y</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}p<sub>z</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF<br>`; //list->list_split->ilist
 
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
 
            gp += 9;
            cf += 3;
            continue;
          }
          if (orbitals[j][1] == "d") {
            console.log("in d");
            let ilist = document.createElement("ul");
            let outerli = document.createElement("li");
            outerli.textContent = `${orbitals[j][0]}d`;
            list_split.appendChild(outerli);
 
            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}d<sub>xy</sub> <i class="bi bi-arrow-right"></i> 3GP , 1CF`;
            li2.innerHTML = `${orbitals[j][0]}d<sub>yz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li3.innerHTML = `${orbitals[j][0]}d<sub>xz</sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li4.innerHTML = `${orbitals[j][0]}d<sub>x<sup>2</sup>-y<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            li5.innerHTML = `${orbitals[j][0]}d<sub>z<sup>2</sup></sub> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>3GP , 1CF`;
            ilist.appendChild(li);
            ilist.appendChild(li2);
            ilist.appendChild(li3);
            ilist.appendChild(li4);
            ilist.appendChild(li5);
            list_split.appendChild(ilist);
            list.appendChild(list_split);
 
            gp += 15;
            cf += 5;
            continue;
          }
          if (orbitals[j][1] == "f") {
            console.log("in f" + " of" + ele + " " + config[ele][orbitals[j]]);
            gp += 21;
            cf += 7;
            continue;
          }
          if (orbitals[j][1] == "s") {
            console.log("in s");
            let li = document.createElement("li");
            li.innerHTML = `${orbitals[j][0]}s <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg> 3GP , 1CF`;
            list_split.appendChild(li);
            list.appendChild(list_split);
 
            gp += 3;
            cf += 1;
            continue;
          }
        }
      }
      let dash = document.createElement("ul");
      dash.innerHTML = "<hr>";
      dash.style.listStyleType = "none";
      dash.style.marginLeft = "-80px";
      list.appendChild(dash);
    }
  }
  var li = document.createElement("ul");
  var li2 = document.createElement("ul");
  li.style.listStyleType = "none";
  li2.style.listStyleType = "none";
  li.innerHTML = `<center> <p style="margin-right=100px;">TOTAL COUNT </center> <br> <center><b><h3 style="display: inline;">Gaussian Primitives</h3></b> <i class="fas fa-equals"></i> ${gp}</center>`;
  li2.innerHTML = `<center><b> <h3 style="display: inline;">Contracted Functions</h3> </b><i class="fas fa-equals"></i> ${cf}</center>`;
 
  list.appendChild(li);
  list.appendChild(li2);
  console.log(gp + " " + cf);
}



