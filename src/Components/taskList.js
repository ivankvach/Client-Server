import React from 'react';
import axios from 'axios';

class TaskList extends React.Component {
    state = {
        task: "",
        taskF: ""
    }

    onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask', {
            task: this.state.task,
            taskF: this.state.taskF
        });

    }

    render() {
        console.log(this.state.task)
        console.log(this.state.taskF)
        return (
            <div className='ui container'>
               <h1>Зв'язатися з нами</h1>

                <div className="ui centered grid">
                <div className="column row">
                <form id="hi" className="ui form">
  <div className="field">
    <label>First Name</label>
    <input value={this.state.task} onChange={e => this.setState({
                  task: e.target.value
               })} type="text" name="first-name" required placeholder="First Name"/>
  </div>
  <div className="field">
    <label>Email</label>
    <input value={this.state.taskF} onChange={e => this.setState({
                  taskF: e.target.value
               })} type="text" name="last-name" required placeholder="Email"/>
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabIndex="0" name="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button className="ui button" type="submit" onClick={() => this.onSubmitClick()}>Submit</button>
</form>
</div>
</div>

            </div>
        )
    }
}

export default TaskList;