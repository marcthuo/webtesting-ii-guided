import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Players from './Players';

describe('<Players />', () => {
    it('Should render "no player available" when no players are provided', () => {
        const { getByText } = render(<Players />)


    // Will fail if the element is not found
        getByText(/no players/i)
    })

    it('Should render "no player available" when no players are provided', () => {
        const { queryByText } = render(<Players />)

        //  QueryByText will return null, but will not fail the test
        expect(queryByText(/no player/i)).not.toBeNull()

        expect(queryByText(/no player/i)).toBeInTheDocument()
    })

    it('should render the provided list of players', () => {
        const players = [
            { id: 1, name: 'Sam' },
            { id: 2, name: 'Bilbo' },
            { id: 3, name: 'Frodo' },
          ];

          const { getAllByTestId } = render(<Players players={players}/>)

          const playerNames = getAllByTestId('player-name').map(n => n.textContent)
          const names = players.map(p => p.name)

          expect(playerNames).toHaveLength(players.length)
          expect(playerNames).toEqual(names)
    })


})