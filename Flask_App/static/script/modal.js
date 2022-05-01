const button = document.getElementById('btn');
button.onclick = function click() {
        $("#RetiScan").modal('show');
};

function close(){
        $("#RetiScan").modal('hide');
}

function main(){
        close();
}