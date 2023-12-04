import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen6;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━┓
┃ *◉—𝗔𝗟𝗖𝗔 𝗕𝗢𝗧—◉*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ *𝙾𝚆𝙽𝙴𝚁:* ALCAVENTAS
┣⟣☯︎ *𝙽𝚄𝙼𝙴𝚁𝙾:* +52 824 105 0228
┣⟣☯︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
┣⟣☯︎ *𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:* ${uptime}
┣⟣☯︎ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃❍ ACTIVAR O DESACTIVAR ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}enable *welcome*_
┣⟣❥ _${usedPrefix}disable *welcome*_
┣⟣❥ _${usedPrefix}enable *modohorny*_
┣⟣❥ _${usedPrefix}disable *modohorny*_
┣⟣❥ _${usedPrefix}enable *antilink*_
┣⟣❥ _${usedPrefix}disable *antilink*_
┣⟣❥ _${usedPrefix}enable *antilink2*_
┣⟣❥ _${usedPrefix}disable *antilink2*_
┣⟣❥ _${usedPrefix}enable *detect*_
┣⟣❥ _${usedPrefix}disable *detect*_
┣⟣❥ _${usedPrefix}enable *audios*_
┣⟣❥ _${usedPrefix}disable *audios*_
┣⟣❥ _${usedPrefix}enable *autosticker*_
┣⟣❥ _${usedPrefix}disable *autosticker*_
┣⟣❥ _${usedPrefix}enable *antiviewonce*_
┣⟣❥ _${usedPrefix}disable *antiviewonce*_
┣⟣❥ _${usedPrefix}enable *antitoxic*_
┣⟣❥ _${usedPrefix}disable *antitoxic*_
┣⟣❥ _${usedPrefix}enable *antitraba*_
┣⟣❥ _${usedPrefix}disable *antitraba*_
┣⟣❥ _${usedPrefix}enable *antiarabes*_
┣⟣❥ _${usedPrefix}disable *antiarabes*_
┣⟣❥ _${usedPrefix}enable *modoadmin*_
┣⟣❥ _${usedPrefix}disable *modoadmin*_
┣⟣❥ _${usedPrefix}enable *antidelete*_
┣⟣❥ _${usedPrefix}disable *antidelete*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┣❍ REPORTAR ERRORES ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⟣❥ _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ DESCARGAS ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}instagram *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}mediafire *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}gitclone *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}gdrive *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}tiktok *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}twitter *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}fb *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytshort *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}videodoc *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}dapk2 *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}stickerpack *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}play *<texto>*_
┣⟣❥ _${usedPrefix}play2 *<texto>*_
┣⟣❥ _${usedPrefix}play.1 *<texto>*_
┣⟣❥ _${usedPrefix}play.2 *<texto>*_
┣⟣❥ _${usedPrefix}playdoc *<texto>*_
┣⟣❥ _${usedPrefix}playdoc2 *<texto>*_
┣⟣❥ _${usedPrefix}playlist *<texto>*_
┣⟣❥ _${usedPrefix}spotify *<texto>*_
┣⟣❥ _${usedPrefix}ringtone *<texto>*_
┣⟣❥ _${usedPrefix}soundcloud *<texto>*_
┣⟣❥ _${usedPrefix}imagen *<texto>*_
┣⟣❥ _${usedPrefix}pinterest *<texto>*_
┣⟣❥ _${usedPrefix}wallpaper *<texto>*_
┣⟣❥ _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ⟣❥ _${usedPrefix}igstalk *<nombre de usuario>*_
┣⟣❥ _${usedPrefix}igstory *<nombre de usuario>*_
┣⟣❥ _${usedPrefix}tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ BUSCAR ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}githubsearch *<texto>*_
┣⟣❥ _${usedPrefix}pelisplus *<texto>*_
┣⟣❥ _${usedPrefix}modapk *<texto>*_
┣⟣❥ _${usedPrefix}stickersearch *<texto>*_
┣⟣❥ _${usedPrefix}stickersearch2 *<texto>*_
┣⟣❥ _${usedPrefix}xnxxsearch *<texto>*_
┣⟣❥ _${usedPrefix}animeinfo *<texto>*_
┣⟣❥ _${usedPrefix}google *<texto>*_
┣⟣❥ _${usedPrefix}letra *<texto>*_
┣⟣❥ _${usedPrefix}wikipedia *<texto>*_
┣⟣❥ _${usedPrefix}ytsearch *<texto>*_
┣⟣❥ _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃AJUSTES DE GRUPOS* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}add *<numero>*_
┣⟣❥ _${usedPrefix}kick *<@tag>*_
┣⟣❥ _${usedPrefix}kick2 *<@tag>*_
┣⟣❥ _${usedPrefix}listanum *<texto>*_
┣⟣❥ _${usedPrefix}kicknum *<texto>*_
┣⟣❥ _${usedPrefix}grupo *<abrir / cerrar>*_
┣⟣❥ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣⟣❥ _${usedPrefix}promote *<@tag>*_
┣⟣❥ _${usedPrefix}demote *<@tag>*_
┣⟣❥ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⟣❥ _${usedPrefix}demote *<@tag>*_
┣⟣❥ _${usedPrefix}infogroup_
┣⟣❥ _${usedPrefix}resetlink_
┣⟣❥ _${usedPrefix}link_
┣⟣❥ _${usedPrefix}setname *<texto>*_
┣⟣❥ _${usedPrefix}setdesc *<texto>*_
┣⟣❥ _${usedPrefix}invocar *<texto>*_
┣⟣❥ _${usedPrefix}setwelcome *<texto>*_
┣⟣❥ _${usedPrefix}setbye *<texto>*_
┣⟣❥ _${usedPrefix}hidetag *<texto>*_
┣⟣❥ _${usedPrefix}hidetag *<audio>*_
┣⟣❥ _${usedPrefix}hidetag *<video>*_
┣⟣❥ _${usedPrefix}hidetag *<imagen>*_
┣⟣❥ _${usedPrefix}warn *<@tag>*_
┣⟣❥ _${usedPrefix}unwarn *<@tag>*_
┣⟣❥ _${usedPrefix}listwarn_
┣⟣❥ _${usedPrefix}fantasmas_
┣⟣❥ _${usedPrefix}destraba_
┣⟣❥ _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ CONVERTIDORES ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}toanime *<imagen>*_
┣⟣❥ _${usedPrefix}togifaud *<video>*_
┣⟣❥ _${usedPrefix}toimg *<sticker>*_
┣⟣❥ _${usedPrefix}tomp3 *<video>*_
┣⟣❥ _${usedPrefix}tomp3 *<nota de voz>*_
┣⟣❥ _${usedPrefix}toptt *<video / audio>*_
┣⟣❥ _${usedPrefix}tovideo *<sticker>*_
┣⟣❥ _${usedPrefix}tourl *<video / imagen / audio>*_
┣⟣❥ _${usedPrefix}tts *<idioma> <texto>*_
┣⟣❥ _${usedPrefix}tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃❍ FRASES Y TEXTOS ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}piropo_
┣⟣❥ _${usedPrefix}consejo_
┣⟣❥ _${usedPrefix}fraseromantica_
┣⟣❥ _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃❍ HERRAMIENTAS ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}chatgpt *<texto>*_
┣⟣❥ _${usedPrefix}delchatgpt
┣⟣❥ _${usedPrefix}gptvoz *<texto>*_
┣⟣❥ _${usedPrefix}dall-e *<texto>*_
┣⟣❥ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣⟣❥ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣⟣❥ _${usedPrefix}readviewonce *<imagen / video>*_
┣⟣❥ _${usedPrefix}clima *<país> <ciudad>*_
┣⟣❥ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣⟣❥ _${usedPrefix}afk *<motivo>*_
┣⟣❥ _${usedPrefix}ocr *<responde a imagen>*_
┣⟣❥ _${usedPrefix}hd *<responde a imagen>*_
┣⟣❥ _${usedPrefix}acortar *<enlace / link / url>*_
┣⟣❥ _${usedPrefix}calc *<operacion math>*_
┣⟣❥ _${usedPrefix}del *<mensaje>*_
┣⟣❥ _${usedPrefix}whatmusic *<audio>*_
┣⟣❥ _${usedPrefix}readqr *<imagen (QR)>*_
┣⟣❥ _${usedPrefix}qrcode *<texto>*_
┣⟣❥ _${usedPrefix}readmore *<texto1| texto2>*_
┣⟣❥ _${usedPrefix}styletext *<texto>*_
┣⟣❥ _${usedPrefix}traducir *<texto>*_
┣⟣❥ _${usedPrefix}nowa *<numero>*_
┣⟣❥ _${usedPrefix}covid *<pais>*_
┣⟣❥ _${usedPrefix}horario_
┣⟣❥ _${usedPrefix}dropmail_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝕆𝕎ℕ𝔼ℝ𝕊 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝕆ℝ𝕊 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}menuowner_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menucompleto|allmenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
