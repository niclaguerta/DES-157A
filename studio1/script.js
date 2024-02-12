(function(){
    'use strict';
    console.log('reading js');
    
    document.getElementById('sendButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = "showing";

        generateMadlib();

        document.querySelector('#overlay .close').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('overlay').className = "hidden";
            
            document.getElementById('madlib').innerHTML = "";
        });
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
            
            // Clear the madlib content when closing the overlay
            document.getElementById('madlib').innerHTML = "";
        }
    });
    
    function generateMadlib() {
        const nickname1 = document.querySelector('#nickname1').value;
        const number = document.querySelector('#number').value;
        const time = document.querySelector('#time').value;
        const adj1 = document.querySelector('#adj1').value;
        const band = document.querySelector('#band').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb1 = document.querySelector('#verb1').value;
        const popstar = document.querySelector('#popstar').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const verb4 = document.querySelector('#verb4').value;
        const celeb = document.querySelector('#celeb').value;
        const movie = document.querySelector('#movie').value;
        const catchphrase = document.querySelector('#catchphrase').value;
        const noun = document.querySelector('#noun').value;
        const nickname2 = document.querySelector('#nickname2').value;
        
        let myText;
        
        if(nickname1 == ''){
            myText = "Please provide a nickname. (example: pookie)";
            document.querySelector('#nickname1').focus();
        }
        else if(number == ''){
            myText = "Please provide an adjective. (example: stinky)";
            document.querySelector('#number').focus();
        }
        else if (time == ''){
            myText = "Please provide a unit of time. (example: seconds)";
            document.querySelector('#time').focus();
        }
        else if (adj1 == ''){
            myText = "Please provide an adjective. (example: stinky)";
            document.querySelector('#adj1').focus();
        }
        else if (band == ''){
            myText = "Please provide a band. (example: One Direction)";
            document.querySelector('#band').focus();
        }
        else if (adj2 == ''){
            myText = "Please provide an adjective. (example: stinky)";
            document.querySelector('#adj2').focus();
        }
        else if (verb1 == ''){
            myText = "Please provide a verb. (example: slide)";
            document.querySelector('#verb1').focus();
        }
        else if (popstar == ''){
            myText = "Please provide a female popstar. (example: Miley Cyrus)";
            document.querySelector('#popstar').focus();
        }
        else if (verb2 == ''){
            myText = "Please provide a verb. (example: slide)";
            document.querySelector('#verb2').focus();
        }
        else if (verb3 == ''){
            myText = "Please provide a verb. (example: slide)";
            document.querySelector('#verb3').focus();
        }
        else if (verb4 == ''){
            myText = "Please provide a verb. (example: slide)";
            document.querySelector('#verb4').focus();
        }
        else if (celeb == ''){
            myText = "Please provide a celebrity. (example: Keanu Reeves)";
            document.querySelector('#celeb').focus();
        }
        else if (movie == ''){
            myText = "Please provide a movie title. (example: Mean Girls)";
            document.querySelector('#movie').focus();
        }
        else if (catchphrase == ''){
            myText = "Please provide a catchphrase. (example: Bazinga!)";
            document.querySelector('#catchphrase').focus();
        }
        else if (noun == ''){
            myText = "Please provide an adjective. (example: stinky)";
            document.querySelector('#noun').focus();
        }
        else if (nickname2 == ''){
            myText = "Please provide a nickname. (example: pookie)";
            document.querySelector('#nickname2').focus();
        }
        else {
            myText = `We need to talk. After ${number} ${time} of being together, I've realized that we're more ${adj1} than a ${band} reunion tour.
                
            I've always loved your ${adj2} style and how you ${verb1} like nobody's watching. But, my inner ${popstar} tells me it's time to ${verb2} on my own. 
            
            I need to ${verb3} myself, to explore, to ${verb4} like ${celeb} in ${movie}. So, I'm saying "${catchphrase}" to us. 
            
            Please understand, that this isn't about ${noun}; it's about me. 
            
            So, goodbye.
            
            -${nickname2}`;
        }

        // Display the generated madlib
        document.getElementById('madlib').innerHTML = myText;

        let styledText = `<div id="overlay" class="showing">
        <article id="madlib">
            <p>${myText}</p>
            <button class="close">close</button>
        </article>
         </div>`;

document.getElementById('madlib').innerHTML = styledText;
    }

})();
