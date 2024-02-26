(function(){
    'use strict';
    console.log('reading js');

    document.addEventListener('DOMContentLoaded', function() {
        function openOverlay(overlayNumber) {
            var overlay = document.getElementById('overlay' + overlayNumber);
            overlay.classList.remove('hidden');
        }
    
        for (let i = 1; i <= 6; i++) {
            let img = document.getElementById('image' + i);
            img.addEventListener('click', function() {
                openOverlay(i);
            });
        }
    
        function closeOverlay() {
            var overlays = document.querySelectorAll('section');
            overlays.forEach(function(overlay) {
                overlay.classList.add('hidden');
            });
        }
    
        var closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                closeOverlay();
            });
        });
    });
    
})();