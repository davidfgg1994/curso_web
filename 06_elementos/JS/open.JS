function main() { 
    document.querrySelector('#btn-info'). addEventListener (
        'click' , mostrar
    )
    document.querrySelector('#btn-cerrar'). addEventListener (
        'click' , cerrar
        .addEventListener ('click', cerrar)

        function mostrar () {
            document.querySelector ('#dlg-sample'). open = true
        }
        function cerrar () {
            document.querySelector ('#dlg-sample'). close = true
        }
    
   }

document.addEventListener ('DOMCotentLoaded', main)