import {execSync} from 'child_process';
const handler = async (m, {conn, text}) => {
  try {
    if (global.conn.user.jid == conn.user.jid) {
      const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
      conn.reply(m.chat, stdout.toString(), m);
    }
  } catch {
    const update = execSync('git remote set-url origin https://github.com/Whats-bot/zloi2.git && git pull');
    await m.reply(update.toString());
  }
};
handler.help = ['обновить'];
handler.tags = ['owner'];
handler.command = /^обновить|actualizar$/i;
handler.rowner = true;
export default handler;
