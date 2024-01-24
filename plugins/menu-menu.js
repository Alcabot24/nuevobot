import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `
┏━━━━━━━━━━━━━━━━━━┓
┃ *◉—𝗕𝗔𝗥𝗕𝗜𝗘|𝘽𝙊𝙏—◉*
┣⟣☯︎ *𝗢𝗪𝗡𝗘𝗥:* 𝗕𝗔𝗥𝗕𝗜𝗘|𝘽𝙊𝙏
┣⟣☯︎ *𝗡𝗨𝗠𝗘𝗥𝗢:* +525646448827
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥✨*
┃Enable(activar) Disable(desactivar)┃
┣⚙️ _.enable *welcome*_ (Activar Bienvenidas)
┣⚙️ _.disable *welcome*_ (Desactivar Bienvenida)
┣⚙️ _.enable *modoadmin*_ (Activar solo admis)
┣⚙️ _.disable *modoadmin*_ (Desactivar solo admis)
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦 ✨* 
┣⚙️ _.kick2 *<@tag>*_
┣⚙️ _.kicknum *<texto>*_
┣⚙️ _.grupo *<abrir / cerrar>*_
┣⚙️ _.promote *<@tag>*_ (Dar admi)
┣⚙️ _.demote *<@tag>*_ (Quitar admi)
┣⚙️ _.infogroup_
┣⚙️ _.link_
┣⚙️ _.todos *<texto>*_ (Mencion a todos)
┣⚙️ _.setwelcome *<texto>*_ (Editar bienvenida)
┣⚙️ _.setbye *<texto>*_ (Editar Despedida)
┣⚙️ _.notify_ (Hacer notifys)
┣⚙️ _.fantasmas_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗕𝗨𝗦𝗖𝗔𝗥✨*
┣🔍 _.githubsearch *<texto>*_
┣🔍 _.pelisplus *<texto>*_
┣🔍 _.modapk *<texto>*_
┣🔍 _.stickersearch *<texto>*_
┣🔍 _.stickersearch2 *<texto>*_
┣🔍 _.animeinfo *<texto>*_
┣🔍 _.google *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗙𝗥𝗔𝗦𝗘𝗦 𝗢 𝗣𝗜𝗥𝗢𝗣𝗢𝗦✨*
┣📖 _.piropo_
┣📖 _.consejo_
┣📖 _.fraseromantica_
┣📖 _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦✨*
┣🔧 _.clima *<país> <ciudad>*_
┣🔧 _.encuesta *<texto1|texto2...>*_
┣🔧 _.ocr *<responde a imagen>*_
┣🔧 _.hd *<responde a imagen>*_
┣🔧 _.acortar *<enlace / link / url>*_
┣🔧 _.calc *<operacion math>*_
┣🔧 _.horario_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦✨*
┣🍭 _.sticker *<responder a imagen o video>*_
┣🍭 _.HD *<responder a imagen
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ✨*
┣🏓 _.play *<texto de la canción >*_
┣🚨 No Descargar Music (evitar bugeos)
┗━━━━━━━━━━━━━━━━┛
 𝘾𝙐𝘼𝙇𝙌𝙐𝙄𝙀𝙍 𝘿𝙐𝘿𝘼 𝙈𝘼𝙉𝘿𝘼𝙍𝙈𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘼𝙇 𝙒𝙋𝙋 +525646448827`.trim();
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
