const fs=require('fs');
const notes=require('./notes.js');
const yargs=require('yargs');
// const chalk=require('chalk');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.addNote(yargs.argv.title,yargs.argv.body);
    }
});
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.removeNote(yargs.argv.title);
    }
});
yargs.command({
    command:'list',
    describe:'note list',
    handler(){
        notes.listNotes(yargs.argv.title);
    }
});
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.readNote(yargs.argv.title);
    }
});
yargs.parse();