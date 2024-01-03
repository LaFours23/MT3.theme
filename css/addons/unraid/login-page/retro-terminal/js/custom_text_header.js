
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> 

___  ________ _____   _____                          
|  \/  |_   _|____ | /  ___|                         
| .  . | | |     / / \ `--.  ___ _ ____   _____ _ __ 
| |\/| | | |     \ \  `--. \/ _ \ '__\ \ / / _ \ '__|
| |  | | | | .___/ / /\__/ /  __/ |   \ V /  __/ |   
\_|  |_/ \_/ \____/  \____/ \___|_|    \_/ \___|_|   
                                                    </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
