'use strict';

        document.getElementById('btn').onclick = function(event) {
            event.preventDefault();  // Prevent form submission

            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const note = document.getElementById('note').value.trim();

            // Validation logic
            if (fullname === '' || email === '' || note === '') {
                // Display the success message if fields are empty
                document.getElementById("mailSuccess").style.display = 'none';

                
            } else {
                
                document.getElementById("mailSuccess").style.display = 'block';

                setTimeout(function() {
                    location.reload();
                }, 1000);
               
            }
        };

