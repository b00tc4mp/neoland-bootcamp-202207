function retrieveNotes(userId, callback) {  
//TODO validate inputs

  const filtered = note.filter (note => {
    return note.user === userId
  })
  callback (null,filtered)
}
