// Language setter middleware
// check every request for a query parameter ?lang=es or lang=en.
// if found, set a cokkie user_lang with that value and redirect to same url without query
// content loader middleware 
// .get respond with Welcome friend
// .get/about respond with About us
// .get clear respond with clear cookies and redirect to home page
import express, { request } from "express";
import cookieParser from 'cookie-parser';
const app= express();
app.use(cookieParser());
const port=3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

app.use((req, res, next) => {
    const lang = req.query.lang;
    if (lang) {
        res.cookie('user_lang', lang, { maxAge: 900000, httpOnly: true });
        const redirectUrl = req.originalUrl.split('?')[0];
        return
    res.redirect(redirectUrl);
    }
    next();
}
);


app.use((req, res, next) => {
    const userLang = req.cookies.user_lang || 'en';
    req.content = loadContentForLanguage(userLang);
    next();
});

function loadContentForLanguage(lang) {
    const content = {
        en: {
            welcome: "Welcome friend",
            about: "About us"
        },
        es:{
            welcome: "Bienvenido amigo",
            about: "Sobre nosotros"
        }
    };
    return content[lang] || content['en'];
}
app.get('/', (req, res) => {
    res.send(req.content.welcome);
}
);

app.get('/about', (req, res) => {
    res.send(req.content.about);
}
);

app.get('/clear', (req, res) => {
    res.clearCookie('user_lang');
    res.redirect('/');
}
);

