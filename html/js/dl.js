function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let username = getCookie("emu");
let textToRemove = "Download ";
let newText = username.replace(textToRemove, "");
console.log(newText.trim());


$('#terminal').terminal({
  install: function(){
    console.log('Starting...');
    this.echo('Starting installation service');
    this.echo('\r\nConfirm Installation??????');
    $.terminal.forms.radio(this, {message: "\nConfirm?", items:{ yes: 1, no: 2}, name: "conf"}).then (conf => {
      if (conf == "1"){
        this.echo("\nOkie Dokie! :)");
        $.terminal.forms.password(this, {message:"\nPassword for sudo", prompt: "password4sudo: ", name: "pwd"}).then(pwd =>{
          console.log("echo " +pwd+ " | sudo -s apt-get install pgk -y");//temp script;
          console.log(newText.trim());   //prints emulator name
          this.read("prefered emulator installation path (Must exist): ", pAtH => {
            this.echo("Set" +pAtH+ " as installation path")
          })
          if (newText.trim() == "RetroArch"){
            this.echo("Downloading RetroArch");
            var os = "Windows"; // Linux or Windows
            if (os == "Linux"){
            this.echo("\nVerifying if Snapd is installed")
            var snap = "the snap command blablablablablablablablablablablablablablablablablablablabla. snap <cool> <crapz>";
            let rSnap = snap.includes("snap <");
            if (rSnap){
              this.echo("\nGreat! You have Snap installed!");
              /*
              let info = await Neutralino.os.execCommand('echo "+pwd+" | sudo apt-get install pkg', {background: true});
              console.log(`${info.stdOut}`);
              this.echo(`${info.stdOut}`)
              */
            } else {
              this.echo("\nSnap was not found, and due not knowing what os you have, i can't install it.");
              this.echo("\nTo install snap, check [[!;;;;https://snapcraft.io/docs/installing-snapd]this] out.");
              return 418;
          }
          } else if (os == "Windows"){
            this.echo("Due to RetroArch updating very often, i can't install it.");
            this.echo("However, You can install it [[!;;;;https://retroarch.com/]here")
            return 418;
          }
          } else if (newText.trim() == "Snes9x"){
            if (os == "Linux"){
              if (NL_ARCH !== "x64"){
                this.echo("Your architecture, " +NL_ARCH+ " does not have an official build for snes9x. You'll have to get the RetroArch version on Snes9x");
                return 418;
              } else {
              /*
              let sn9x = await Neutralino.os.execCommand('curl -s https://api.github.com/repos/snes9xgit/snes9x/releases/latest | grep "browser_download_url.*AppImage" | cut -d : -f 2,3 | tr -d \" | wget -qi -');
              console.log(`${sn9x.stdOut}`);
              this.echo(`${sn9x.stdOut}`);
              */
              }
            } else if (os == "Windows"){
              if (NL_ARCH == "ia32"){
                /*
                let sn9w = await Neutralino.os.execCommand('for /f "tokens=1,* delims=:" %%A in ('curl -kLs https://api.github.com/snes9xgit/snes9x/releases/latest ^| find "browser_download_url*win32.zip"') do (curl -kOL %%B)');
                console.log(`${sn9w.stdOut}`);
                this.echo(`${sn9w.stdOut}`);
                */
              }else{
                /*
                let sn9w = await Neutralino.os.execCommand('for /f "tokens=1,* delims=:" %%A in ('curl -kLs https://api.github.com/repos/snes9xgit/snes9x/releases/latest ^| find "browser_download_url*win32-x64.zip"') do (curl -kOL %%B)');
                console.log(`${sn9w.stdOut}`);
                this.echo(`${sn9w.stdOut}`);
                */
              }
            }
          } else if (newText.trim() == "MAME"){
            if (os == "Linux"){
              this.echo("Check4Snapd...");
              if (rSnap){
                this.echo("Snap found! Continuing...")
                /*
                let mame = await Neutralino.os.execCommand('echo ' +pwd+ " | sudo -S snap install mame");
                console.log(`${mame.stdOut}`);
                this.echo(`${mame.stdOut}`);
                */
              } else {
                this.echo("Snap not found. You'll have to install [[!;;;;https://snapcraft.io/docs/installing-snapd]snap manually]");
                return 418;
              }
            } else if (os == "Windows"){
              if(NL_ARCH == "x64"){
                /*
                let mamw = await Neutralino.os.execCommand('for /f "tokens=1,* delims=:" %%A in ('curl -kLs https://api.github.com/repos/mamedev/mame/releases/latest ^| find "browser_download_url*_64bit.exe"') do (curl -kOL %%B)');
                console.log(`${mamw.stdOut}`);
                this.echo(`${mamw.stdOut}`);
                */
              } else if (NL_ARCH == "ia32"){
                /*
                let mamw = await Neutralino.os.execCommand('for /f "tokens=1,* delims=:" %%A in ('curl -kLs https://api.github.com/repos/mamedev/mame/releases/latest ^| find "browser_download_url*s.exe"') do (curl -kOL %%B)');
                console.log(`${mamw.stdOut}`);
                this.echo(`${mamw.stdOut}`);
                */
              }
            }
          } else if (newText.trim() == "PPSSPP"){
            if (os)
          }
        })
      } else {
        this.echo("\nAwwwwwww! :(");
        return 418;
      }
    });
  },
  help: function(){
    this.echo('help - prints this message\r\nls - lists fake files\r\ninstall - installs your files\r\nback - exits to main menu\r\ncat - a working cat!\r\ngithub - echos link to repository\r\nexitApp - Exits the app completely\r\n');
  },
  ls: function(){
    this.echo('a\r\nbunch\r\nof\r\nfiles');
  },
  back: function(){
    this.echo('exiting...');
    window.location.replace("../index.html");
  },
  cat: function(args){
    if (args == "a"){
      this.echo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    } else if (args == "bunch"){
      this.echo("Honey Bunches of Oats (TM)");
    } else if (args == "of"){
      this.echo("sudo apt install ContentDownloader");
    } else if (args == "files"){
      this.echo("a\r\nbunch\r\nof\r\nfiles");
    } else {
      this.echo("cat: " +args+ ": The file or directory doesn't exist.");
    }
  },
  github: function(){
    this.echo("[[!;;;;https://github.com/oofybruh9/Content-Downloader]Visit this app's repository]");
  },
  exitApp: function(){
    this.echo("Exiting App...");
    // await Neutralino.app.exit();
  },
  checkBash: function(){
    this.echo("checking for Bash");
    /*
    let bash = await Neutralino.os.execCommand('bash --version');
    console.log(`${bash.stdOut}`);
    this.echo(`${bash.stdOut}`);
    */
    var bash = "ERROR";
    let result = bash.includes("GNU bash");
    if (result){
      this.echo("You have Bash installed!");
    } else {
      this.echo("Sorry, you don't have bash installed.");
      this.echo("However, you can install it using this [[!;;;;https://ioflood.com/blog/install-bash-shell-linux/]step-by-step guide]")
    }
  }
}, {
  greetings: "                                               @%##@                   @#%@                         \r\n                                             @%*==*@                 @#+=#@                         \r\n                                            @#=--=*@               @%*=-=#@                         \r\n                                          @%+----=*@             @%*=----*%                         \r\n                                         @*=--==-=*@            @#=--=-==*%                         \r\n                                       @%=--=--:--*%          @%+--==---=*#                         \r\n                                      @+---=--::-=*%         @#---=--::--+*                         \r\n                                    @#==----::::-=+%       @%==----::::--+*                         \r\n                                   @+==--=-:::::-=+%      @+=--=--:::::--=*                         \r\n                                 @#+=---=-::::::-=+#    @#==--=----::::--=*                         \r\n                                @*==----::::::::-+#%%@@%+=--=++=--===+=--=*                         \r\n                               %+=---=-::::::-=+=-::::-++=--++::::::::-++=*@                        \r\n                              #+=---=-::----=+-:::::::::#****#*+-:::::::++*@                        \r\n                             %*++++****++++#+:::::::--+*=-------=+++=:::*#%@                        \r\n                            @%+=----------=*=:::-++*+=-------------=+***+=#@                        \r\n                            #+=------------=+*+*+=====------------====---=#@                        \r\n                           @#=----------------===+**+=++=-------=+*+**+==-*%                        \r\n                           @#=---------------=+*-       .=+----+:     .++=+#                        \r\n                           @#=-------------==+=.          :*--+- ...   .===*                        \r\n                           @#=-------------=+=    .....    ==-#..+@+.  .++=#                        \r\n                           @#=------------==*.   .=%@@-.   .#=#.=@@@=  .++=#@                       \r\n                           @#=------------=+-    :#@@@#:   .#=%=+@@@*===##*%@@@@@@                  \r\n                           @*=------------=*:    :#@@@%:    +-----::::-*%%*++++++%@                 \r\n                           @*=------------=*:    .+@@@=.    +----:::::-*%%%%###%%%@                 \r\n                           @*=------------===     .:-:.    .#---:::::::-#%%%%%%%%%@                 \r\n                            *=-------------=*.             -*--:::::::::-*%%%%%%%%@                 \r\n                            *+-------------==+:           :*--::::::::::::+%%%%%%@@                 \r\n                            *+---------------=+=..      .=*--::::::::::::::-*%%%#%                  \r\n                            #+-----------------=++--==-+*--:::::::::::::::::::-:-@       @**#       \r\n                            #*--------------=====-----::::::::::::::::::::::::::*       @*::+%@%#%  \r\n                            %*=---------===-=-----::::--:::::::::::::::::::::::-@    @%#%+::=#=::=% \r\n                            @#=------===--------::-=*#*=-::::::::::::::::::::::#    @#-:-=:::::::*% \r\n                            @*------------------:=+-::==::::::::::::::::::::::+%     #+::::-::::=%%@\r\n                            @#=-----------------:::::::=+-:::::::::::::::::::=#       %*:::+=::::::*\r\n                            @#=------------------:--:::::+*:::::::::::::::::%@       %*:::--::::*@@ \r\n                            @#=-=------------------=-::::::--=+============#%     @@+-::::::::+%@   \r\n                            @*==-------------------------------------------#+=====-----:::::=#@     \r\n                            @*=--+=-------*--------------------------------#=-----------::-+%       \r\n                            @*---+=-------#--------------------------------#=-----------=*#@        \r\n                            @+=--+=-------#=--------:::::::::::::::--------#=--------+##@           \r\n                            @*=-=+=-------*=----::::::::::::::::::::::-----#*++++#%@@               \r\n                             *=-=+=-------*=--::::::::::::::::::::::::::---#%                       \r\n                             *+-=+=-------*=-:::::::::::::::::::::::::::---#@                       \r\n                             #+-=+=-------+=:::::::::::::::::::::::::::::--#@                       \r\n                             %+--*=-------+=:::::::::::::::::::::::::::::--%@                       \r\n                             %*=-*=-------==:::::::::::::::::::::::::::::--%@                       \r\n                             @*=-*+-------=+:::::::::::::::::::::::::::::--#@                       \r\n                             @*==*+-------=+:::::::::::::::::::::::::::::--#@                       \r\n                             @*--*=::::::::+:::::::::::::::::::::::::::::-=*                        \r\n                            @@*--+=::::::::+:::::::::::::::::::::::::::::-*%                        \r\n                         @@*=-++=#+::::::::*::::::::::::::::::::::::::::-=#@                        \r\n                     @@#+=----=+=::::::::::*-:::::::::::::::::::::::::::+%@                         \r\n      @%**********++=---------++:::::::::::-+::::::::::::::::::::-=+***%@                           \r\n @###@%+=--------=-------------=+*=::::-:::-#++++*#*****#+++++++==--+%                              \r\n@=--=====--------=---------------++:::+#=:-++---=*@     @=----------+#                              \r\n@*=--------------=-------------=*%@%%#=-=+=-----=*@     @=----------=#                              \r\n%***=------------=-----------=*@    @*----------=*@     @=----------=#                              \r\n#=----------------=-------=*%@      @*----------=*@     @=----------=*                              \r\n @*=====------------===+#@          @*----------=*@     @+----------=*                              \r\n     @@@#=----=====*%@              @*----------=*@     @+----------=*                              \r\n        @@@%%@@@@                    *----------=*@     @+----------=+@                             \r\n                                     *::::::::::-*@     @*-:---:::::-=@                             \r\n                                     *::::::::::-*@     @*::::::::::-=@                             \r\n                                     *::::::::::-*@     @*:::::::::::=@                             \r\n                                     *:::::::::::+@     @#-::::::::::+@                             \r\n                                     *::::::::::::-=#@  @#-:::::-:::-=-+#                           \r\n                                     *::::::+-:::==:-*@  #-:::::=+:::+=:=#                          \r\n                                     #-:::::-+::::==:*@  %-:::::-=:::-=:-+@                         \r\n                                     @#++++=+#===+**+#@  @#*+++++*++++***#                          \r\nBluey! :) :0\r\nType install to start installation :)\r\nbash is used for this. IF BASH IS NOT INSTALLED, THEN YOU WILL RUN INTO ERRORS (unless you modify dl.js or your distro came with bash right out of the box)\r\nIf you want to verify if you have bash without exiting the app, run checkBash\r\nback is to exit to menu, exitApp is to exit the app\r\nOr just play around with a fake JavaScript Terminal",
  touchscroll() {
    return true;
  },
  mousewheel() {
    return true;
  }
});

/*
let info = await Neutralino.os.execCommand('echo pwd | sudo apt-get install pkg', {background: true});
console.log(`${info.stdOut}`);
this.echo(`${info.stdOut}`):
*/

