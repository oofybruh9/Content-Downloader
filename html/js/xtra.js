var li = document.querySelectorAll(".coolL li")
for(var i = 0;i<li.length;i++){
    li[i].addEventListener("click", myScript);
}

function myScript(e){
    if (e.target.attributes.id.value == 1){
        const image = document.getElementById('logo');
        const btn = document.querySelector('#dl');
        image.src = "../img/retroarch.jpg"
        document.getElementById('um_actually').innerText = "RetroArch is a frontend for emulators, game engines and media players. Among other things, it enables you to run classic games on a wide range of computers and consoles through its slick graphical interface. Settings are also unified so configuration is done once and for all. In addition to this, you are able to run original game discs (CDs) from RetroArch. RetroArch has advanced features like shaders, netplay, rewinding, next-frame response times, runahead, machine translation, blind accessibility features, and more!";
        btn.innerText = "Download RetroArch";
    } else if (e.target.attributes.id.value == 2) {
        const image = document.getElementById('logo');
        const btn = document.querySelector('#dl');
        image.src = "../img/snes9x.png";
        btn.innerText = "Download Snes9x";
        document.getElementById('um_actually').innerText = "Snes9x is a portable, freeware Super Nintendo Entertainment System (SNES) emulator. It basically allows you to play most games designed for the SNES and Super Famicom Nintendo game systems on your PC or Workstation; which includes some real gems that were only ever released in Japan.";
    } else if (e.target.attributes.id.value == 3) {
        const image = document.getElementById('logo');
        const btn = document.querySelector('#dl');
        image.src = "../img/mame.jpg";
        btn.innerText = "Download MAME";
        document.getElementById('um_actually').innerText = "MAME (formerly an acronym of Multiple Arcade Machine Emulator) is a free and open-source emulator designed to recreate the hardware of arcade games, video game consoles, old computers and other systems in software on modern personal computers and other platforms.";
    } else if (e.target.attributes.id.value == 4){
        const image = document.getElementById('logo');
        const btn = document.querySelector('#dl');
        const txt = document.getElementById('um_actually');
        image.src = "../img/ppsspp.jpg"
        btn.innerText = "Download PPSSPP";
        txt.innerText = "PPSSPP (an acronym for PlayStation Portable Simulator Suitable for Playing Portably) is a multi-platform, open-source PlayStation Portable emulator written in C++ with the aim of speed and portability. Its development is ongoing and is still in a beta state, but progress is fast and most games are already playable. It is also available as a libretro core for RetroArch."
    } else if (e.target.attributes.id.value == 5){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/dolphin.png";
        btn.innerText = "Download Dolphin";
        txt.innerText = "Dolphin is an open-source GameCube and Wii emulator that is also available as a libretro core for RetroArch.  Early development was supported by a very active homebrew scene led by fail0verflow (previously known as Team Twiizers). Dolphin's development is still very active as of 2024, with many contributors to its GitHub repository updating the emulator multiple times a week.";
    } else if (e.target.attributes.id.value == 6){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/mednafen.png";
        btn.innerText = "Download Mednafen";
        txt.innerText = "Mednafen (an acronym for My Emulator Doesn't Need A Frickin' Excellent Name, formerly Nintencer) is an open-source, multi-system emulator, driven from the command-line. Many of its cores are ports of other emulators; however, many of its cores are also original and are notable for their high quality, compatibility and accuracy.";
    } else if (e.target.attributes.id.value == 7){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/mgba.png";
        btn.innerText = "Download mGBA";
        txt.innerText = "mGBA is a free and open-source Game Boy/Color and Game Boy Advance emulator developed by endrift. Being written from scratch, it aims for speed, accuracy, and portability. As of yet, it's the most complete GBA emulation effort, passing the older project VBA and its forks. It is also available as a Libretro core for RetroArch. As of 0.9.0, mGBA with a stripped-down GUI has been integrated into Dolphin recently for games supporting connectivity features.";
    } else if (e.target.attributes.id.value == 8){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/gbep.png";
        btn.innerText = "Download GBE+";
        txt.innerText = "GBE+, full name GB Enhanced+, is an open-source Game Boy/Color, Game Boy Advance, Nintendo DS and Pokémon mini emulator with the goal of emulating various peripherals not covered before. In the beginning, the main features were tile replacement, for custom sprites in games, or coloring Game Boy games. Later Shonumi (Named D.S. Baxter) turned his attention to obscure peripherals and has made many of these and titles that need them emulated for the first time. Currently the graphic enhancements portion of the emulator is not longer maintained.";
    } else if (e.target.attributes.id.value == 9){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/kega.gif";
        btn.innerText = "Download Kega Fusion";
        txt.innerText = "Kega Fusion is a closed-source Sega SG-1000, SC-3000, SF-7000, Master System, Game Gear, Genesis/Mega Drive, SVP, Pico, Sega/Mega CD and 32X emulator. A high-quality emulator with high compatibility. Unfortunately, it's closed source and no longer updated. For this reason, other Sega Genesis emulators have surpassed it in terms of compatibility. Genesis Plus GX has 100% commercial game compatibility. However, it lacks the 32X support that Kega Fusion has, but PicoDrive and ares include 32X support.";
    } else if (e.target.attributes.id.value == 10){
        const image = document.getElementById('logo');
        const txt = document.getElementById('um_actually');
        const btn = document.querySelector('#dl');
        image.src = "../img/picodrive.gif";
        btn.innerText = "Download PicoDrive";
        txt.innerText = "PicoDrive is a source-available Sega Master System, Sega Game Gear, Sega Genesis/Sega Mega Drive, Sega CD/Sega Mega CD, Sega 32X and Sega Pico emulator. It was originally developed for the UIQ2, before moving onto the GP2X, PSP, and other handheld devices. The most actively developed version was for the GP2X, as well as being the best port, due to higher levels of optimization. PicoDrive is also available as a libretro core for RetroArch.";
    }
}

function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#khTranslator").css('color', '#212529');
    } 
    if(lng == 'kh'){
      $("#khTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#khTranslator").click(function(){
    translate('kh', 'lng-tag');
  });
});

async function execOpen() {
    await Neutralino.app.restartProcess({ args: '--mode=browser' });
}