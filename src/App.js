import React from "react";
import axios from "axios";
import AssociateModification from "./component/AssociateModification";

class App extends React.Component {

  state = {
    associateDetails: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      let data = res.data.map(item => {
        item["isEdit"] = true;
        item["status"] = "EDIT";
        return item;
      });
      this.setState({ associateDetails: data });
    });
  }

  deletePerson = index => {
    const associate = this.state.associateDetails;
    associate.splice(index, 1);
    this.setState({ associateDetails: associate });
  };

  updateName = (event, id) => {
    const associateIndex = this.state.associateDetails.findIndex(p => {
      return p.id === id;
    });
    let data = this.state.associateDetails;
    data[associateIndex]["name"] = event.target.value;
    this.setState({ associateDetails: data });
  };

  updateUserName = (event, id) => {
    const associateIndex = this.state.associateDetails.findIndex(p => {
      return p.id === id;
    });
    let data = this.state.associateDetails;
    data[associateIndex]["username"] = event.target.value;
    this.setState({ associateDetails: data });
  };

  updateEmail = (event, id) => {
    const associateIndex = this.state.associateDetails.findIndex(p => {
      return p.id === id;
    });
    let data = this.state.associateDetails;
    data[associateIndex]["email"] = event.target.value;
    this.setState({ associateDetails: data });
  };

  update = (event, id) => {
    
    const associateIndex = this.state.associateDetails.findIndex(p => {
      return p.id === id;
    });


    
    // const associate = {...this.state.associateDetails[associateIndex]};
    //   associate.isEdit = true;

    //   const associates = [...this.state.associateDetails]
    //   associates[associateIndex] = associate;

    //   this.setState({associateDetails:[...associates]});
    //   console.log(this.state.associateDetails);
    let associate = this.state.associateDetails;
    if(associate[associateIndex]["status"]==='EDIT'){
      associate[associateIndex]["isEdit"] = false;
      associate[associateIndex]["status"] = 'SAVE';
      this.setState({ associateDetails: [...associate] });
    }else{
      associate[associateIndex]["isEdit"] = true;
      associate[associateIndex]["status"] = 'EDIT';
      this.setState({ associateDetails: [...associate] });
    }
   
    
  };
  render() {
    let associate = null;
    associate = (
      <div>
        {this.state.associateDetails.map((item, index) => {
          return (
            <AssociateModification
              name={item.name}
              username={item.username}
              email={item.email}
              key={item.id}
              isEdit={!item.isEdit}
              status={item.status}
              click={() => this.deletePerson(index)}
              changedName={event => this.updateName(event, item.id)}
              changedUserName={event => this.updateUserName(event, item.id)}
              changedemail={event => this.updateEmail(event, item.id)}
              edit={event => this.update(event, item.id)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="App">
        <table className="tableabc">
          <thead>
            <tr>
              <td></td>
              <td>
                Name
              </td>
              <td>
                UserName
              </td>
              <td>
                Email
              </td>
              
            </tr>
          </thead>
        </table>
        {associate}
      </div>
    );
  }
}

export default App;
