Thirdfort Task For Mohamed Assem Assaf 

1. How to run the app? 
    clone the repo and install dependencies and run npm start  (db is remotely hosted)
    you can also run the db tests using npm run tests (the scripts in package.json are configured)

2. Instructions to the UX team 
    To start consuming the APIs requested a user ID must be passed as a parameter to all notes APIs.
    Below is an explanation of every API and it's parameters
    i. SignUp API
        url : localhost:3000/users/signUp
        method : post
        params : 1) name : string 
                 2) password : string
        response : {
            "userId": "5d603cfb1c78d423bb51c854"
        }
        Notes: Keep this userId stored as you would need this to consume notes APIs
    ii. LogIn API
            url : localhost:3000/users/signUp
            method : post
            params : 1) name : string 
                    2) password : string
            response : {
                "userId": "5d603cfb1c78d423bb51c854"
            }
            Notes: Keep this userId stored as you would need this to consume notes APIs
    iii. Note Creation API
            url: localhost:3000/notes/create
            method : post 
            params : 1) id: string  -> this is the user Id to create this note for
                     2) text: string -> the note itself
            response : {
                noteId: "5d603cfb1c78d423bb51c854"
            }
            Notes : Keep the noteId for future update and delete and archive and unarchive actions 
    iv. Update Note API
            url : localhost:3000/notes/update
            method : post
            params : 1)id -> userId
                     2)noteId -> noteId of note to be updated
                     3)text -> new text for note 
    v. Delete Note API 
            url : localhost:3000/notes/delete
            method : post
            params : 1)id -> userId
                     2)noteId -> noteId of note to be deleted
            
    vi. Archive Note API 
            url : localhost:3000/notes/archive
            method : post
            params : 1)id -> userId
                     2)noteId -> noteId of note to be archived
            
    vii. UnArchive Note API 
            url : localhost:3000/notes/unArchive
            method : post
            params : 1)id -> userId
                     2)noteId -> noteId of note to be unarchived
    viii. Archived Notes API 
            url : localhost:3000/notes/archivedList
            method : post
            params : 1)id -> userId
            response:  "data": [
                {
                    "_id": "5d603bb780bf432152f1a3bc",
                    "text": "Note 1?",
                    "isDeleted": false,
                    "isArchived": true
                }
            ]
    IX. UnArchived Notes API 
            url : localhost:3000/notes/unArchivedLists
            method : post
            params : 1)id -> userId
            response:  "data": [
                {
                    "_id": "5d603bb780bf432152f1a3bc",
                    "text": "Note 1?",
                    "isDeleted": false,
                    "isArchived": false
                }
            ]
3. Why I chose node? 
    1) Thirdfort uses js and I wanted to showcase what I can do although I haven't used much of ECMASCRIPT 6
    2) It's very easy to transfer all you gotta do is install the dependencies 
    3) I usually do all my tasks in node ( you can check my github ) it's kind of sexy for me (if I may)
    4) This has nothing to do with node but I hosted the db remotely for easier testing I also whitelisted all IPs. connection string is in the code

4. What would I do with more time? 
    1) Do better (more secue) Authentication I just did the login and signup as it is a must for the multi user requirement 
    2) Do a mock DB service for testing 
    3) Use the mock DB service to test the controllers ( I dont have much experience with testing in node so I would invest some time at the start )
    4) Writing this readme I think I should have made the notes have a title and description not just a text 
