function addUser(){
    player1name = document.getElementById("player1_name_input").value;
    player2name = document.getElementById("player2_name_input").value;
    localStorage.setItem("nameofplayer1",player1name);
    localStorage.setItem("nameofplayer2",player2name);
    window.location = "game_page.html";
}

