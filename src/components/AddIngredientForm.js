import React from 'react';

class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Add an ingredient'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var ingredient = {
      amount: parseFloat(this.refs.amount.value),
      baseAmount: parseFloat(this.refs.amount.value),
      measurementType: this.refs.measurementType.value,
      name: this.refs.name.value,
    };

    // Only add ingredient if correct
    // TODO: add actually good checking/validation
    if(typeof ingredient === 'object' && ingredient.hasOwnProperty('name') && ingredient.name.length > 0) {
      this.props.addIngredient(ingredient);
      this.refs.ingredientForm.reset();
    }
  }

  render() {
    return (
      <div className="add-ingredient">
        <h2>Add An ingredient:</h2>
        <form className="add-ingredient-form" ref="ingredientForm" onSubmit={this.handleSubmit}>
          <input placeholder="Amount" ref="amount" type="number" step="0.1"></input>

          <select ref="measurementType">
            <option>Select Measurement Type</option>
            <option value="teaspoon">Teaspoons(s)</option>
            <option value="tablespoon">Tablespoon(s)</option>
            <option value="cup">Cup(s)</option>
          </select>

          <input placeholder="Name" ref="name" type="text"></input>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddIngredientForm
