const ownerNumber = ["558287369797@s.whatsapp.net"] 
// mude somente o numero e nรฃo tire o @s.whatsapp.net

const OriginalOwner = '558287369797' 
// mude para seu numero

const cr = '๐๐๐๐๐๐ ๐๐๐\n' 
// texto do simbolo de verificado

const prefix = '#' 
// prefixo


// MENSAGENS DE BAN

const banmsgtype = '*Corra membro comum, o ban estar prรณximo*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu รฉ adm ent n vou te banir por mandar um tipo de mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornozinho com antiporn ativado, ja sabe nรฉ...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu รฉ adm ent n vou te banir por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Corra Membro comum, O ban estรก prรณximo...'
// mensagem de ban no antilink

const adminmsglink = 'Isso รฉ um link amigo... ah รฉ tu รฉ adm ent pode kkkk ๐'
// mensagem de quando adm manda link


// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan ๐๐'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite esse cafรฉ โ`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenha tido um bom dia โบ๏ธ'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa ๐ฃ๐ฃ'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado ๐ก'
const cadebot = 'Me chamou onii-chan ๐๐?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = 'Arigato go sai masu ๐ณ๐๐'
const botfofo = 'Arigato go sai masu ๐ณ๐๐'
const botbaianor = 'Convidei sua placa-mรฃe pra minha rede seu corno'
const botcorno = 'Vai te foder, jogador de ff, comprador de pack do pรฉzinho'
const botputa = 'Senhora sua mรฃe ๐ก'
const botgay = 'Falou o manja rola ๐ก'
const botviado = 'Falou o manja rola ๐ก'
const numbotfeio = 'senhora sua mรฃe ๐ก'
// KEYS

const apiTobz = 'key'
// pra pegar a key do Tobz va atรฉ o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: 'โ Aguarde um pouco... โ',
    success: 'โ๏ธ Sucesso! โ๏ธ',
    error: {
        stick: 'โ Falha, ocorreu um erro ao converter a imagem em um adesivo โ',
        Iv: 'โ Link invรกlido โ'
    },
    only: {
        group: 'โ Este comando sรณ pode ser usado em grupos! โ',
        ownerG: 'โ Este comando sรณ pode ser usado pelo grupo proprietรกrio! โ',
        ownerB: 'โ Este comando sรณ pode ser usado pelo nรบmero proprietรกrio! โ',
        admin: 'โ SILรNCIO MEMBRO COMUM VC N TEM MORAL PRA USAR ESSE COMANDO โ',
        Badmin: 'โ Este comando sรณ pode ser usado quando o bot se torna administrador! โ'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=558287369797:+55 82 8736-9797\n' 
+ 'END:VCARD'
//vcard do propietรกrio, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro

exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber