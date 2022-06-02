const chalk = require('chalk');
const yargs= require('yargs');
const notes=require('./notes.js');
yargs.command(
    {
        command:'add',
        describe:'Add a new note',
        builder: {
            title:{
                describe:'Title of note',
                demandOption: true,
                type :'string'
            },
            body:{
                describe:'Body of note',
                demandOption:true,
                type:'string'
            }
        },
        handler: function(argv){
            notes.addNotes(argv.title,argv.body); 
        }
        
    }
)
yargs.command(
    {
        command:'remove',
        describe:'Removed a note',
        builder:{
            title:{
                describe:'Title of note',
                demandOption: true,
                type :'string'
            }
        },
        handler: function(argv){
           notes.removeNote(argv.title);
           
        }
    }
)
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse();