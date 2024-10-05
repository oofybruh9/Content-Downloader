var li = document.querySelectorAll(".coolL li")
for(var i = 0;i<li.length;i++){
    li[i].addEventListener("click", myScript);
}

function myScript(e){
    if (e.target.attributes.id.value == 1){
        const image = document.getElementById('logo');
        image.src = "../img/logo/retroarch.jpg"
        document.getElementById('um_actually').innerText = "RetroArch is a frontend for emulators, game engines and media players. Among other things, it enables you to run classic games on a wide range of computers and consoles through its slick graphical interface. Settings are also unified so configuration is done once and for all. In addition to this, you are able to run original game discs (CDs) from RetroArch. RetroArch has advanced features like shaders, netplay, rewinding, next-frame response times, runahead, machine translation, blind accessibility features, and more!";
    } else if (e.target.attributes.id.value == 2) {
        const image = document.getElementById('logo');
        image.src = "../img/logo/snes9x.png";
        document.getElementById('um_actually').innerText = "Snes9x is a portable, freeware Super Nintendo Entertainment System (SNES) emulator. It basically allows you to play most games designed for the SNES and Super Famicom Nintendo game systems on your PC or Workstation; which includes some real gems that were only ever released in Japan.";
        
    }
}