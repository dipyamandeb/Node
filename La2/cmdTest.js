// console.log(process.argv);
const fs = require('fs');
var command = process.argv[2];
console.log('Command:', command);




if (command === 'add') {
    console.log('Adding new Notes...');
    title = process.argv[3];
    body = process.argv[4]
    var addNote = (title, body) => {
        //console.log("Adding Notes:", title, body);  
        var notes = [];
        var note = { title, body }

        // var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);


        //if(duplicateNotes.length ===0 )   
        {
            notes.push(note);
            fs.writeFileSync('notes-data.json',
                JSON.stringify(notes));   //} 

        };

    }

}
else if (command === 'list') {
    console.log('Listing all notes');
    console.log(fs.readFileSync('notes-data.json'));
}
else if (command === 'read') {
    console.log('Reading Note');
}
