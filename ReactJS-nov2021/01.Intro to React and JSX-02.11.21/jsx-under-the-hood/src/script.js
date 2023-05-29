// https://legacy.reactjs.org/docs/add-react-to-a-website.html
// https://betterprogramming.pub/how-react-jsx-works-under-the-hood-6b177a8a57e1
// Единствената DOM заявка в курса за React
// Тук пишем всички React елементи. Те са обекти, които създават виртуално дърво - подоно е на DOM дървото, но е по-леко и лесно за модификация и служи за оптимизация на заявките към DOM дървото
let rootElelment = document.getElementById('root');

// let reactElement = React.createElement('h1', {}, 'Hello React!');

// по-сложната структура на React елементи с JavaScript синтаксис би изглеждало така:
// let reactElement = React.createElement(
//     'header',
//     {className: 'site-header'},
//     React.createElement('h1', {id: 'main-heading'}, 'Hello React!'),
//     React.createElement('h2',{}, 'The best framework in the world!')
// );


// с JSX изглежда така - JS expression, в който пишем HTML:
// За да го разбере браузъра, трябва да добавим JSX към проекта. Това ставаа с няколко стъпки: 
// 1. Add JSX to a Project: npm init -y и npm install babel-cli@6 babel-preset-react-app@3
// 2. Run JSX Preprocessor: npx babel --watch src --out-dir build --presets react-app/prod
// * npx командите не инсталират библиотеки, а само ги теглят и изпълняват веднага 
// сега в проекта ще се създаде папка build, в която ще се създаде и копие на script.js, но с преведен JSX към JavaScript
let reactElement = (
    <div>
        <header>
            <h1>Hello JSX!</h1>
            <h2>The best framework in the world!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus architecto, doloremque veritatis qui quas porro voluptates temporibus praesentium ducimus!</p>
        </header>
        <footer>All rights reserved &copy;</footer>
    </div>
);


ReactDOM.render(reactElement, rootElelment);