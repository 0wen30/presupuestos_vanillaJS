window.addEventListener('load', cargarPagina);

const registroHistorico = (t,n) => {
    const li = document.createElement('li');
    li.innerText = n;
    const ul = document.getElementById(t);
    ul.insertBefore(li,ul.firstChild);
}

const sumarTipo = (t,n) =>{
    const ing = document.getElementById('ingresos')
    const egr = document.getElementById('egresos')
    const monto = t == 'ing' ? ing : egr;
    monto.innerText = parseInt(monto.innerText) + n
    document.getElementById('presupuesto').innerText = parseInt(ing.innerText) - parseInt(egr.innerText)
    registroHistorico(t,n)
}

function cargarPagina(){
    const boton = document.querySelector('#boton');
    boton.addEventListener('click',()=>{
        const tipo = document.querySelector('#tipo').value;
        const monto = document.querySelector('#monto').value;
        tipo == 'ingreso' 
            ? sumarTipo('ing',parseInt(monto, 10))
            : sumarTipo('egr',parseInt(monto, 10))
    });
}