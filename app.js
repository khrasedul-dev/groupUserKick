const { Telegraf , Composer } = require('micro-bot')

const bot = new Composer()

bot.on('new_chat_members',ctx=>{
    const f = ctx.from.first_name || '0'
    const l = ctx.from.last_name || '0'


    const fn = f.toString()
    const fl = fn.length

    const ln = l.toString()
    const ll = ln.length

    const namelength = fl+ll

    console.log(namelength)

    if(namelength> 35){
        ctx.kickChatMember(ctx.from.id).then((data)=>console.log('User Removed')).catch((e)=>console.log(e))
    }

})


bot.on('text',ctx=>{
    const f = ctx.from.first_name || '0'
    const l = ctx.from.last_name || '0'


    const fn = f.toString()
    const fl = fn.length

    const ln = l.toString()
    const ll = ln.length

    const namelength = fl+ll

    console.log(namelength)

    if(namelength> 35){
        ctx.kickChatMember(ctx.from.id).then((data)=>console.log('User Removed')).catch((e)=>console.log(e))
    }

})



module.exports = bot
