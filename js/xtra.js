var li = document.querySelectorAll(".coolL li")
for(var i = 0;i<li.length;i++){
    li[i].addEventListener("click", myScript);
}

function myScript(e){
    if (e.target.attributes.id.value == 1){
        const image = document.getElementById('logo');
        image.src = "../img/retroarch.jpg"
        document.getElementById('um_actually').innerText = "RetroArch is a frontend for emulators, game engines and media players. Among other things, it enables you to run classic games on a wide range of computers and consoles through its slick graphical interface. Settings are also unified so configuration is done once and for all. In addition to this, you are able to run original game discs (CDs) from RetroArch. RetroArch has advanced features like shaders, netplay, rewinding, next-frame response times, runahead, machine translation, blind accessibility features, and more!";
    } else if (e.target.attributes.id.value == 2) {
        const image = document.getElementById('logo');
        image.src = "../img/snes9x.png";
        document.getElementById('um_actually').innerText = "Snes9x is a portable, freeware Super Nintendo Entertainment System (SNES) emulator. It basically allows you to play most games designed for the SNES and Super Famicom Nintendo game systems on your PC or Workstation; which includes some real gems that were only ever released in Japan.";
    } else if (e.target.attributes.id.value == 3) {
        const image = document.getElementById('logo');
        image.src = "../img/mame.jpg";
        document.getElementById('um_actually').innerText = "MAME (formerly an acronym of Multiple Arcade Machine Emulator) is a free and open-source emulator designed to recreate the hardware of arcade games, video game consoles, old computers and other systems in software on modern personal computers and other platforms.";
    } else if (e.target.attributes.id.value == 4)
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        image.src = "../img/ppsspp.jpg"
        txt.innerText = "PPSSPP (an acronym for PlayStation Portable Simulator Suitable for Playing Portably) is a multi-platform, open-source PlayStation Portable emulator written in C++ with the aim of speed and portability. Its development is ongoing and is still in a beta state, but progress is fast and most games are already playable. It is also available as a libretro core for RetroArch."
    }
}