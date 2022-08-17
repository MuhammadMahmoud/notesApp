const fs=require('fs');
// const chalk=require('chalk');

const addNote=(title,body)=>{
    const notes=loadNotes();
    const duplicateNotes=notes.filter((note)=>note.title===title);
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        // console.log(chalk.green.inverse('New note added!'));
        console.log('New note added!');
    }else{
        // console.log(chalk.red.inverse('Note title taken!'));
        console.log('Note title taken!');
    }
};
const removeNote=(title)=>{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>note.title!==title);
    if(notes.length===notesToKeep.length){
        // console.log(chalk.red.inverse('No note found!'));
        console.log('No note found!');
    }else{
        saveNotes(notesToKeep);
        // console.log(chalk.green.inverse('Note removed!'));
        console.log('Note removed!');
    }
};
const listNotes=()=>{
    const notes=loadNotes();
    notes.forEach( note => {
        console.log('title=\'' + note.title + '\'');
        console.log('body=\''+ note.body + '\'');
    });
};
const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((note)=>note.title===title);
    if(note){
        console.log('title=\'' + note.title + '\'');
        console.log('body=\''+ note.body + '\'');
    }else{
        // console.log(chalk.red.inverse('No note found!'));
        console.log('No note found!');
    }
};
const loadNotes=()=>{
    try{
        const buffer=fs.readFileSync('notes.json');
        const notes=JSON.parse(buffer.toString());
        return notes;
    }catch(e){
        return [];
    }
};
const saveNotes=(notes)=>{
    const buffer=JSON.stringify(notes);
    fs.writeFileSync('notes.json',buffer);
};
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
};