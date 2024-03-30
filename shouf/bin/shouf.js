import  { server } from "../shouf/shouf-back/index.js"
import  { componentsPath } from "../shouf/shouf-back/src/set-app-path.js"

// if user has not provided any args we go ahead and start the server and the frot app we keep silent both outputs and instead print out the url to the user
// if the user provides args we check wether it leads to a valid path if so we change componetPath, if not we print out an error message and the help message
// if user provides an arg with - then we assume its an option and the only option we have as of now --help or -h which prints out the help message
// if no args were provided we verify where the user has run his scripts and find the root dir from there which we set to componentPath if it is a app root folder otherwise we call componetsPath
// we then start the server and the front end app with node shouf/shouf-back/index.js and bun run dev --prefix shouf/shouf-front --host

const args = process.argv.slice(2)
let componentPath = componentsPath()
if(args.length === 0){
  server()
}
else if(args.length === 1){
    if(args[0] === "--help" || args[0] === "-h"){
        console.log("Usage: shouf [options] [path]")
        console.log("Options:")
        console.log("  -h, --help  output usage information")
    }
    else if(args[0].startsWith("-")){
        console.log("Usage: shouf [options] [path]")
        console.log("Options:")
        console.log("  -h, --help  output usage information")
    }
    else{
        if(fs.existsSync(args[0])){
        componentPath = args[0]
        server()
        }
        else{
        console.log("The path provided is not valid")
        console.log("Usage: shouf [options] [path]")
        console.log("Options:")
        console.log("  -h, --help  output usage information")
        }
    }
    }
else{
    console.log("Usage: shouf [options] [path]")
    console.log("Options:")
    console.log("  -h, --help  output usage information")
}

server()

