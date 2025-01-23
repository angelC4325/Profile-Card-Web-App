const name1 = "john doe";
const age = 28;
const occupation = "web developer";
const bio = "pasionate about taching others";
const profilePicture = "../profile_card_web_app/profile.png";
const profileContainer = document.getElementById("profile-container");
const arr = ["john doe",28,"web developer","pasionate about taching others","../profile_card_web_app/profile.png"]
const profileCard = '<div class="card">'+
                        '<img src= "'+profilePicture+'" alt="profile Picture">'+
                        '</img><h2>'+name1+'</h2>'+
                        '<p>age: '+age+'</p>'+
                        '<p>occupation: '+occupation+'</p>'+
                        '<p>'+bio+'</p>'+
                    '</div>';
profileContainer.innerHTML=profileCard;