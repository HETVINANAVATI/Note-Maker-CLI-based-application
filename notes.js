const fs=require('fs');
const chalk = require('chalk');
function getNotes()
{
    return ("Your notes....");
}
const addNotes=function(title,body)
{
   const data=loadNotes();
   //filters renders to whole file even the purpose is solved
   const duplicateNotes=data.find(function(datas){
       return datas.title === title
   })
   debugger
   if(!duplicateNotes)
   {
    data.push({
        title: title,
        body: body
    })
    saveNotes(data);
    console.log(chalk.green("Note saved"));
   }
    else{
        console.log(chalk.red("Note title already taken"));
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red('No note found!'))
    }    
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.red('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}
const saveNotes=function(data){
    const dataJSON = JSON.stringify(data);
    fs.writeFileSync("notes.json",dataJSON);
}
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e)
    {
        return [];
    }
}
module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}