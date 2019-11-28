import React from 'react';
import './AssociateModification.css';

const AssociateModification = (props) => {
  return(
      <div>
          <table className="tableabc">
              <thead>
                  <tr>
                      <td>{props.id}</td>
                      <td>
                          <input
                              type="text"
                              value={props.name}
                              onChange={props.changedName}
                              disabled={!props.isEdit}
                          />
                      </td>
                      <td>
                          <input
                              type="text"
                              value={props.username}
                              onChange={props.changedUserName}
                              disabled={!props.isEdit}
                          />
                      </td>
                      <td>
                          <input
                              type="text"
                              value={props.email}
                              onChange={props.changedemail}
                              disabled={!props.isEdit}
                          />
                      </td>
                      <td>
                          <a href="#" onClick={props.edit}>
                              {props.status}
                          </a>
                          <a href="#" onClick={props.click}>
                              DELETE
                            </a>
                      </td>
                  </tr>
              </thead>
          </table>
      </div>
  );

}

export default AssociateModification;