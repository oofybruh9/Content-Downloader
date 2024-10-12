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
let newText = username.replace(textToRemove, ""); // "Hello, !"
console.log(newText.trim()); // Output: "Hello, !"


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
        })
      } else {
        this.echo("Awwwwwww! :(");
        return 418;
      }
    });
  },
  help: function(){
    this.echo('help - prints this message\r\nls - lists fake files\r\ninstall - installs your files\r\nexit - exits to main menu\r\ncat - a working cat!\r\ngithub - echos link to repository\r\n');
  },
  ls: function(){
    this.echo('a\r\nbunch\r\nof\r\nfiles');
  },
  exit: function(){
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
      this.echo("cat: " +args+ ": The file or directory doesn't exist.")
    }
  },
  github: function(){
    this.echo("[[!;;;;https://github.com/oofybruh9/Content-Downloader]Visit this app's repository]")
  }
}, {
  greetings: "                                               @%##@                   @#%@                         \r\n                                             @%*==*@                 @#+=#@                         \r\n                                            @#=--=*@               @%*=-=#@                         \r\n                                          @%+----=*@             @%*=----*%                         \r\n                                         @*=--==-=*@            @#=--=-==*%                         \r\n                                       @%=--=--:--*%          @%+--==---=*#                         \r\n                                      @+---=--::-=*%         @#---=--::--+*                         \r\n                                    @#==----::::-=+%       @%==----::::--+*                         \r\n                                   @+==--=-:::::-=+%      @+=--=--:::::--=*                         \r\n                                 @#+=---=-::::::-=+#    @#==--=----::::--=*                         \r\n                                @*==----::::::::-+#%%@@%+=--=++=--===+=--=*                         \r\n                               %+=---=-::::::-=+=-::::-++=--++::::::::-++=*@                        \r\n                              #+=---=-::----=+-:::::::::#****#*+-:::::::++*@                        \r\n                             %*++++****++++#+:::::::--+*=-------=+++=:::*#%@                        \r\n                            @%+=----------=*=:::-++*+=-------------=+***+=#@                        \r\n                            #+=------------=+*+*+=====------------====---=#@                        \r\n                           @#=----------------===+**+=++=-------=+*+**+==-*%                        \r\n                           @#=---------------=+*-       .=+----+:     .++=+#                        \r\n                           @#=-------------==+=.          :*--+- ...   .===*                        \r\n                           @#=-------------=+=    .....    ==-#..+@+.  .++=#                        \r\n                           @#=------------==*.   .=%@@-.   .#=#.=@@@=  .++=#@                       \r\n                           @#=------------=+-    :#@@@#:   .#=%=+@@@*===##*%@@@@@@                  \r\n                           @*=------------=*:    :#@@@%:    +-----::::-*%%*++++++%@                 \r\n                           @*=------------=*:    .+@@@=.    +----:::::-*%%%%###%%%@                 \r\n                           @*=------------===     .:-:.    .#---:::::::-#%%%%%%%%%@                 \r\n                            *=-------------=*.             -*--:::::::::-*%%%%%%%%@                 \r\n                            *+-------------==+:           :*--::::::::::::+%%%%%%@@                 \r\n                            *+---------------=+=..      .=*--::::::::::::::-*%%%#%                  \r\n                            #+-----------------=++--==-+*--:::::::::::::::::::-:-@       @**#       \r\n                            #*--------------=====-----::::::::::::::::::::::::::*       @*::+%@%#%  \r\n                            %*=---------===-=-----::::--:::::::::::::::::::::::-@    @%#%+::=#=::=% \r\n                            @#=------===--------::-=*#*=-::::::::::::::::::::::#    @#-:-=:::::::*% \r\n                            @*------------------:=+-::==::::::::::::::::::::::+%     #+::::-::::=%%@\r\n                            @#=-----------------:::::::=+-:::::::::::::::::::=#       %*:::+=::::::*\r\n                            @#=------------------:--:::::+*:::::::::::::::::%@       %*:::--::::*@@ \r\n                            @#=-=------------------=-::::::--=+============#%     @@+-::::::::+%@   \r\n                            @*==-------------------------------------------#+=====-----:::::=#@     \r\n                            @*=--+=-------*--------------------------------#=-----------::-+%       \r\n                            @*---+=-------#--------------------------------#=-----------=*#@        \r\n                            @+=--+=-------#=--------:::::::::::::::--------#=--------+##@           \r\n                            @*=-=+=-------*=----::::::::::::::::::::::-----#*++++#%@@               \r\n                             *=-=+=-------*=--::::::::::::::::::::::::::---#%                       \r\n                             *+-=+=-------*=-:::::::::::::::::::::::::::---#@                       \r\n                             #+-=+=-------+=:::::::::::::::::::::::::::::--#@                       \r\n                             %+--*=-------+=:::::::::::::::::::::::::::::--%@                       \r\n                             %*=-*=-------==:::::::::::::::::::::::::::::--%@                       \r\n                             @*=-*+-------=+:::::::::::::::::::::::::::::--#@                       \r\n                             @*==*+-------=+:::::::::::::::::::::::::::::--#@                       \r\n                             @*--*=::::::::+:::::::::::::::::::::::::::::-=*                        \r\n                            @@*--+=::::::::+:::::::::::::::::::::::::::::-*%                        \r\n                         @@*=-++=#+::::::::*::::::::::::::::::::::::::::-=#@                        \r\n                     @@#+=----=+=::::::::::*-:::::::::::::::::::::::::::+%@                         \r\n      @%**********++=---------++:::::::::::-+::::::::::::::::::::-=+***%@                           \r\n @###@%+=--------=-------------=+*=::::-:::-#++++*#*****#+++++++==--+%                              \r\n@=--=====--------=---------------++:::+#=:-++---=*@     @=----------+#                              \r\n@*=--------------=-------------=*%@%%#=-=+=-----=*@     @=----------=#                              \r\n%***=------------=-----------=*@    @*----------=*@     @=----------=#                              \r\n#=----------------=-------=*%@      @*----------=*@     @=----------=*                              \r\n @*=====------------===+#@          @*----------=*@     @+----------=*                              \r\n     @@@#=----=====*%@              @*----------=*@     @+----------=*                              \r\n        @@@%%@@@@                    *----------=*@     @+----------=+@                             \r\n                                     *::::::::::-*@     @*-:---:::::-=@                             \r\n                                     *::::::::::-*@     @*::::::::::-=@                             \r\n                                     *::::::::::-*@     @*:::::::::::=@                             \r\n                                     *:::::::::::+@     @#-::::::::::+@                             \r\n                                     *::::::::::::-=#@  @#-:::::-:::-=-+#                           \r\n                                     *::::::+-:::==:-*@  #-:::::=+:::+=:=#                          \r\n                                     #-:::::-+::::==:*@  %-:::::-=:::-=:-+@                         \r\n                                     @#++++=+#===+**+#@  @#*+++++*++++***#                          \r\nBluey! :) :0\r\nType install to start installation :)\r\nexit is to exit\r\nOr just play around with a fake JavaScript Terminal",
  touchscroll() {
    return true;
  },
  mousewheel() {
    return true;
  }
});

