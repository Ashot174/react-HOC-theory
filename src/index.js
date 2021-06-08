import React from 'react';
import ReactDOM from 'react-dom';


const starWarsChars = [
    {name: 'Dart Weider', side: 'dark'},
    {name: 'Lyuk Skyworker', side: 'light'},
    {name: 'Palpatin', side: 'dark'},
    {name: 'Obivan Kenoby', side: 'light'},
]

// class App extends React.Component {
//     state = {
//         starWarsChars: [
//             {name: 'Dart Weider', side: 'dark'},
//             {name: 'Lyuk Skyworker', side: 'light'},
//             {name: 'Palpatin', side: 'dark'},
//             {name: 'Obivan Kenoby', side: 'light'},
//         ]
//     }
//     render() {
//         return (
//             <ul>
//                 {this.state.starWarsChars.map((char, index) => {
//                    return (
//                        <li key={char.name + index}>
//                            <strong>{char.name}</strong> -&nbsp;
//                            {char.side}
//                        </li>
//                    )
//                 })}
//             </ul>
//         )
//     }
// }

const App = ({list}) => {
    // const filteredList = list.filter(char => char.side === side)
    return (
        <ul>
            {list.map((char, index) => {
                return (
                    <li key={char.name + index}>
                        <strong>{char.name}</strong> -&nbsp;
                        {char.side}
                    </li>
                )
            })}
        </ul>
    )
}

const withFilteredProps = Component => ({list, side}) => {
    const filteredList = list.filter(char => char.side === side)
    return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(
    <FilteredList list={starWarsChars} side={'light'}/>,
    document.getElementById('root')
)

