const main = document.getElementById("tables");

function generateRow(st,en,sp,base) {
    let multiTable = ""
    
    for (let i = st; i < (en + st); i += sp) {
        const color = Math.floor(Math.random() * 360);
        multiTable += `
            <div class="table" style="background-color: hsl(${color},100%,50%);">
                <h2 class="t-title">${i.toString(base)}</h2>
                <ul class="multiplication" style="background-color: hsl(${color},100%,70%);">
                    ${generateTables(st,en,sp,base,i)}
                </ul>
            </div>`;
        
        
    }
    return multiTable
}

function generateTables(start,end,step,output,startMulti) {
    let multi = "";
    for (let i = start; i < (end + start); i += step) {
        multi += `<li class="t-index">${startMulti.toString(output)} x ${i.toString(output)} = <b>${(startMulti * i).toString(output)}</b></li>`;
        
    }
    return multi;
}

main.innerHTML = generateRow(1,10,1,10)