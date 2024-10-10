import "js-shell-emulator"

const shell = JsShell('#terminal', {
  backgroundColor: '#000',
  textColor: '#fff',
  className: 'jsShell', // this class will be applied on the shell root element.
  cursorType: 'large', // Typing cursor style: "large" ▯ or "thin" |
  cursorSpeed: 500, // blinking interval in ms
  fontFamily: 'msdos',
  forceFocus: false, // whether or not inputs should capture document focus even if active element is outside the shell
  textSize: '1em',
  promptPS: '$', // Prompt PS1 prefix ($, #, > or whatever you like) 
  width: '100%', // Shell root element css width
  height: '100%', // Shell root element css height
  margin: '0',
  overflow: 'auto',
  whiteSpace: 'break-spaces',
  padding: '10px',
})