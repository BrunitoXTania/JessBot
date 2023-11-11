let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `𝑨𝑹𝑹𝑰𝑩𝑨 𝑷𝑳𝑨𝑵𝑻𝑨𝑺🌱\n\n❏ @𝑻𝒆𝒂𝒎.𝑮𝒊𝒓𝒍𝒔_𝑭𝒊𝒙𝒂𝒔𝒔:\n❏ 𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝒅𝒆 𝒑𝒖𝒕𝒂𝒔:\n`
for (let mem of participants) {
teks += `┃💛❗ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃ ${wm}\n`
teks += `╰━━━━━[ 𝑱𝒆𝒔𝒔𝑿𝑻𝒊𝒏𝒂 ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
