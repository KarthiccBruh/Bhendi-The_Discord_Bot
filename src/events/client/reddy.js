module.exports = {
    name: 'ready',
    once: true, 
    async execute(){
        console.log(`Ready!!! ${client.user.tag} has entered the chat`);
    }
}