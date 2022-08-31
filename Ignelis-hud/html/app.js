window.addEventListener('load', function() {
})

let moneyFormat = Intl.NumberFormat('es-ES')
window.addEventListener('message', function(event) {
    var v = event.data
    var item = event.data;
    var come = new ldBar('#food')
    var water = new ldBar('#water')

    switch(v.action) {
        case 'updateTalking': 
            come.set(v.hunger)
            water.set(v.thirst)
            $('.userid').text(v.pid)
            $('#plcount').text(`${item.pcount}/64`)
        break;

        case 'UpdateData':
            UpdateData(v.key, v.value, v.key2, v.value2)
        break; 
    }
})

function UpdateData(key, value, key2, value2) {
    
    if (key2 == 'grado') {
        $(`.${key}`).text(value)
        $(`.${key2}`).text(value2)
    } else {
        $(`.${key}`).text(moneyFormat.format(value))
    }

}