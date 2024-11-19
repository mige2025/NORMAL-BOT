const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61Vy47iRhT9lVFtoQe/sZFaSuEXGAyYN0RZFHbZLvALu2zajPiEbLKONJt84HxC5KZb00rm0ZHiVamqfO6595576hNIUlLgEa5B7xPIclIhipslrTMMeqBf+j7OQRt4iCLQAwujXOvmnPGK61ljt/ssXcjmKN1Iu0oyspbJ6odqO1Itj5cfwa0NsvIQEfcHgKVTLAthbF12q+BqdMZoNIXcZVurLUeZdSZKQti9e16X+jF9BLcGEZGcJIGehTjGOYpGuJ4hkr+Pfq1WGoROFbOd0bRe1ANrrURHJqgmku9C3aO2euVtvUOY4n30L/OrxsbazhqLlXpJ43VRFJvSCXflklrWWhbgYsCPz2lAhDv9ggQJ9oYeTiih9bvrDnV/ggbVgPJInR6QrW69csRNz/mSD8YZHykLv3O09Kujn95H3JhKC70/CnS+ZSzNYpCd8cpaspwmdeyOObYPpRlMnrTr8Bq8JT7LX7Vy+i91h7b0JPJl/xAmrqce/M325NlhllqGNpQizMSnE3sUsb9Nhu+jfx6QjmNKp/3YtVTZFgbZWhaNEoq6hhFa1+jMVoeTiY/1m7ojWuY/ZCnhpZCsWkg/qtcqEGJD8VrzjGcZP/I2lm+YRivqjjVzFgysIo2WMyVNxFqZs1L/JOUXPyku4lXjfSXMS3e4Nc7xDF4enzM64XrogR57a4McB6SgOaIkTZ73RLYNkFctsJtj+lxesJvkJNp0d7Y+tYzdfLKl3RQf4/N8JHK+FlymUgwXNZ5tWpdH0AZZnrq4KLA3IAVN89rGRYECXIDer8+dapLOcZxSbBEP9IDIKILCSF2e6/5SfLyEiBYoyz4mmII28PM0tjHo0bzEbfB8X5P7UBQFg4U8y/QNDoqszOk6Y2gyFJWu2mQY32MuSYwLiuIM9NguzzGcwCnsrf2/0IDQEAWjy0kcL8pin2Mh22UlFXZFTehDqP2Uxm9tkOAneldxU3uebQOf5AVdJWUWpch7lfjrIXLdtEzook5ctVngHPTebGNKSRIUTWJlgnI3JBVWmzxAz0dRgW9t4OGKuLjBA+ZsarCs9bAo6so1jopthSvx0vQvTJP7FclFPI8wfpBR138QXJF/UJgufjj4HsKCLPueLIGmHHcDaf75rp5trjuBCmE62QV2jvOpWF4kFJnWUL88a/IuRJxj77XKB+SeymyZnnDyA9wjd7DkFlOPmGRhxKiL2PUkJiovTJw3uHeBg96nr6atpl6Dx2/WJm8aPGi61cT5pxh63L/lkKDmLlgT91R/+fzHnx90+sEsSR7hBH/48vmv35vIL21pMD1MEYkK0APqOCHJ3tX1yaaS85NpwmEA1QCCr218NYf78GEvhpyFjKe6UAfHYYLjXWCcxsf9gKcZ4yzZ0J4ersxwaTqP3wABPeBUrLaGdJGkVaZYEePxi1VZOuJsbV6ZtdcazgK03wpluBn4w/NmM0YTv1yeI80UnY7jqKoHS3KEwTHcZCNxpMwuWa45j020u5zeBqM7uBpy9tjrinG9bC2vbppO8VFNau3sM87aGg4Y1gzXe+INmEtZyit5a0NqhbhzNONRv4wcvTS2ubxRsbTXh3W4XKgvtvVsm9HLc0VeDOUuPp/gZ/d/acxP2vd1Cphb+w3Cy2vyHaX1t8k+mJBN6Lo5DIXa4rN42N+rAjdXusjTdWW31GJZUfWnE7g1451FiPppHoMeQImXp8QDbRChgsKvg/wNb5CVNohrmGULiujr/APYfNO+AW5/A1AFqRQoCQAA',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "vicky",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 50946067327",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

