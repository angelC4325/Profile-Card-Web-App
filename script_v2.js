const profileContainer = document.getElementById("profile-container");
const arr = ["john doe",28,"web developer","pasionate about taching others","../profile_card_web_app/profile.png"]
const profileCard = '<div class="card">'+
                        '<img src= "'+arr[4]+'" alt="profile Picture">'+
                        '</img><h2>'+arr[0]+'</h2>'+
                        '<p>age: '+arr[1]+'</p>'+
                        '<p>occupation: '+arr[2]+'</p>'+
                        '<p>'+arr[3]+'</p>'+
                    '</div>';
profileContainer.innerHTML=profileCard;