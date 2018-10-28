const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-abbr'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-imsize'))
  .use(require('markdown-it-mark'))
  /*
  .use(require('markdown-it-anchor'), {
    level: 2,
    // slugify: string => string,
    permalink: true,
    // renderPermalink: (slug, opts, state, permalink) => {},
    permalinkClass: 'header-anchor',
    permalinkSymbol: '#',
    permalinkBefore: true
  })
  */
  ;

const pageFolder = './pages/';
const fs = require('fs');
let pageList = [];

fs.readdirSync(pageFolder).forEach(file => {
  let correctedName = file.slice(0, -3);
  if (correctedName != 'index') {
    let readableName = correctedName.split('_').join(' ')
    pageList.push(`<tr> <td> <a href="./${correctedName + `.html`}"> ${readableName} </a> </td> </tr>`);
  }
});

let indexContent = `
<table style="display: flex; flex-direction: column; align-items: center;">
  <thead>
    <tr>
      <th>
        Leheküljed
      </th>
    </tr>
  </thead>
  <tbody>
    ${pageList.join('')}
  </tbody>
</table>
`;
  
module.exports = {
  generatePage: function(pageContent, pageMeta = defaultMeta){
    return`<!DOCTYPE html>
<html lang="${pageMeta.lang || this.defaultMeta.lang}">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126074023-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-126074023-1');
    </script>
    
    <title>${pageMeta.title || this.defaultMeta.title}</title>
    <meta charset="${pageMeta.charset || this.defaultMeta.charset}">
    <meta name="viewport" content="${pageMeta.viewport || this.defaultMeta.viewport}">
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">
    <meta name="keywords" content="${pageMeta.keywords || this.defaultMeta.keywords}">
    <meta name="author" content="${pageMeta.author || this.defaultMeta.author}">
    ${
      pageMeta.hasOwnProperty('extra')
        ?pageMeta.extra.length
          ? pageMeta.extra.map(value => `<meta ${value}>`)
          : ''
        :''
    }
    <meta name="description" content="${pageMeta.description || this.defaultMeta.description}">

    <meta http-equiv=“Pragma” content=”no-cache”>
    <meta http-equiv=“Expires” content=”-1″>
    <meta http-equiv=“CACHE-CONTROL” content=”NO-CACHE”>

    <meta name="theme-color" content="#4d8a78">

    ${
      pageMeta.hasOwnProperty('stylesheets')
        ?pageMeta.stylesheets.length
          ?pageMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
          :''
        :this.defaultMeta.stylesheets.map(value => `<link rel="stylesheet" href="${value}">`)
    }

  </head>
  <body>
    <div class="navbar">
      <div class="container">
        <li class="brand">
          <a href="/">Konspektid</a>
        </li>
        <li>
          <div class="dropdown">
            <a class="dropdown-button">
              <span class="theme-indicator"></span>
            </a>
            <div id="navDropdown" class="dropdown-content">
              <a data-theme="white-theme">
                <span data-theme="white-theme" class="white-theme theme-indicator"></span>
              </a>
              <a data-theme="solarized-theme">
                <span data-theme="solarized-theme" class="solarized-theme theme-indicator"></span>
              </a>
              <a data-theme="dark-theme">
                <span data-theme="dark-theme" class="dark-theme theme-indicator"></span>
              </a>
              <a data-theme="black-theme">
                <span data-theme="black-theme" class="black-theme theme-indicator"></span>
              </a>
            </div>
          </div>
        </li>
      </div>
    </div>
    <div class="content">
      ${md.render(pageContent)}
      ${pageMeta.title === `Kodu` ? `${indexContent}` : ``}
    </div>
    ${
      pageMeta.hasOwnProperty('scripts')
        ? pageMeta.scripts.length
          ? pageMeta.scripts.map(value => `<script src="${value}"></script>`)
          : ''
        : this.defaultMeta.scripts.map(value => `<script src="${value}"></script>`)
    }
  </body>
</html>
`;
  },
  defaultMeta: {
    lang: 'et',
    title: 'Konspektid',
    stylesheets: ['./css/style.css'],
    scripts: ['./js/themes.js'],
    charset: 'utf-8',
    description: '',
    keywords: '',
    author: '',
    favicon: './images/favicon.png',
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    extra: []
  }
}

/*
        <li>
          <div class="dropdown">
            <a class="theme-indicator" href="#" onclick="showDropdownMenu()"></a>
            <div id="navDropdown" class="dropdown-content">
              <a onclick="setTheme('white-theme')">
                <span class="white-theme theme-indicator"></span>
              </a>
              <a onclick="setTheme('solarized-theme')">
                <span class="solarized-theme theme-indicator"></span>
              </a>
              <a onclick="setTheme('dark-theme')">
                <span class="dark-theme theme-indicator"></span>
              </a>
              <a onclick="setTheme('black-theme')">
                <span class="black-theme theme-indicator"></span>
              </a>
            </div>
          </div>
        </li>
*/