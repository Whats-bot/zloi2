import {sticker} from '../lib/sticker.js';

const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const marah = global.API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => './src/avatar_contact.png'),
  });
  await conn.sendNyanCat(m.chat, global.wait, null, m);
  const stiker = await sticker(false, marah, global.packname, global.author);
  if (stiker) return await conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {quoted: m}});

  throw stiker.toString();
};


handler.help = ['trigger *<@user>*'];
handler.tags = ['sticker'];
handler.command = ['trigger', 'triggered', 'ger'];

export default handler;
