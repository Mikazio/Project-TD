exports.getAllTodos = (request, response) => {
    todos = [
        {
            'id' : '1',
            'title' : 'greeting',
            'body' : 'Hello'
        },
        {
            'id' : '2',
            'title' : 'greeting',
            'body' : 'Someone'
        }
    ]
    return response.json(todos);
}