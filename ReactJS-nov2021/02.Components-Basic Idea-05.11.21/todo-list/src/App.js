import './App.css';
import FooterClassComponent from './components/FooterClassComponent';
import TodoList1vFragment from './components/TodoList1vFragment';
import TodoList2vProps from './components/TodoList2vProps';
import TodoList3vPropChildren from './components/TodoList3vPropsChildren';
import TodoList4vPropsJsExpressions from './components/TodoList4vPropsJsExpressions';
import TodoList5vStateArrMap from './components/TodoList5vStateArrMap';
import TodoList6vStateArrDestrAsignment from './components/TodoList6vStateArrDestrAssignment';
import TodoList7vEventHandlers from './components/TodoList7vEventHandlers';
import TodoList8vConditionalRendering from './components/TodoList8vConditionalRendering';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo App</h1>
            </header>

            <main>
                <TodoList8vConditionalRendering />
                <TodoList7vEventHandlers />
                <TodoList6vStateArrDestrAsignment />
                <TodoList5vStateArrMap />
                <TodoList4vPropsJsExpressions />
                <TodoList3vPropChildren />
                <TodoList2vProps />
                <TodoList1vFragment />
            </main>

            <FooterClassComponent />
        </div>
    );
}

export default App;
