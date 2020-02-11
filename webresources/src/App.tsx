import * as React from 'react';
import * as classes from './App.css';
import { INameCardProps, NameCard } from './components/NameCard/NameCard';

export class App extends React.Component {
  private cards: INameCardProps[] = [
    { name: 'Test User', age: 34 },
    { name: 'Production User', age: 38 },
  ];

  public render() {
    const cards = this.cards.map((card: INameCardProps) => {
      return <NameCard key={card.name} name={card.name} age={card.age} />;
    });
    return (
      <div className={classes.App}>
        {cards}
      </div>
    );
  }
}
