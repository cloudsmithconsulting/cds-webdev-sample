import * as React from 'react';
import * as classes from './NameCard.css';

export interface INameCardProps { name: string; age: number; isImportant?: boolean; }

export class NameCard extends React.Component<INameCardProps, {}> {
  public render() {
    return (
      <div className={classes.NameCard}>{this.props.isImportant ? <span>Important</span> : null}
        <p className={classes.Name}>Name: {this.props.name}</p>
        <p className={classes.Age}>Age: {this.props.age}</p>
      </div>
    );
  }
}
