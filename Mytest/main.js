function bug(){
    for(let i = 1; i < 0; i++){
       hack += '<div class="hack">'+
                    'Pane No Systema'+
                    'dados vazados' +
                            '</div>'


                           document.getElementsByClassName('hack').innerHTML += hack
                           console.log(hack)
    }
}

bug();